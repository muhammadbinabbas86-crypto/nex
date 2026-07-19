import { ShieldCheck, Lock, Sparkles, Zap } from 'lucide-react';
import Page from '../components/Page';
import ChatDemo from '../components/ChatDemo';
import CTASection from '../components/CTASection';
import { Reveal } from '../components/motion';

const points = [
  { icon: Sparkles, title: 'Real AI, not a script', desc: 'Emma is powered by OpenAI and reasons about your business in real time.' },
  { icon: Zap, title: 'Streaming responses', desc: 'Replies stream in word-by-word, just like a real conversation.' },
  { icon: Lock, title: 'Private & secure', desc: 'Your conversation stays in this session. We never store it.' },
  { icon: ShieldCheck, title: 'Never breaks character', desc: 'Emma is a Nexora consultant \u2014 always premium, always on-brand.' },
];

export default function AIDemo() {
  return (
    <Page
      title="AI Demo — Chat with Emma — Nexora"
      description="Chat live with Emma, Nexora's AI sales consultant. A real, streaming AI assistant that qualifies your needs and recommends the right automation package."
    >
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">AI Demo</span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tightest text-white sm:text-7xl">
              Meet <span className="text-gradient">Emma.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Our AI sales consultant. Chat with her live \u2014 she\u2019ll qualify your needs, recommend
              the right automation package, and help you book a free consultation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <ChatDemo />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="lg:pt-4">
                <h2 className="font-display text-2xl font-semibold tracking-tightest text-white sm:text-3xl">
                  This is the real thing.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">
                  Emma is a live AI assistant powered by OpenAI \u2014 the same kind of AI employee we
                  deploy for our clients. She remembers your conversation, asks the right questions,
                  and adapts to your answers in real time.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {points.map((p) => (
                    <div key={p.title} className="glass rounded-2xl p-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
                        <p.icon size={16} />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold text-white">{p.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink-200">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="glass-strong mt-6 rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-ink-300">Try asking Emma</p>
                  <ul className="mt-3 grid gap-2 text-sm text-ink-100">
                    <li className="flex items-start gap-2"><span className="text-white/40">•</span> "I run a dental clinic in Dubai — what can you automate?"</li>
                    <li className="flex items-start gap-2"><span className="text-white/40">•</span> "We get 200 WhatsApp leads a month and can't keep up."</li>
                    <li className="flex items-start gap-2"><span className="text-white/40">•</span> "What's the ROI of an AI receptionist?"</li>
                    <li className="flex items-start gap-2"><span className="text-white/40">•</span> "Which plan fits a 15-person team?"</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Like what Emma can do?"
        description="Imagine an AI employee trained on your business, deployed across your channels. Book a free consultation and we\u2019ll show you exactly what we\u2019d ship."
      />
    </Page>
  );
}
