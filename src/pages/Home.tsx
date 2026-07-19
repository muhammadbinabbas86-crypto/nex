import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Plug, ShieldCheck } from 'lucide-react';
import Page from '../components/Page';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ServicesGrid from '../components/ServicesGrid';
import IndustriesGrid from '../components/IndustriesGrid';
import CTASection from '../components/CTASection';
import { Reveal, Counter } from '../components/motion';

const stats = [
  { to: 180, suffix: 'K+', label: 'Conversations handled monthly' },
  { to: 72, suffix: '%', label: 'Tickets auto-resolved' },
  { to: 40, suffix: '+', label: 'Businesses automated' },
  { to: 24, suffix: '/7', label: 'Always-on coverage' },
];

const steps = [
  {
    icon: Sparkles,
    title: 'Discover',
    desc: 'We audit your operations and pinpoint the automations with the highest ROI for your team.',
  },
  {
    icon: Zap,
    title: 'Design',
    desc: 'Our architects design your AI employee \u2014 trained on your business, brand voice, and workflows.',
  },
  {
    icon: Plug,
    title: 'Deploy',
    desc: 'We integrate with your stack and ship to WhatsApp, web, voice, and email in weeks.',
  },
  {
    icon: ShieldCheck,
    title: 'Optimize',
    desc: 'Continuous monitoring and tuning keep your AI employee sharper every week.',
  },
];

export default function Home() {
  return (
    <Page title="Nexora — AI Employees That Work 24/7 For Your Business">
      <Hero />

      {/* Stats */}
      <section className="section pt-10 sm:pt-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="h-full px-6 py-10 text-center sm:px-8">
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

      {/* Services preview */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="What we build"
            title={<>AI employees for every part of your operation.</>}
            description="From the first hello to the closed deal, our assistants handle conversations and workflows across every channel your customers use."
          />
          <div className="mt-14">
            <ServicesGrid limit={6} />
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/services" className="btn-ghost">
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="How it works"
            title={<>From manual to autonomous in four moves.</>}
            description="A proven, transparent process that takes you from discovery to a deployed AI employee without disrupting your current operations."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="glass relative h-full rounded-2xl p-6">
                  <span className="font-mono text-xs text-ink-300">0{i + 1}</span>
                  <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
                    <s.icon size={18} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries preview */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Industries"
            title={<>Built for the way your industry actually works.</>}
            description="We pre-train every assistant on the workflows, vocabulary, and customer journeys specific to your sector."
          />
          <div className="mt-14">
            <IndustriesGrid limit={6} />
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/industries" className="btn-ghost">
              Explore all industries
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Page>
  );
}
