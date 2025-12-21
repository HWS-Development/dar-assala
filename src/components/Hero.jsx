import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BookingWidget from './BookingWidget.jsx';

export default function Hero({ title, subtitle, showBooking = false, backgroundImage }) {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  const defaultImage = "url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')";
  const imageUrl = backgroundImage ? `url('${backgroundImage}')` : defaultImage;

  return (
    <section className="relative h-[70vh] min-h-[420px] w-full bg-neutral-900 overflow-visible">
      <motion.div
        style={{ y, backgroundImage: imageUrl }}
        className="absolute inset-0 bg-cover bg-center overflow-hidden"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative flex h-full flex-col justify-end pb-10 z-10 overflow-visible">
        <div className="container-wide flex flex-col gap-8 overflow-visible">
          <div className="max-w-2xl space-y-3 text-white">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-200">
              {t('hero.luxuryRiad')}
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-[0.25em] uppercase">
              {title}
            </h1>
            {subtitle && (
              <p className="max-w-xl text-sm md:text-base text-neutral-100/80 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {showBooking && (
            <div className="flex justify-start relative z-50 overflow-visible">
              <BookingWidget />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


