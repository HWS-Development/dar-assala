import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ImageCard from '../components/ImageCard.jsx';

export default function Overview() {
  const { t } = useTranslation();

  const icons = [
    { key: 'hiddenSanctuary' },
    { key: 'courtyardPool' },
    { key: 'moroccanCuisine' },
    { key: 'tailoredExperiences' }
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />
      <Hero
        title={t('overview.hero.title')}
        subtitle={t('overview.hero.subtitle')}
        showBooking
      />

      <main className="space-y-20 pb-16 pt-14">
        <section className="container-wide flex flex-col items-center gap-10 text-center">
          <FadeIn className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl md:text-4xl tracking-[0.22em] uppercase">
              {t('overview.intro.title')}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-neutral-700">
              {t('overview.intro.description')}
            </p>
          </FadeIn>

          <div className="grid gap-6 text-[11px] tracking-[0.3em] uppercase text-neutral-600 sm:grid-cols-2 md:grid-cols-4">
            {icons.map((item) => (
              <FadeIn key={item.key} className="flex items-center justify-center border-t pt-4">
                <span>{t(`overview.features.${item.key}`)}</span>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="container-wide space-y-10">
          <SectionTitle
            eyebrow={t('overview.discover.eyebrow')}
            title={t('overview.discover.title')}
            subtitle={t('overview.discover.subtitle')}
          />

          <div className="grid gap-6 md:grid-cols-3">
            <ImageCard
              title={t('overview.cards.festive.title')}
              description={t('overview.cards.festive.description')}
              cta={t('overview.cards.festive.cta')}
            />
            <ImageCard
              title={t('overview.cards.accommodations.title')}
              description={t('overview.cards.accommodations.description')}
              cta={t('overview.cards.accommodations.cta')}
            />
            <ImageCard
              title={t('overview.cards.dining.title')}
              description={t('overview.cards.dining.description')}
              cta={t('overview.cards.dining.cta')}
            />
          </div>
        </section>

        <section className="container-wide grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
          <FadeIn className="h-80 overflow-hidden bg-neutral-300 md:h-full">
            <div className="h-full w-full bg-[url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center" />
          </FadeIn>

          <FadeIn className="border border-neutral-200 bg-white px-7 py-8 shadow-sm">
            <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">
              {t('overview.journey.eyebrow')}
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-[0.18em] uppercase">
              {t('overview.journey.title')}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              {t('overview.journey.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="bg-brand-dark px-6 py-2 text-xs tracking-[0.24em] uppercase text-white">
                {t('overview.journey.bookNow')}
              </button>
              <button className="border border-neutral-900 px-6 py-2 text-xs tracking-[0.24em] uppercase">
                {t('overview.journey.details')}
              </button>
            </div>
          </FadeIn>
        </section>

        <section className="container-wide grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center">
          <FadeIn className="order-2 h-80 overflow-hidden bg-neutral-300 md:order-1 md:h-full">
            <div className="h-full w-full bg-[url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center" />
          </FadeIn>

          <FadeIn className="order-1 md:order-2 space-y-4">
            <SectionTitle
              align="left"
              eyebrow={t('overview.giftCard.eyebrow')}
              title={t('overview.giftCard.title')}
              subtitle={t('overview.giftCard.subtitle')}
            />
            <button className="mt-4 bg-brand-dark px-7 py-3 text-xs tracking-[0.24em] uppercase text-white">
              {t('overview.giftCard.cta')}
            </button>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}

