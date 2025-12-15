import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FadeIn from '../components/FadeIn.jsx';

export default function About() {
  const { t } = useTranslation();

  const baseTransition = {
    duration: 0.8,
    ease: [0.22, 0.61, 0.36, 1]
  };

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />

      {/* Hero style section inspired by Rosewood */}
      <section className="relative h-[55vh] min-h-[360px] w-full overflow-hidden bg-neutral-900">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={baseTransition}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      <main className="pb-20 pt-16 space-y-20">
        {/* Intro title + paragraph */}
        <section className="container-wide">
          <FadeIn className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-display text-3xl md:text-4xl tracking-[0.2em] uppercase">
              {t('about.hero.title')}
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-neutral-700">
              {t('about.hero.subtitle')}
            </p>
          </FadeIn>
        </section>

        {/* Essence du lieu */}
        <section className="container-wide">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <FadeIn>
              <h2 className="font-display text-2xl md:text-3xl tracking-[0.18em] uppercase">
                {t('about.essence.title')}
              </h2>
            </FadeIn>
            <FadeIn>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                {t('about.essence.text')}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Histoire & identité – two portrait images side by side, then text (like reference) */}
        <section className="container-wide space-y-10">
          <div className="flex flex-col items-center gap-8">
            {/* Images row */}
            <FadeIn className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="h-64 md:h-80 w-full sm:w-[320px] md:w-[360px] overflow-hidden bg-neutral-200">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg?auto=compress&cs=tinysrgb&w=1600')"
                  }}
                />
              </div>
              <div className="h-64 md:h-80 w-full sm:w-[320px] md:w-[360px] overflow-hidden bg-neutral-200">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')"
                  }}
                />
              </div>
            </FadeIn>

            {/* Text below, centered */}
            <FadeIn className="max-w-4xl text-center space-y-4">
              <h2 className="font-display text-2xl md:text-3xl tracking-[0.18em] uppercase">
                {t('about.history.title')}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                {t('about.history.text')}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Philosophie & accueil – large image + text block */}
        <section className="container-wide">
          <div className="space-y-10">
            <FadeIn className="h-72 md:h-96 w-full overflow-hidden bg-neutral-200">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600')"
                }}
              />
            </FadeIn>

            <FadeIn className="max-w-4xl mx-auto text-center space-y-4">
              <h2 className="font-display text-2xl md:text-3xl tracking-[0.18em] uppercase">
                {t('about.philosophy.title')}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                {t('about.philosophy.text')}
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


