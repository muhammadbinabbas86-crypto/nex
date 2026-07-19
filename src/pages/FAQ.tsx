import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Page from '../components/Page';
import CTASection from '../components/CTASection';
import { faqs } from '../data/faqs';
import { Reveal } from '../components/motion';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Page
      title="FAQ — Nexora"
      description="Answers to the most common questions about Nexora AI employees, deployment, channels, security, and pricing."
    >
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tightest text-white sm:text-7xl">
              Questions, <span className="text-gradient">answered.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Everything you need to know about working with Nexora. Still curious? Chat with Emma
              on the AI Demo page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid gap-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className="glass overflow-hidden rounded-2xl">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    >
                      <span className="font-display text-base font-medium text-white sm:text-lg">
                        {f.q}
                      </span>
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/10 text-white">
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-5 pb-5 text-sm leading-relaxed text-ink-200">
                            {f.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Still have questions?"
        description="Chat with Emma, our AI sales consultant, or book a free consultation with a human architect."
        primaryLabel="Try AI Demo"
        primaryTo="/ai-demo"
        secondaryLabel="Book Free Consultation"
        secondaryTo="/contact"
      />
    </Page>
  );
}
