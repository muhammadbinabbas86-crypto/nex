import { Target, Eye, Compass, Users, Globe2, Award } from 'lucide-react';
import Page from '../components/Page';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { Reveal, Counter } from '../components/motion';

const values = [
  { icon: Target, title: 'Outcomes over hype', desc: 'We ship automations that move real metrics \u2014 response time, conversion, retention \u2014 not demos.' },
  { icon: Eye, title: 'Radical transparency', desc: 'You see every conversation, every metric, and every decision your AI employee makes.' },
  { icon: Compass, title: 'Customer-led design', desc: 'Your processes and brand voice shape the assistant, not the other way around.' },
];

const facts = [
  { to: 40, suffix: '+', label: 'Businesses automated' },
  { to: 180, suffix: 'K+', label: 'Monthly conversations' },
  { to: 12, suffix: '', label: 'Industries served' },
  { to: 99, suffix: '%', label: 'Uptime' },
];

export default function About() {
  return (
    <Page
      title="About — Nexora"
      description="Nexora is an AI automation agency that designs, trains, and deploys AI employees for ambitious businesses worldwide."
    >
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">About Nexora</span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tightest text-white sm:text-7xl">
              We build the <span className="text-gradient">workforce</span> of the future.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Nexora is an AI automation agency on a mission to give every business a team of AI
              employees that work around the clock \u2014 trained, integrated, and accountable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="h-full px-6 py-10 text-center">
                  <Counter
                    to={s.to}
                    suffix={s.suffix}
                    className="font-display text-4xl font-semibold tracking-tightest text-white sm:text-5xl"
                  />
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-300">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <span className="eyebrow">Our mission</span>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tightest text-white sm:text-4xl">
                Give every business a workforce that never sleeps.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4 text-base leading-relaxed text-ink-200">
                <p>
                  Most businesses lose customers in the gap between interest and response. A lead at
                  midnight, a WhatsApp message at lunch, a support ticket on Sunday \u2014 each one waits.
                  We close that gap.
                </p>
                <p>
                  Nexora designs AI employees that handle real work across chat, voice, and email. They
                  greet, qualify, book, support, and route \u2014 integrated with the tools you already
                  use, trained on your business, and tuned to your brand voice.
                </p>
                <p>
                  We believe automation should feel human, accountable, and measurable. That is the
                  standard we hold every deployment to.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="What we value"
            title={<>Principles we deploy by.</>}
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="glass h-full rounded-2xl p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
                    <v.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { icon: Users, title: 'Senior architects', desc: 'Every engagement is led by an AI architect, not handed off to juniors.' },
                { icon: Globe2, title: 'Global delivery', desc: 'We deploy for businesses across multiple continents and time zones.' },
                { icon: Award, title: 'Production-grade', desc: 'Security, observability, and SLAs baked into every deployment.' },
              ].map((b, i) => (
                <Reveal key={b.title} delay={i * 0.08}>
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
                      <b.icon size={18} />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-white">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-200">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Page>
  );
}
