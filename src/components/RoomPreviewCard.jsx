import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn.jsx';

export default function RoomPreviewCard({ roomFolder, roomTitle, description, to = '/accommodation' }) {
  const firstImage = `/images/rooms/${roomFolder}/1.jpg`;

  return (
    <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow">
      <div
        className="h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${firstImage})` }}
      />
      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <h3 className="font-display text-lg tracking-[0.16em] uppercase text-neutral-900">
          {roomTitle}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-3">
          {description}
        </p>
        <Link
          to={to}
          className="self-start text-xs tracking-[0.24em] uppercase text-neutral-900 underline underline-offset-4 hover:text-amber-700 transition-colors"
        >
          Voir Plus
        </Link>
      </div>
    </FadeIn>
  );
}

