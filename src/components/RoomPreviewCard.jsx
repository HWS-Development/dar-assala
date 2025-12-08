import React from 'react';
import FadeIn from './FadeIn.jsx';

export default function RoomPreviewCard({ roomFolder, roomTitle, description, roomImages = [] }) {
  
  const firstImage = roomImages.length > 0
    ? encodeURI(`/images/rooms/${roomFolder}/${roomImages[0]}`)
    : "";

  return (
    <FadeIn className="flex flex-col bg-white border border-neutral-300 shadow-sm">

      {/* Image */}
      <div
        className="h-96 w-full bg-cover bg-center"
        style={{ backgroundImage: `url('${firstImage}')` }}
      />

      {/* Text Block */}
      <div className="p-6 space-y-3">
        <h3 className="font-display text-[13px] tracking-[0.25em] uppercase text-neutral-900">
          {roomTitle}
        </h3>

        <p className="text-[13px] text-neutral-700 leading-relaxed">
          {description}
        </p>
      </div>

    </FadeIn>
  );
}
