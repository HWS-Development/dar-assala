import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';

export default function Experiences() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  const experiences = [
    {
      key: 'medinaTour',
      images: ['medina-tour/1.jpg', 'medina-tour/2.jpg', 'medina-tour/3.jpg'],
      includes: t('experiences.experiences.medinaTour.includes', { returnObjects: true })
    },
    {
      key: 'chefchaouen',
      images: ['chefchaouen/1.jpg', 'chefchaouen/2.jpg', 'chefchaouen/3.jpg'],
      includes: t('experiences.experiences.chefchaouen.includes', { returnObjects: true })
    },
    {
      key: 'meknesVolubilis',
      images: ['meknes-volubilis/1.jpg', 'meknes-volubilis/2.jpg', 'meknes-volubilis/3.jpg'],
      includes: t('experiences.experiences.meknesVolubilis.includes', { returnObjects: true })
    },
    {
      key: 'desertMerzouga',
      images: ['desert-merzouga/1.jpg', 'desert-merzouga/2.jpg', 'desert-merzouga/3.jpg'],
      includes: t('experiences.experiences.desertMerzouga.includes', { returnObjects: true })
    },
    {
      key: 'cookingClass',
      images: ['cooking-class/1.jpg', 'cooking-class/2.jpg', 'cooking-class/3.jpg'],
      includes: t('experiences.experiences.cookingClass.includes', { returnObjects: true })
    },
    {
      key: 'middleAtlas',
      images: ['middle-atlas/1.jpg', 'middle-atlas/2.jpg', 'middle-atlas/3.jpg'],
      includes: t('experiences.experiences.middleAtlas.includes', { returnObjects: true })
    },
    {
      key: 'chefchaouenTrekking',
      images: ['chefchaouen-trekking/1.jpg', 'chefchaouen-trekking/2.jpg', 'chefchaouen-trekking/3.jpg'],
      includes: t('experiences.experiences.chefchaouenTrekking.includes', { returnObjects: true })
    }
  ];

  const faqItems = t('experiences.faq.items', { returnObjects: true });

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title={t('experiences.hero.title')}
        subtitle={t('experiences.hero.subtitle')}
        backgroundImage="/images/experiences/hero.jpg"
        showBooking={false}
      />

      <main className="space-y-20 pb-16 pt-14">
        {/* Intro Section */}
        <section className="container-wide">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <p className="text-sm md:text-base leading-relaxed text-neutral-600">
              {t('experiences.intro.text')}
            </p>
          </FadeIn>
        </section>

        {/* Experiences Cards Grid */}
        <section className="container-wide">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
                {t('experiences.hero.title')}
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {experiences.map((exp) => {
              const expData = t(`experiences.experiences.${exp.key}`, { returnObjects: true });
              return (
                <ExperienceCard
                  key={exp.key}
                  title={expData.title}
                  description={expData.description}
                  price={expData.price || null}
                  images={exp.images}
                  includes={exp.includes}
                />
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container-wide">
          <FadeIn>
            <SectionTitle
              title={t('experiences.faq.title')}
            />
          </FadeIn>

          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {faqItems.map((item, idx) => (
              <FadeIn key={idx}>
                <div className="border border-neutral-200 bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-display text-sm tracking-[0.16em] uppercase text-neutral-900">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-neutral-600 transition-transform ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 py-4 border-t border-neutral-200">
                      <p className="text-sm leading-relaxed text-neutral-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact / Booking CTA */}
        <section className="container-wide">
          <FadeIn className="max-w-3xl mx-auto text-center space-y-6 py-12">
            <h2 className="font-display text-3xl md:text-4xl tracking-[0.18em] uppercase">
              {t('experiences.contact.title')}
            </h2>
            <button className="bg-brand-dark px-8 py-3 text-xs tracking-[0.24em] uppercase text-white hover:bg-neutral-800 transition-colors">
              {t('experiences.contact.button')}
            </button>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
