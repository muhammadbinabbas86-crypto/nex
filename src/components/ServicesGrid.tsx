import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Reveal, MouseGlow } from './motion';

export default function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <Reveal key={s.id} delay={(i % 3) * 0.06}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="card-hover glass group relative h-full overflow-hidden rounded-2xl p-6"
          >
            <MouseGlow />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.name}</h3>
              <p className="mt-1.5 text-sm font-medium text-ink-200">{s.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{s.description}</p>
              <ul className="mt-4 grid gap-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-ink-200">
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-white/80 transition-colors group-hover:text-white"
              >
                Explore
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
