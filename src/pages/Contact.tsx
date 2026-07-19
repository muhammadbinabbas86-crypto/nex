import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import Page from '../components/Page';
import { Reveal } from '../components/motion';

const channels = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 300 1234567', href: 'https://wa.me/923001234567' },
  { icon: Phone, label: 'Phone', value: '+92 300 1234567', href: 'tel:+923001234567' },
  { icon: Mail, label: 'Email', value: 'hello@nexora.ai', href: 'mailto:hello@nexora.ai' },
];

const fields = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Ayesha Khan', required: true },
  { name: 'business', label: 'Business name', type: 'text', placeholder: 'Acme Inc.', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+92 300 1234567', required: true },
  { name: 'country', label: 'Country', type: 'text', placeholder: 'Pakistan', required: false },
  { name: 'industry', label: 'Industry', type: 'text', placeholder: 'Dental clinic', required: false },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // No backend required for this static demo; simulate a brief submission.
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <Page
      title="Contact — Nexora"
      description="Get in touch with Nexora. Book a free consultation, chat on WhatsApp, or send us a message."
    >
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tightest text-white sm:text-7xl">
              Let\u2019s build your <span className="text-gradient">AI workforce.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Book a free 30-minute consultation. We\u2019ll map the highest-ROI automations for your
              business and show you exactly what we\u2019d ship first.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            {/* Channels */}
            <Reveal>
              <div className="glass h-full rounded-3xl p-7">
                <h3 className="font-display text-lg font-semibold text-white">Talk to us directly</h3>
                <p className="mt-2 text-sm text-ink-200">
                  Prefer a quick chat? Reach us on any of these channels \u2014 we reply within one business day.
                </p>
                <div className="mt-6 grid gap-3">
                  {channels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/5"
                    >
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
                        <c.icon size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.14em] text-ink-300">{c.label}</p>
                        <p className="truncate text-sm font-medium text-white">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-xs uppercase tracking-[0.14em] text-ink-300">Visit us</h4>
                  <div className="mt-3 flex items-start gap-3 text-sm text-ink-100">
                    <MapPin size={16} className="mt-0.5 flex-none text-white" />
                    <span>Nexora HQ, Arfa Software Technology Park, Lahore, Pakistan</span>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-[4/3] w-full bg-ink-900">
                    <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <span className="absolute -inset-3 animate-pulse-ring rounded-full bg-white/20" />
                        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-950">
                          <MapPin size={18} />
                        </span>
                      </div>
                    </div>
                    <p className="absolute bottom-3 left-3 text-xs text-ink-300">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1}>
              <div className="glass-strong h-full rounded-3xl p-7 sm:p-9">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full flex-col items-center justify-center py-16 text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink-950">
                      <Check size={24} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-white">Message received</h3>
                    <p className="mt-2 max-w-sm text-sm text-ink-200">
                      Thanks, {form.name?.split(' ')[0] || 'there'}. An architect will reach out within
                      one business day to schedule your free consultation.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({});
                      }}
                      className="btn-ghost mt-7"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} className="grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      {fields.map((f) => (
                        <div key={f.name} className={f.name === 'industry' ? 'sm:col-span-2' : ''}>
                          <label htmlFor={f.name} className="text-xs font-medium uppercase tracking-[0.12em] text-ink-300">
                            {f.label}
                          </label>
                          <input
                            id={f.name}
                            name={f.name}
                            type={f.type}
                            required={f.required}
                            placeholder={f.placeholder}
                            value={form[f.name] || ''}
                            onChange={(e) => setForm((s) => ({ ...s, [f.name]: e.target.value }))}
                            className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-ink-400 transition-colors focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="size" className="text-xs font-medium uppercase tracking-[0.12em] text-ink-300">
                          Business size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={form.size || ''}
                          onChange={(e) => setForm((s) => ({ ...s, size: e.target.value }))}
                          className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white transition-colors focus:border-white/30 focus:outline-none"
                        >
                          <option value="">Select\u2026</option>
                          <option value="1-10">1\u201310 employees</option>
                          <option value="11-50">11\u201350 employees</option>
                          <option value="51-200">51\u2013200 employees</option>
                          <option value="200+">200+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="text-xs font-medium uppercase tracking-[0.12em] text-ink-300">
                          Monthly budget (PKR)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget || ''}
                          onChange={(e) => setForm((s) => ({ ...s, budget: e.target.value }))}
                          className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white transition-colors focus:border-white/30 focus:outline-none"
                        >
                          <option value="">Select\u2026</option>
                          <option value="45k">PKR 45,000 \u2013 100,000</option>
                          <option value="120k">PKR 120,000 \u2013 300,000</option>
                          <option value="300k+">PKR 300,000+</option>
                          <option value="custom">Custom / Enterprise</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.12em] text-ink-300">
                        What would you like to automate?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your current bottlenecks\u2026"
                        value={form.message || ''}
                        onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-ink-400 transition-colors focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full disabled:opacity-70"
                    >
                      {loading ? 'Sending\u2026' : 'Book Free Consultation'}
                      <Send size={15} />
                    </button>
                    <p className="text-center text-xs text-ink-300">
                      By submitting, you agree to be contacted about your inquiry. We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Page>
  );
}
