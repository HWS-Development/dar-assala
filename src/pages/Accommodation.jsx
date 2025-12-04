import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import RoomCard from '../components/RoomCard.jsx';

const roomKeys = ['superior', 'patio', 'rooftop', 'grand'];

export default function Accommodation() {
  const { t } = useTranslation();

  const rooms = roomKeys.map((key) => ({
    key,
    name: t(`accommodation.rooms.${key}.name`),
    description: t(`accommodation.rooms.${key}.description`),
    image:
      key === 'superior'
        ? "url('https://images.pexels.com/photos/27163975/pexels-photo-27163975.jpeg?auto=compress&cs=tinysrgb&w=1600')"
        : key === 'patio'
          ? "url('https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          : key === 'rooftop'
            ? "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600')"
            : "url('https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg?auto=compress&cs=tinysrgb&w=1600')"
  }));
  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />
      <Hero
        title={t('accommodation.hero.title')}
        subtitle={t('accommodation.hero.subtitle')}
        showBooking={false}
      />

      <main className="pb-16 pt-14">
        {/* Room Cards Section with Swiper */}
        <section className="container-wide space-y-12 py-12">
          <RoomCard
            roomFolder="standard-double-room"
            roomTitle={t('accommodation.rooms.standardDoubleRoom.name')}
            description={t('accommodation.rooms.standardDoubleRoom.description')}
            features={t('accommodation.rooms.standardDoubleRoom.features', { returnObjects: true })}
          />
          <RoomCard
            roomFolder="standard-double-room-2"
            roomTitle={t('accommodation.rooms.standardDoubleRoom2.name')}
            description={t('accommodation.rooms.standardDoubleRoom2.description')}
            features={t('accommodation.rooms.standardDoubleRoom2.features', { returnObjects: true })}
          />
          <RoomCard
            roomFolder="junior-suite-s2"
            roomTitle={t('accommodation.rooms.juniorSuiteS2.name')}
            description={t('accommodation.rooms.juniorSuiteS2.description')}
            features={t('accommodation.rooms.juniorSuiteS2.features', { returnObjects: true })}
          />
          <RoomCard
            roomFolder="junior-suite-s1"
            roomTitle={t('accommodation.rooms.juniorSuiteS1.name')}
            description={t('accommodation.rooms.juniorSuiteS1.description')}
            features={t('accommodation.rooms.juniorSuiteS1.features', { returnObjects: true })}
          />
          <RoomCard
            roomFolder="junior-suite-2mez"
            roomTitle={t('accommodation.rooms.juniorSuite2mez.name')}
            description={t('accommodation.rooms.juniorSuite2mez.description')}
            features={t('accommodation.rooms.juniorSuite2mez.features', { returnObjects: true })}
          />
          <RoomCard
            roomFolder="executive-suite"
            roomTitle={t('accommodation.rooms.executiveSuite.name')}
            description={t('accommodation.rooms.executiveSuite.description')}
            features={t('accommodation.rooms.executiveSuite.features', { returnObjects: true })}
          />
          <RoomCard
            roomFolder="duplex"
            roomTitle={t('accommodation.rooms.duplex.name')}
            description={t('accommodation.rooms.duplex.description')}
            features={t('accommodation.rooms.duplex.features', { returnObjects: true })}
          />
          <RoomCard
            roomFolder="budget-single-room"
            roomTitle={t('accommodation.rooms.budgetSingleRoom.name')}
            description={t('accommodation.rooms.budgetSingleRoom.description')}
            features={t('accommodation.rooms.budgetSingleRoom.features', { returnObjects: true })}
          />
          <RoomCard
            roomFolder="budget-single-room-2"
            roomTitle={t('accommodation.rooms.budgetSingleRoom2.name')}
            description={t('accommodation.rooms.budgetSingleRoom2.description')}
            features={t('accommodation.rooms.budgetSingleRoom2.features', { returnObjects: true })}
          />
        </section>
        <section className="container-wide space-y-10">
          <SectionTitle
            eyebrow={t('accommodation.section.eyebrow')}
            title={t('accommodation.section.title')}
            subtitle={t('accommodation.section.subtitle')}
            align="left"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {rooms.map((room) => (
              <FadeIn
                key={room.key}
                className="flex flex-col overflow-hidden border border-neutral-200 bg-white shadow-sm"
              >
                <div
                  className="h-56 w-full bg-cover bg-center"
                  style={{ backgroundImage: room.image }}
                />
                <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                  <h3 className="font-display text-lg tracking-[0.16em] uppercase">
                    {room.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                    {room.description}
                  </p>
                  <div className="mt-2 flex justify-between items-center text-xs text-neutral-500">
                    <span className="tracking-[0.24em] uppercase">{t('accommodation.rooms.upToGuests')}</span>
                    <span className="tracking-[0.2em] uppercase">{t('accommodation.rooms.breakfastIncluded')}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button className="bg-brand-dark px-5 py-2 text-xs tracking-[0.24em] uppercase text-white">
                      {t('accommodation.rooms.viewDetails')}
                    </button>
                    <button className="border border-neutral-900 px-5 py-2 text-xs tracking-[0.24em] uppercase">
                      {t('accommodation.rooms.checkRates')}
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


