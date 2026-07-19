import { Check } from 'lucide-react';
import Page from '../components/Page';
import SectionHeader from '../components/SectionHeader';
import ServicesGrid from '../components/ServicesGrid';
import CTASection from '../components/CTASection';
import { Reveal } from '../components/motion';

const capabilities = [
  'Trained on your knowledge base, docs, and brand voice',
  'Works across WhatsApp, web, voice, and email',
  'Integrates with your CRM, calendar, and help desk',
  'Smart escalation to humans with full context',
  'Real-time analytics and conversation logs',
  'SOC 2-aligned security and data encryption',
];

export default function Services() {
  return (
    <Page
      title="Services — Nexora"
      description="AI employees for every part of your business: AI receptionist, WhatsApp AI, lead qualification, appointment booking, voice AI, CRM automation, and more."
    >
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tightest text-white sm:text-7xl">
              One team. <span className="text-gradient">Every workflow.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              We design, train, and deploy AI employees that take over repetitive conversations and
              operations \u2014 so your team focuses on the work that actually grows the business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            align="left"
            eyebrow="The catalog"
            title={<>Ten AI employees, ready to deploy.</>}
          />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
              <Reveal>
                <span className="eyebrow">Every deployment</span>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tightest text-white sm:text-4xl">
                  What comes with every Nexora AI employee.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">
                  Not a chatbot widget. A trained, integrated team member with the guardrails and
                  analytics to run in production.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-ink-100">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/10 text-white">
                        <Check size={12} />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Page>
  );
}
