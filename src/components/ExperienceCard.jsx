import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FadeIn from './FadeIn.jsx';

export default function ExperienceCard({ title, description, price, images = [], includes = [] }) {
  const { t } = useTranslation();
  const imagePaths = images.map((file) => encodeURI(`/images/experiences/${file}`));

  return (
    <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Swiper Slider */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="h-64 w-full overflow-hidden"
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {imagePaths.length > 0 ? (
            imagePaths.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${img}')` }}
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="h-full w-full bg-neutral-200" />
            </SwiperSlide>
          )}
        </Swiper>
      </motion.div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 px-6 py-6">
        <div>
          <h3 className="font-display text-xl tracking-[0.16em] uppercase text-neutral-900 mb-2">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600 mb-4">
            {description}
          </p>
        </div>

        {/* Includes */}
        {includes.length > 0 && (
          <div className="border-t border-neutral-200 pt-4">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-2">
              {t('experiences.includes')}
            </p>
            <ul className="space-y-1">
              {includes.map((item, idx) => (
                <li key={idx} className="text-xs text-neutral-600">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price & CTA */}
        <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center justify-between gap-4">
          <div className="flex-1">
            {price && price !== 'null' && price !== null ? (
              <p className="text-lg font-semibold text-neutral-900">{price}</p>
            ) : (
              <p className="text-sm text-neutral-500 italic">{t('experiences.priceOnRequest')}</p>
            )}
          </div>
          <button className="bg-brand-dark px-6 py-2 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors whitespace-nowrap">
            {t('experiences.cta')}
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

