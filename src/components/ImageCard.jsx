import React from 'react';
import FadeIn from './FadeIn.jsx';

export default function ImageCard({ title, description, cta, onClick, imageUrl }) {
  return (
    <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white">
      <div
        className="h-48 bg-cover bg-center sm:h-56"
        style={{
          backgroundImage:
            imageUrl ||
            "url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')"
        }}
      />
      <div className="flex flex-1 flex-col gap-3 px-5 py-6">
        <h3 className="font-display text-lg tracking-[0.16em] uppercase">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-neutral-600">{description}</p>
        {cta && (
          <button
            onClick={onClick}
            className="self-start text-xs tracking-[0.24em] uppercase text-neutral-900 underline underline-offset-4"
          >
            {cta}
          </button>
        )}
      </div>
    </FadeIn>
  );
}

