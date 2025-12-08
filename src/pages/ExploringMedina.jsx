import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function ExploringMedina() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-neutral-900">
        <motion.div
          style={{
            y,
            backgroundImage: "url('/images/medina/hero.jpg')"
          }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex h-full flex-col justify-center items-center text-center">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto space-y-3 text-white">
              <h1 className="font-display text-4xl md:text-5xl tracking-[0.25em] uppercase">
                {t('exploringMedina.hero.title')}
              </h1>
              {t('exploringMedina.hero.subtitle') && (
                <p className="max-w-xl mx-auto text-sm md:text-base text-neutral-100/80 leading-relaxed">
                  {t('exploringMedina.hero.subtitle')}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="space-y-20 pb-16">
        {/* Featured Section (large image left, text block right) */}
        <section className="container-wide grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <FadeIn className="h-80 md:h-96 w-full overflow-hidden bg-neutral-300 rounded-sm shadow-sm">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/medina/featured.jpg')" }}
            />
          </FadeIn>

          <FadeIn className="border border-neutral-200 bg-white px-7 py-8 shadow-sm">
            <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">
              {t('exploringMedina.featured.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl tracking-[0.18em] uppercase">
              {t('exploringMedina.featured.title')}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              {t('exploringMedina.featured.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="bg-brand-dark px-6 py-2 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
                {t('exploringMedina.featured.explore')}
              </button>
              <button className="border border-neutral-900 px-6 py-2 text-xs tracking-[0.24em] uppercase hover:bg-neutral-900 hover:text-white transition-colors">
                {t('exploringMedina.featured.details')}
              </button>
            </div>
          </FadeIn>
        </section>

        {/* Card Grid (3 cards) */}
        <section className="container-wide">
          <div className="grid gap-8 md:grid-cols-3">
            <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white">
              <div
                className="h-48 bg-cover bg-center sm:h-56"
                style={{ backgroundImage: "url('/images/medina/medina.jpg')" }}
              />
              <div className="flex flex-1 flex-col gap-3 px-5 py-6">
                <h3 className="font-display text-lg tracking-[0.16em] uppercase">
                  {t('exploringMedina.cards.medina.title')}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                  {t('exploringMedina.cards.medina.description')}
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button className="text-xs tracking-[0.24em] uppercase text-neutral-900 underline underline-offset-4 hover:text-amber-700 transition-colors">
                    {t('exploringMedina.cards.medina.explore')}
                  </button>
                  <button className="text-xs tracking-[0.24em] uppercase text-neutral-900 underline underline-offset-4 hover:text-amber-700 transition-colors">
                    {t('exploringMedina.cards.medina.details')}
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white">
              <div
                className="h-48 bg-cover bg-center sm:h-56"
                style={{ backgroundImage: "url('/images/medina/souks.jpg')" }}
              />
              <div className="flex flex-1 flex-col gap-3 px-5 py-6">
                <h3 className="font-display text-lg tracking-[0.16em] uppercase">
                  {t('exploringMedina.cards.souks.title')}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                  {t('exploringMedina.cards.souks.description')}
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button className="text-xs tracking-[0.24em] uppercase text-neutral-900 underline underline-offset-4 hover:text-amber-700 transition-colors">
                    {t('exploringMedina.cards.souks.explore')}
                  </button>
                  <button className="text-xs tracking-[0.24em] uppercase text-neutral-900 underline underline-offset-4 hover:text-amber-700 transition-colors">
                    {t('exploringMedina.cards.souks.details')}
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white">
              <div
                className="h-48 bg-cover bg-center sm:h-56"
                style={{ backgroundImage: "url('/images/medina/conseils.jpg')" }}
              />
              <div className="flex flex-1 flex-col gap-3 px-5 py-6">
                <h3 className="font-display text-lg tracking-[0.16em] uppercase">
                  {t('exploringMedina.cards.tips.title')}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                  {t('exploringMedina.cards.tips.description')}
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button className="text-xs tracking-[0.24em] uppercase text-neutral-900 underline underline-offset-4 hover:text-amber-700 transition-colors">
                    {t('exploringMedina.cards.tips.explore')}
                  </button>
                  <button className="text-xs tracking-[0.24em] uppercase text-neutral-900 underline underline-offset-4 hover:text-amber-700 transition-colors">
                    {t('exploringMedina.cards.tips.details')}
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
