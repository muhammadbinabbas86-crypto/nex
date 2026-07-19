import type { ReactNode } from 'react';
import { Reveal } from './motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ink-200 sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
