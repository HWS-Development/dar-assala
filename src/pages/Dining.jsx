import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Dining() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />

      {/* A. Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-neutral-900">
        <motion.div
          style={{
            y,
            backgroundImage: "url('/images/dining/Screenshot 2025-12-06 213636.png')"
          }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex h-full flex-col justify-center items-center text-center">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto space-y-3 text-white">
              <h1 className="font-display text-4xl md:text-5xl tracking-[0.25em] uppercase">
                {t('dining.hero.title')}
              </h1>
              {t('dining.hero.subtitle') && (
                <p className="max-w-xl mx-auto text-sm md:text-base text-neutral-100/80 leading-relaxed">
                  {t('dining.hero.subtitle')}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="space-y-20 pb-16 pt-14">
        {/* B. Présentation du restaurant */}
        <section className="container-wide">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn className="space-y-4">
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
                {t('dining.presentation.title')}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-neutral-600">
                {t('dining.presentation.description')}
              </p>
            </FadeIn>

            <FadeIn className="h-80 md:h-96 w-full overflow-hidden rounded-sm">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/dining/Screenshot 2025-12-06 214229.png')" }}
              />
            </FadeIn>
          </div>
        </section>

        {/* C. Concept Culinaire */}
        <section className="container-wide space-y-6">
          <FadeIn>
            <SectionTitle
              title={t('dining.concept.title')}
              subtitle={t('dining.concept.description')}
            />
          </FadeIn>

          <FadeIn className="w-full h-96 md:h-[500px] overflow-hidden rounded-sm">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/dining/Screenshot 2025-12-06 213636.png')" }}
            />
          </FadeIn>
        </section>

        {/* D. Rooftop Experience */}
        <section className="container-wide space-y-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn className="space-y-4 order-2 md:order-1">
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
                {t('dining.rooftop.title')}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-neutral-600">
                {t('dining.rooftop.description')}
              </p>
            </FadeIn>

            <FadeIn className="h-80 md:h-96 w-full overflow-hidden rounded-sm order-1 md:order-2">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/dining/rooftop.jpg')" }}
              />
            </FadeIn>
          </div>
        </section>

        {/* E. Petit-déjeuner */}
        <section className="bg-brand-cream/50 py-16">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <FadeIn className="h-80 md:h-96 w-full overflow-hidden rounded-sm">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/dining/Screenshot 2025-12-06 214649.png')" }}
                />
              </FadeIn>

              <FadeIn className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
                  {t('dining.breakfast.title')}
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-neutral-600">
                  {t('dining.breakfast.description')}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* F. Menu (PDF Download) */}
        <section className="container-wide space-y-6">
          <FadeIn>
            <SectionTitle
              title={t('dining.menu.title')}
              subtitle={t('dining.menu.description')}
            />
          </FadeIn>

          <FadeIn className="flex justify-center pt-4">
            <a
              href="/menus/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 uppercase tracking-wide rounded-md hover:bg-neutral-800 transition-colors text-xs md:text-sm"
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
