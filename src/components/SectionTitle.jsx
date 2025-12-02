import React from 'react';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  
  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">{eyebrow}</p>
      )}
      {title && (
        <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="max-w-2xl text-sm md:text-base leading-relaxed text-neutral-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

