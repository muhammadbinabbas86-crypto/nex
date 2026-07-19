import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  title = 'Ready to hire your first AI employee?',
  description = 'Book a free consultation and we\u2019ll map the automations with the highest ROI for your business \u2014 in 30 minutes, not weeks.',
  primaryLabel = 'Book Free Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Try AI Demo',
  secondaryTo = '/ai-demo',
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:40px_40px] opacity-30" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tightest text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={primaryTo} className="btn-primary w-full sm:w-auto">
                {primaryLabel}
                <ArrowRight size={16} />
              </Link>
              <Link to={secondaryTo} className="btn-ghost w-full sm:w-auto">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
