import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Instagram, ArrowUpRight } from 'lucide-react';

const cols = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'AI Demo', to: '/ai-demo' },
      { label: 'Industries', to: '/industries' },
    ],
  },
];

const socials = [
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ink-950">
                <span className="font-display text-lg font-bold leading-none">N</span>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-white">Nexora</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-200">
              We design and deploy AI employees that work around the clock — automating conversations,
              operations, and growth for ambitious businesses.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-100 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-1 text-sm text-ink-100 transition-colors hover:text-white"
                    >
                      {l.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-300">
            &copy; {new Date().getFullYear()} Nexora. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-ink-300">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
