import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FadeIn from './FadeIn.jsx';

function RoomCard({ roomFolder, roomTitle, description, features = [] }) {
  const { t } = useTranslation();
  const images = [1, 2, 3, 4, 5].map((num) => `/images/rooms/${roomFolder}/${num}.jpg`);

  return (
    <FadeIn className="grid gap-8 md:grid-cols-[1.2fr,1fr] items-center border border-neutral-200 bg-white overflow-hidden rounded-sm shadow-sm">
      {/* Swiper Slider - Left */}
      <div className="h-80 md:h-96 w-full overflow-hidden rounded-l-sm">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Text Block - Right */}
      <div className="px-6 md:px-8 py-8 flex flex-col gap-4 rounded-r-sm">
        <h3 className="font-display text-xl md:text-2xl tracking-[0.18em] uppercase text-neutral-900">
          {roomTitle}
        </h3>
        
        <p className="text-sm md:text-base leading-relaxed text-neutral-600">
          {description}
        </p>

        {/* Features Row */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-4 text-xs text-neutral-500 tracking-[0.2em] uppercase pt-2 border-t border-neutral-200">
            {features.map((feature, idx) => (
              <span key={idx}>{feature}</span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="bg-brand-dark px-6 py-2 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
            {t('accommodation.rooms.book')}
          </button>
          <button className="border border-neutral-900 px-6 py-2 text-xs tracking-[0.24em] uppercase hover:bg-neutral-900 hover:text-white transition-colors">
            {t('accommodation.rooms.details')}
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export default RoomCard;