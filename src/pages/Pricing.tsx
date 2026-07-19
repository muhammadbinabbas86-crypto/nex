import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Page from '../components/Page';
import CTASection from '../components/CTASection';
import { plans } from '../data/pricing';
import { Reveal, MouseGlow } from '../components/motion';

const faqs = [
  { q: 'Are these prices final?', a: 'Prices are monthly subscriptions in PKR — Starter at PKR 25,000 and Professional at PKR 45,000. Enterprise is custom-quoted based on locations, integrations, and SLA.' },
  { q: 'Can I change plans later?', a: 'Yes. You can upgrade or downgrade anytime; changes take effect on the next billing cycle.' },
  { q: 'Is there a setup fee?', a: 'Starter has no setup fee. Professional and Enterprise include onboarding and integration in the monthly subscription.' },
  { q: 'What channels are included?', a: 'Starter covers WhatsApp or web chat. Professional adds voice and CRM integrations. Enterprise includes all channels plus custom integrations.' },
];

export default function Pricing() {
  return (
    <Page
      title="Pricing — Nexora"
      description="Transparent monthly pricing in PKR. Starter, Professional, and Enterprise plans for AI employees that automate your business."
    >
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">Pricing</span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tightest text-white sm:text-7xl">
              Pricing that scales with <span className="text-gradient">your ambition.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Monthly subscriptions in PKR. No per-message surprises. Cancel anytime.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className={`card-hover glass relative h-full overflow-hidden rounded-3xl p-7 ${
                    p.highlight ? 'ring-1 ring-white/20' : ''
                  }`}
                >
                  <MouseGlow />
                  <div className="relative">
                    {p.highlight && (
                      <span className="absolute right-0 top-0 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-950">
                        <Sparkles size={11} /> Popular
                      </span>
                    )}
                    <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                    <p className="mt-2 text-sm text-ink-200">{p.tagline}</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-display text-4xl font-semibold tracking-tightest text-white">
                        {p.price}
                      </span>
                      <span className="text-sm text-ink-300">{p.period}</span>
                    </div>
                    <Link
                      to="/contact"
                      className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                        p.highlight
                          ? 'bg-white text-ink-950 hover:shadow-[0_12px_40px_-8px_rgba(255,255,255,0.35)]'
                          : 'border border-white/15 text-white hover:bg-white/5'
                      }`}
                    >
                      {p.cta}
                    </Link>
                    <ul className="mt-7 grid gap-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-ink-100">
                          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/10 text-white">
                            <Check size={12} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-3xl">
            <h3 className="text-center font-display text-2xl font-semibold text-white">Pricing questions</h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className="glass rounded-2xl p-5">
                  <p className="text-sm font-semibold text-white">{f.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which plan fits?"
        description="Chat with Emma on our AI Demo page and she\u2019ll recommend the right package based on your business size and goals."
        primaryLabel="Try AI Demo"
        primaryTo="/ai-demo"
        secondaryLabel="Talk to us"
        secondaryTo="/contact"
      />
    </Page>
  );
}
