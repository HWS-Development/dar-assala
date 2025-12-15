import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import FadeIn from '../components/FadeIn.jsx';

export default function Offers() {
  const { t } = useTranslation();

  const offers = [
    {
      key: 'earlyBooking',
      image:
        "url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')"
    },
    {
      key: 'longStay',
      image:
        "url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')"
    },
    {
      key: 'seasonal',
      image:
        "url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />

      {/* HERO */}
      <Hero
        title={t('offers.hero.title')}
        subtitle={t('offers.hero.subtitle')}
        showBooking={false}
      />

      <main className="pb-20 pt-16">
        <section className="container-wide space-y-10">
          <FadeIn className="text-center max-w-3xl mx-auto space-y-4 mb-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">
              {t('offers.hero.title')}
            </p>
            <p className="text-sm md:text-base leading-relaxed text-neutral-700">
              {t('offers.intro.text')}
            </p>
          </FadeIn>

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={40}
            loop
            autoplay={{
              delay: 4500,
              disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.key}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                  className="grid gap-8 md:grid-cols-[1.1fr,1fr] md:items-stretch"
                >
                  {/* Text side */}
                  <div className="flex flex-col justify-center space-y-5 md:space-y-6">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">
                      {t(`offers.${offer.key}.eyebrow`)}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl tracking-[0.35em] uppercase text-neutral-900">
                      {t(`offers.${offer.key}.title`)}
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed text-neutral-700 max-w-xl">
                      {t(`offers.${offer.key}.description`)}
                    </p>
                   
                  </div>

                  {/* Image side */}
                  <div className="h-72 md:h-80 w-full overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: offer.image }}
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

      <Footer />
    </div>
  );
}

