import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const glowX = useTransform(sx, [0, 1], ['-20%', '20%']);
  const glowY = useTransform(sy, [0, 1], ['-20%', '20%']);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-36 sm:pt-44">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]"
        />
        <div className="absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <span className="eyebrow">
            <Sparkles size={12} className="text-white" />
            AI Automation Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tightest text-white sm:text-7xl md:text-8xl"
        >
          AI Employees That Work{' '}
          <span className="text-gradient">24/7</span> For Your Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg"
        >
          Automate WhatsApp, customer support, lead qualification, appointment booking and repetitive
          tasks using intelligent AI assistants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link to="/contact" className="btn-primary w-full sm:w-auto">
            Book Free Consultation
            <ArrowRight size={16} />
          </Link>
          <Link to="/ai-demo" className="btn-ghost w-full sm:w-auto">
            <Play size={14} />
            Try AI Demo
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.18em] text-ink-300"
        >
          <span>WhatsApp AI</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-500 sm:inline-block" />
          <span>Lead Qualification</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-500 sm:inline-block" />
          <span>Voice AI</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-500 sm:inline-block" />
          <span>CRM Automation</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-500 sm:inline-block" />
          <span>24/7 Support</span>
        </motion.div>
      </div>

      {/* Floating preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-20 max-w-5xl px-6"
      >
        <div className="glass relative overflow-hidden rounded-3xl p-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
          <div className="relative overflow-hidden rounded-2xl bg-ink-900">
            <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
            <div className="relative grid gap-3 p-6 sm:grid-cols-3 sm:p-10">
              {[
                { k: 'Avg. response time', v: '0.8s', sub: 'across chat & voice' },
                { k: 'Tickets auto-resolved', v: '72%', sub: 'without human handoff' },
                { k: 'Conversations / month', v: '180k+', sub: 'handled by AI employees' },
              ].map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className="glass rounded-2xl p-5 text-left"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-ink-300">{s.k}</p>
                  <p className="mt-3 font-display text-3xl font-semibold text-white">{s.v}</p>
                  <p className="mt-1 text-xs text-ink-300">{s.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
