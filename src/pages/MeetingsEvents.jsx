import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function MeetingsEvents() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  const servicesLeft = t('meetingsEvents.services.items.left', { returnObjects: true });
  const servicesRight = t('meetingsEvents.services.items.right', { returnObjects: true });

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-neutral-900">
        <motion.div
          style={{
            y,
            backgroundImage: "url('/images/events/hero.jpg')"
          }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex h-full flex-col justify-center items-center text-center">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto space-y-3 text-white">
              <h1 className="font-display text-4xl md:text-5xl tracking-[0.25em] uppercase">
                {t('meetingsEvents.hero.title')}
              </h1>
              {t('meetingsEvents.hero.subtitle') && (
                <p className="max-w-xl mx-auto text-sm md:text-base text-neutral-100/80 leading-relaxed">
                  {t('meetingsEvents.hero.subtitle')}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="space-y-20 pb-16 pt-14">
        {/* Featured Section - "Un Cadre d'Exception" */}
        <section className="container-wide">
          <FadeIn className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
              {t('meetingsEvents.featured.title')}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-neutral-600">
              {t('meetingsEvents.featured.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <button className="bg-brand-dark px-8 py-3 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
                {t('meetingsEvents.featured.cta1')}
              </button>
              <button className="border border-neutral-900 px-8 py-3 text-xs tracking-[0.24em] uppercase hover:bg-neutral-900 hover:text-white transition-colors">
                {t('meetingsEvents.featured.cta2')}
              </button>
            </div>
          </FadeIn>
        </section>

        {/* Services & Amenities Section */}
        <section className="container-wide">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-4">
                  {t('meetingsEvents.services.eyebrow')}
                </p>
                <div className="w-24 h-px bg-neutral-300 mx-auto mb-8" />
              </div>
              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                <div className="space-y-4">
                  {servicesLeft.map((item, idx) => (
                    <div key={idx} className="text-sm text-neutral-700">
                      • {item}
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {servicesRight.map((item, idx) => (
                    <div key={idx} className="text-sm text-neutral-700">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Event Types Section - 3 Cards */}
        <section className="container-wide">
          <FadeIn>
            <SectionTitle
              eyebrow={t('meetingsEvents.eventTypes.eyebrow')}
              title=""
              subtitle=""
            />
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {/* Card 1 - Privatisation */}
            <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white">
              <div
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/events/privatisation.jpg')" }}
              />
              <div className="flex flex-1 flex-col gap-4 px-6 py-8">
                <h3 className="font-display text-xl font-bold tracking-[0.1em] uppercase text-neutral-900">
                  {t('meetingsEvents.eventTypes.privatisation.title')}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-700">
                  {t('meetingsEvents.eventTypes.privatisation.description')}
                </p>
                <button className="self-start border border-neutral-900 px-6 py-2.5 text-xs tracking-[0.24em] uppercase text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors mt-2">
                  {t('meetingsEvents.eventTypes.privatisation.discover')}
                </button>
              </div>
            </FadeIn>

            {/* Card 2 - Rooftop */}
            <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white">
              <div
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/events/rooftop.jpg')" }}
              />
              <div className="flex flex-1 flex-col gap-4 px-6 py-8">
                <h3 className="font-display text-xl font-bold tracking-[0.1em] uppercase text-neutral-900">
                  {t('meetingsEvents.eventTypes.rooftop.title')}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-700">
                  {t('meetingsEvents.eventTypes.rooftop.description')}
                </p>
                <button className="self-start border border-neutral-900 px-6 py-2.5 text-xs tracking-[0.24em] uppercase text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors mt-2">
                  {t('meetingsEvents.eventTypes.rooftop.discover')}
                </button>
              </div>
            </FadeIn>

            {/* Card 3 - Dîners Privés */}
            <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white">
              <div
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/events/diners-prives.jpg')" }}
              />
              <div className="flex flex-1 flex-col gap-4 px-6 py-8">
                <h3 className="font-display text-xl font-bold tracking-[0.1em] uppercase text-neutral-900">
                  {t('meetingsEvents.eventTypes.diners.title')}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-700">
                  {t('meetingsEvents.eventTypes.diners.description')}
                </p>
                <button className="self-start border border-neutral-900 px-6 py-2.5 text-xs tracking-[0.24em] uppercase text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors mt-2">
                  {t('meetingsEvents.eventTypes.diners.discover')}
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Event Spaces Section */}
        <section className="container-wide space-y-12">
          <FadeIn>
            <SectionTitle
              eyebrow={t('meetingsEvents.spaces.eyebrow')}
              title=""
              subtitle=""
            />
          </FadeIn>

          {/* Block 1 - Séminaires (Image Left) */}
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
            <FadeIn className="h-80 md:h-96 w-full overflow-hidden bg-neutral-300 rounded-sm shadow-sm">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/events/seminaires.jpg')" }}
              />
            </FadeIn>

            <FadeIn className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl tracking-[0.18em] uppercase">
                {t('meetingsEvents.spaces.seminars.title')}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {t('meetingsEvents.spaces.seminars.description')}
              </p>
              <button className="mt-4 bg-brand-dark px-6 py-2 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
                {t('meetingsEvents.spaces.seminars.discover')}
              </button>
            </FadeIn>
          </div>

          {/* Block 2 - Services Fournis (Image Right) */}
          <div className="grid gap-10 md:grid-cols-[1fr,1.2fr] md:items-center">
            <FadeIn className="order-2 md:order-1 space-y-4">
              <h3 className="font-display text-2xl md:text-3xl tracking-[0.18em] uppercase">
                {t('meetingsEvents.spaces.services.title')}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {t('meetingsEvents.spaces.services.description')}
              </p>
              <button className="mt-4 bg-brand-dark px-6 py-2 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
                {t('meetingsEvents.spaces.services.discover')}
              </button>
            </FadeIn>

            <FadeIn className="order-1 md:order-2 h-80 md:h-96 w-full overflow-hidden bg-neutral-300 rounded-sm shadow-sm">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/events/services-fournis.jpg')" }}
              />
            </FadeIn>
          </div>
        </section>

        {/* Group Offer Section */}
        <section className="container-wide">
          <div className="grid gap-0 md:grid-cols-[2fr,1fr] md:items-stretch">
            <FadeIn className="h-96 md:h-[500px] w-full overflow-hidden bg-neutral-300">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/events/group-offer.jpg')" }}
              />
            </FadeIn>

            <FadeIn className="bg-brand-cream flex flex-col justify-center px-8 md:px-12 py-12 md:py-16">
              <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-6">
                {t('meetingsEvents.groupOffer.eyebrow')}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-neutral-700 mb-8 font-serif">
                {t('meetingsEvents.groupOffer.description')}
              </p>
              <button className="self-start bg-brand-dark px-6 py-3 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
                {t('meetingsEvents.groupOffer.discover')}
              </button>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
