export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'What exactly is an "AI employee"?',
    a: 'An AI employee is a trained assistant that handles a specific role in your business — receptionist, lead qualifier, support agent, booker — working 24/7 across chat, voice, and email. It follows your processes and integrates with the tools you already use.',
  },
  {
    q: 'How quickly can Nexora deploy for my business?',
    a: 'Most Starter deployments go live in 5\u20137 business days. Professional plans typically take 2\u20133 weeks, including integration, training on your knowledge base, and testing. Enterprise rollouts are phased and scoped with your dedicated architect.',
  },
  {
    q: 'Will the AI sound robotic or generic?',
    a: 'No. Every assistant is trained on your business, brand voice, and common scenarios. Emma, our sales consultant, is a good preview of the tone — natural, specific, and persuasive. Voice agents use state-of-the-art speech models with natural cadence and interruption handling.',
  },
  {
    q: 'What channels do you support?',
    a: 'WhatsApp (Official API), web chat, voice (inbound and outbound telephony), email, and any platform we can integrate through your CRM or help desk. We connect to the tools your customers already use.',
  },
  {
    q: 'Do I need to replace my existing CRM or tools?',
    a: 'Never. We integrate with your current stack \u2014 Salesforce, HubSpot, Zoho, Google Calendar, Calendly, Zendesk, and more. If it has an API, we can almost certainly connect to it.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Pricing is a monthly subscription in PKR, scaled by the number of assistants, channels, and conversation volume. Enterprise is custom-quoted based on locations, integrations, and SLA requirements. There are no per-message surprises.',
  },
  {
    q: 'What happens when the AI can\u2019t handle a conversation?',
    a: 'It escalates gracefully. Edge cases and complex requests are routed to a human teammate with full context attached, so the handoff feels seamless to your customer.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Conversations are encrypted in transit and at rest. We follow least-privilege access, do not train shared models on your data, and Enterprise includes a security review plus SSO.',
  },
  {
    q: 'Can I try before I commit?',
    a: 'You can chat with Emma on our AI Demo page right now \u2014 she\u2019ll qualify your needs and recommend a package. For a live pilot on your own channels, book a free consultation and we\u2019ll scope a proof of concept.',
  },
  {
    q: 'What if I want to cancel?',
    a: 'Plans are month-to-month. You can cancel anytime with 30 days notice and we\u2019ll help wind down integrations cleanly. No lock-in contracts on Starter and Professional.',
  },
];
