import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Dining() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  // Image paths array for easy swapping
  const diningImages = [
    '/images/dining/1.jpg',
    '/images/dining/2.jpg',
    '/images/dining/3.jpg',
    '/images/dining/4.jpg'
  ];

  // Parallax transform for images
  const imageY1 = useTransform(scrollY, [0, 500], [0, 50]);
  const imageY2 = useTransform(scrollY, [0, 500], [0, 50]);
  const imageY3 = useTransform(scrollY, [0, 500], [0, 50]);
  const imageY4 = useTransform(scrollY, [0, 500], [0, 50]);
  const imageY5 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />

      <Hero
        title={t('dining.hero.title')}
        subtitle={t('dining.hero.subtitle')}
        showBooking={false}
        backgroundImage={diningImages[0]}
      />

      <main className="pb-20">
        {/* Intro Section */}
        <section className="container-wide py-14 md:py-20">
          <FadeIn className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">
              {t('dining.intro.eyebrow')}
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-[0.18em] uppercase text-neutral-900">
              {t('dining.intro.title')}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-neutral-700">
              {t('dining.intro.subtitle')}
            </p>
          </FadeIn>
        </section>

        {/* Section A: Our Cuisine - Image Left, Text Right */}
        <section className="container-wide py-14 md:py-20 border-t border-neutral-200">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn className="aspect-[16/10] w-full overflow-hidden">
              <motion.div
                style={{ y: imageY1, backgroundImage: `url('${diningImages[0]}')` }}
                className="h-full w-full bg-cover bg-center shadow-sm hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>

            <FadeIn className="space-y-4 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase text-neutral-900">
                {t('dining.sections.ourCuisine.title')}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                {t('dining.sections.ourCuisine.text')}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section B: Le Verdoyant - Text Left, Image Right */}
        <section className="container-wide py-14 md:py-20 border-t border-neutral-200">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn className="space-y-4 max-w-xl order-2 md:order-1">
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase text-neutral-900">
                {t('dining.sections.leVerdoyant.title')}
              </h2>
              <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">
                {t('dining.sections.leVerdoyant.subheading')}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                {t('dining.sections.leVerdoyant.text')}
              </p>
            </FadeIn>

            <FadeIn className="aspect-[16/10] w-full overflow-hidden order-1 md:order-2">
              <motion.div
                style={{ y: imageY2, backgroundImage: `url('${diningImages[1]}')` }}
                className="h-full w-full bg-cover bg-center shadow-sm hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>
          </div>
        </section>

        {/* Section C: The Fountain - Image Left, Text Right */}
        <section className="container-wide py-14 md:py-20 border-t border-neutral-200">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn className="aspect-[16/10] w-full overflow-hidden">
              <motion.div
                style={{ y: imageY3, backgroundImage: `url('${diningImages[2]}')` }}
                className="h-full w-full bg-cover bg-center shadow-sm hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>

            <FadeIn className="space-y-4 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase text-neutral-900">
                {t('dining.sections.fountain.title')}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                {t('dining.sections.fountain.text')}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section D: Rooftop Experience - Text Left, Image Right */}
        <section className="container-wide py-14 md:py-20 border-t border-neutral-200">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn className="space-y-4 max-w-xl order-2 md:order-1">
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase text-neutral-900">
                {t('dining.sections.rooftop.title')}
              </h2>
              <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">
                {t('dining.sections.rooftop.subheading')}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                {t('dining.sections.rooftop.text')}
              </p>
            </FadeIn>

            <FadeIn className="aspect-[16/10] w-full overflow-hidden order-1 md:order-2">
              <motion.div
                style={{ y: imageY4, backgroundImage: `url('${diningImages[3]}')` }}
                className="h-full w-full bg-cover bg-center shadow-sm hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>
          </div>
        </section>

        {/* Breakfast Section - Full Width */}
        <section className="container-wide py-14 md:py-20 border-t border-neutral-200">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn className="aspect-[16/10] w-full overflow-hidden">
              <motion.div
                style={{ y: imageY5, backgroundImage: `url('${diningImages[0]}')` }}
                className="h-full w-full bg-cover bg-center shadow-sm hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>

            <FadeIn className="space-y-4 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase text-neutral-900">
                {t('dining.sections.breakfast.title')}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                {t('dining.sections.breakfast.text')}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Menu Download Block */}
        <section className="container-wide py-14 md:py-20 border-t border-neutral-200">
          <FadeIn className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase text-neutral-900">
              {t('dining.menu.title')}
            </h2>
            <a
              href="/menus/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neutral-900 text-white px-8 py-3 text-xs tracking-[0.24em] uppercase hover:text-amber-700 hover:border-amber-700 border-2 border-transparent transition-colors duration-300"
            >
              {t('dining.menu.downloadButton')}
            </a>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
