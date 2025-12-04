import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ImageCard from '../components/ImageCard.jsx';
import Reviews from '../components/Reviews.jsx';
import RoomPreviewCard from '../components/RoomPreviewCard.jsx';

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

       

        

        

       

        {/* Location Section */}
        <section className="container-wide space-y-6">
          <FadeIn>
            <SectionTitle
              eyebrow="Find Us"
              title={t('overview.location.title')}
              subtitle={t('overview.location.subtitle')}
            />
          </FadeIn>

          <FadeIn className="w-full h-96 rounded-sm overflow-hidden border border-neutral-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.1234567890123!2d-4.9781406!3d34.0596204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9ff4a9bae5a97d%3A0x79ad14c9dc151882!2sRiad%20Alassala%20Fes!5e0!3m2!1sen!2sus!4v1733164800000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riad Alassala Location"
            />
          </FadeIn>
        </section>

        {/* Contact Section */}
        <section className="container-wide space-y-6">
          <FadeIn>
            <SectionTitle
              eyebrow="Get in Touch"
              title={t('overview.contact.title')}
              subtitle={t('overview.contact.subtitle')}
            />
          </FadeIn>

          <FadeIn className="grid gap-8 md:grid-cols-3">
            <div className="text-center md:text-left">
              <h4 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">
                {t('overview.contact.phone')}
              </h4>
              <p className="text-base text-neutral-900">+212 XXX XXX XXX</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">
                {t('overview.contact.email')}
              </h4>
              <p className="text-base text-neutral-900">contact@riadalassala.com</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">
                {t('overview.contact.address')}
              </h4>
              <p className="text-base text-neutral-900">Medina, Fes, Morocco</p>
            </div>
          </FadeIn>
        </section>

        {/* Rooms & Suites Preview Section */}
        <section className="container-wide space-y-10 py-16">
          <FadeIn>
            <SectionTitle
              eyebrow={t('overview.roomsSection.eyebrow')}
              title={t('overview.roomsSection.title')}
              subtitle={t('overview.roomsSection.subtitle')}
            />
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            <RoomPreviewCard
              roomFolder="standard-double-room"
              roomTitle={t('accommodation.rooms.standardDoubleRoom.name')}
              description={t('accommodation.rooms.standardDoubleRoom.description')}
            />
            <RoomPreviewCard
              roomFolder="junior-suite-s1"
              roomTitle={t('accommodation.rooms.juniorSuiteS1.name')}
              description={t('accommodation.rooms.juniorSuiteS1.description')}
            />
            <RoomPreviewCard
              roomFolder="executive-suite"
              roomTitle={t('accommodation.rooms.executiveSuite.name')}
              description={t('accommodation.rooms.executiveSuite.description')}
            />
          </div>

          <FadeIn className="flex justify-center pt-4">
            <Link
              to="/accommodation"
              className="bg-brand-dark text-white px-6 py-3 text-xs tracking-wide uppercase hover:bg-neutral-800 transition-colors"
            >
              {t('overview.roomsSection.viewAllRooms')}
            </Link>
          </FadeIn>
        </section>

         {/* Reviews Section */}
         <Reviews />
      </main>

      <Footer />
    </div>
  );
}

