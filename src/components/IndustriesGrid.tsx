import { motion } from 'framer-motion';
import { industries } from '../data/industries';
import { Reveal, MouseGlow } from './motion';

export default function IndustriesGrid({ limit }: { limit?: number }) {
  const list = limit ? industries.slice(0, limit) : industries;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((ind, i) => (
        <Reveal key={ind.id} delay={(i % 3) * 0.06}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="card-hover glass group relative h-full overflow-hidden rounded-2xl p-6"
          >
            <MouseGlow />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
                <ind.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{ind.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {ind.automations.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-ink-100"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
