import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function ExploringMedina() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title={t('exploringMedina.hero.title')}
        subtitle={t('exploringMedina.hero.subtitle')}
        backgroundImage="/images/medina/hero.jpg"
        showBooking={false}
      />

      <main className="space-y-20 pb-16 pt-14">
        {/* Section: Les monuments incontournables (Text Left, Image Right) */}
        <section className="container-wide">
          <div className="grid gap-10 md:grid-cols-[1fr,1.2fr] md:items-center">
            <FadeIn className="space-y-6 order-2 md:order-1">
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
                {t('exploringMedina.monuments.title')}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-neutral-600">
                {t('exploringMedina.monuments.description')}
              </p>
              <button className="bg-brand-dark px-6 py-2 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
                {t('exploringMedina.monuments.button')}
              </button>
            </FadeIn>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-80 md:h-96 w-full overflow-hidden rounded-sm shadow-lg order-1 md:order-2"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/medina/monuments.jpg')" }}
              />
            </motion.div>
          </div>
        </section>

        {/* 3-Card Grid Section */}
        <section className="container-wide">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 - La Médina */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col overflow-hidden border border-neutral-200 bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300"
            >
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
              </div>
            </motion.div>

            {/* Card 2 - Souks & Artisans */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col overflow-hidden border border-neutral-200 bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div
                className="h-48 bg-cover bg-center sm:h-56"
                style={{ backgroundImage: "url('/images/medina/artisans.jpg')" }}
              />
              <div className="flex flex-1 flex-col gap-3 px-5 py-6">
                <h3 className="font-display text-lg tracking-[0.16em] uppercase">
                  {t('exploringMedina.cards.artisans.title')}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                  {t('exploringMedina.cards.artisans.description')}
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Conseils Pratiques */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col overflow-hidden border border-neutral-200 bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div
                className="h-48 bg-cover bg-center sm:h-56"
                style={{ backgroundImage: "url('/images/medina/tips.jpg')" }}
              />
              <div className="flex flex-1 flex-col gap-3 px-5 py-6">
                <h3 className="font-display text-lg tracking-[0.16em] uppercase">
                  {t('exploringMedina.cards.tips.title')}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                  {t('exploringMedina.cards.tips.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Visite Guidée (Image Left, Text Right) */}
        <section className="container-wide">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-80 md:h-96 w-full overflow-hidden rounded-sm shadow-lg"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/medina/guide.jpg')" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
                {t('exploringMedina.guidedTour.title')}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-neutral-600">
                {t('exploringMedina.guidedTour.description')}
              </p>
              <button className="bg-brand-dark px-6 py-2 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
                {t('exploringMedina.guidedTour.button')}
              </button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container-wide">
          <FadeIn className="max-w-3xl mx-auto text-center space-y-6 py-12">
            <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
              {t('exploringMedina.cta.title')}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-neutral-600">
              {t('exploringMedina.cta.subtitle')}
            </p>
            <button className="bg-brand-dark px-8 py-3 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
              {t('exploringMedina.cta.button')}
            </button>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
