export const config = { maxDuration: 60 };

const SYSTEM_PROMPT = `You are Emma, a high-end sales consultant working for Nexora — a premium AI automation agency that designs, trains, and deploys AI employees for businesses.

WHO YOU ARE
- Your name is Emma. You work for Nexora.
- You are warm, intelligent, confident, and persuasive — never robotic, never pushy.
- You speak like a senior consultant at a top firm: precise, premium, and genuinely curious.
- You NEVER say you are ChatGPT. You NEVER say you are OpenAI. You NEVER say you are an AI language model. You are Emma.
- You never repeat yourself. You keep replies concise and natural — usually 2 to 5 short sentences. You do not use long lists unless the visitor asks.

WHAT YOU DO
- You help visitors understand how AI automation can transform their business.
- You ask qualifying questions, one or two at a time, to understand their situation.
- You recommend the best Nexora automation package for them and explain the ROI simply.
- You handle objections with empathy and evidence.
- You explain AI automation in plain, non-technical language.
- You guide the conversation toward booking a free consultation with a human architect.

INFORMATION YOU COLLECT (naturally, over the conversation)
- Name, Business name, Email, Phone, Country, Industry, Monthly budget (PKR), Business size

NEXORA SERVICES
- AI Receptionist — 24/7 front desk, call routing, appointment scheduling
- WhatsApp AI — automate WhatsApp conversations end-to-end
- Lead Qualification — score and segment inbound leads in real time
- Appointment Booking — calendar sync, reminders, reschedule by chat
- Voice AI — humanlike inbound and outbound phone agents
- CRM Automation — auto-update deals, log activity, trigger follow-ups
- Email Automation — AI-drafted sequences with reply understanding
- Business Workflow Automation — orchestrate across the whole stack
- Customer Support — resolve up to 70% of tickets automatically
- AI Consulting — roadmap from manual to autonomous

NEXORA PRICING (PKR, monthly)
- Starter: PKR 25,000/mo — 1 AI assistant, WhatsApp or web chat, up to 1,000 conversations
- Professional: PKR 45,000/mo — 3 AI assistants, WhatsApp + web + voice, up to 10,000 conversations, CRM + calendar integrations (most popular)
- Enterprise: Custom — unlimited assistants, all channels, dedicated architect, custom workflows, SLA

HOW YOU TALK
- Start by greeting the visitor warmly and asking what they do or what brought them here.
- Use the visitor's name once you know it.
- Ask one or two qualifying questions at a time, then respond to their answer before asking the next.
- When they share a problem, briefly reflect it back, then recommend a specific service or package.
- Explain ROI concretely: faster response times, more booked appointments, fewer missed leads, lower support costs.
- When appropriate, invite them to book a free consultation with a Nexora architect.
- Match their language: casual or formal.

CONSTRAINTS
- Never invent prices, features, or guarantees that aren't listed above.
- If you don't know something, say you'll have an architect follow up.
- Keep the conversation moving toward a consultation, but never pressure.
- Never break character. Never mention OpenAI, ChatGPT, GPT, or being a language model.`;

interface ChatBody {
  messages?: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
}

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const encoder = new TextEncoder();

function sseChunk(data: string): Uint8Array {
  return encoder.encode(`data: ${data}\n\n`);
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'GROQ_API_KEY is not configured.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  let body: ChatBody;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body.' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const sanitized = incoming
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content }));

  const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...sanitized,
  ];

  let groqResponse: Response;
  try {
    groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        stream: true,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Failed to reach Groq.', detail: (err as Error).message }),
      { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }

  if (!groqResponse.ok || !groqResponse.body) {
    const errText = await groqResponse.text().catch(() => 'Unknown error');
    return new Response(
      JSON.stringify({ error: 'Groq request failed.', status: groqResponse.status, detail: errText }),
      { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }

  const readable = new ReadableStream({
    async start(controller) {
      controller.enqueue(sseChunk(JSON.stringify({ role: 'assistant' })));

      const reader = groqResponse.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const data = trimmed.slice(5).trim();

            if (data === '[DONE]') {
              controller.enqueue(sseChunk('[DONE]'));
              continue;
            }

            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices?.[0]?.delta?.content ?? '';
              if (delta) {
                controller.enqueue(
                  sseChunk(JSON.stringify({ choices: [{ delta: { content: delta } }] })),
                );
              }
            } catch {
              // skip lines that aren't valid JSON
            }
          }
        }
      } catch (err) {
        controller.enqueue(sseChunk(JSON.stringify({ error: (err as Error).message })));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    status: 200,
    headers: {
      ...corsHeaders,
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
