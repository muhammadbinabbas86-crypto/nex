import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cx } from '../lib/utils';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/ai-demo', label: 'AI Demo' },
  { to: '/industries', label: 'Industries' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cx(
          'flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5',
          scrolled ? 'glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]' : 'border border-transparent',
        )}
      >
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Nexora home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ink-950">
            <span className="font-display text-lg font-bold leading-none">N</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">Nexora</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cx(
                'relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300',
                location.pathname === l.to
                  ? 'text-white'
                  : 'text-ink-200 hover:text-white',
              )}
            >
              {location.pathname === l.to && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-white/8 ring-1 ring-white/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary px-4 py-2 text-sm">
            Book Free Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-strong fixed left-4 right-4 top-[68px] z-40 rounded-3xl p-4 lg:hidden"
          >
            <div className="grid gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cx(
                    'rounded-2xl px-4 py-3 text-base transition-colors',
                    location.pathname === l.to ? 'bg-white/10 text-white' : 'text-ink-100 hover:bg-white/5',
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-3 w-full">
              Book Free Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
