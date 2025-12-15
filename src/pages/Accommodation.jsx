import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import RoomCard from '../components/RoomCard.jsx';

// Configuration unique des chambres, réutilisée par la section principale (RoomCard)
// et par la section \"Suites & Rooms\" (grille avec slider).
const buildDetailedRooms = (t) => [
  {
    key: 'standardDoubleRoom',
    roomFolder: 'standard-double-room',
    title: t('accommodation.rooms.standardDoubleRoom.name'),
    description: t('accommodation.rooms.standardDoubleRoom.description'),
    features: t('accommodation.rooms.standardDoubleRoom.features', { returnObjects: true }),
    roomImages: [
      'Screenshot 2025-12-05 131817.png',
      'Screenshot 2025-12-05 131838.png',
      'Screenshot 2025-12-05 131849.png',
      'Screenshot 2025-12-05 131902.png',
      'Screenshot 2025-12-05 131915.png'
    ]
  },
  {
    key: 'standardDoubleRoom2',
    roomFolder: 'standard-double-room-2',
    title: t('accommodation.rooms.standardDoubleRoom2.name'),
    description: t('accommodation.rooms.standardDoubleRoom2.description'),
    features: t('accommodation.rooms.standardDoubleRoom2.features', { returnObjects: true }),
    roomImages: [
      'Screenshot 2025-12-05 131817.png',
      'Screenshot 2025-12-05 131838.png',
      'Screenshot 2025-12-05 131849.png',
      'Screenshot 2025-12-05 131902.png',
      'Screenshot 2025-12-05 131915.png'] // fichiers à ajouter dans le dossier correspondant
  },
  {
    key: 'juniorSuiteS2',
    roomFolder: 'junior-suite-s2',
    title: t('accommodation.rooms.juniorSuiteS2.name'),
    description: t('accommodation.rooms.juniorSuiteS2.description'),
    features: t('accommodation.rooms.juniorSuiteS2.features', { returnObjects: true }),
    roomImages: []
  },
  {
    key: 'juniorSuiteS1',
    roomFolder: 'junior-suite-s1',
    title: t('accommodation.rooms.juniorSuiteS1.name'),
    description: t('accommodation.rooms.juniorSuiteS1.description'),
    features: t('accommodation.rooms.juniorSuiteS1.features', { returnObjects: true }),
    roomImages: []
  },
  {
    key: 'juniorSuite2mez',
    roomFolder: 'junior-suite-2mez',
    title: t('accommodation.rooms.juniorSuite2mez.name'),
    description: t('accommodation.rooms.juniorSuite2mez.description'),
    features: t('accommodation.rooms.juniorSuite2mez.features', { returnObjects: true }),
    roomImages: []
  },
  {
    key: 'executiveSuite',
    roomFolder: 'executive-suite',
    title: t('accommodation.rooms.executiveSuite.name'),
    description: t('accommodation.rooms.executiveSuite.description'),
    features: t('accommodation.rooms.executiveSuite.features', { returnObjects: true }),
    roomImages: []
  },
  {
    key: 'duplex',
    roomFolder: 'duplex',
    title: t('accommodation.rooms.duplex.name'),
    description: t('accommodation.rooms.duplex.description'),
    features: t('accommodation.rooms.duplex.features', { returnObjects: true }),
    roomImages: []
  },
  {
    key: 'budgetSingleRoom',
    roomFolder: 'budget-single-room',
    title: t('accommodation.rooms.budgetSingleRoom.name'),
    description: t('accommodation.rooms.budgetSingleRoom.description'),
    features: t('accommodation.rooms.budgetSingleRoom.features', { returnObjects: true }),
    roomImages: []
  },
  {
    key: 'budgetSingleRoom2',
    roomFolder: 'budget-single-room-2',
    title: t('accommodation.rooms.budgetSingleRoom2.name'),
    description: t('accommodation.rooms.budgetSingleRoom2.description'),
    features: t('accommodation.rooms.budgetSingleRoom2.features', { returnObjects: true }),
    roomImages: []
  }
];

export default function Accommodation() {
  const { t } = useTranslation();
  const detailedRooms = buildDetailedRooms(t);
  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />
      <Hero
        title={t('accommodation.hero.title')}
        subtitle={t('accommodation.hero.subtitle')}
        showBooking={false}
      />

      <main className="pb-16 pt-14">
        {/* Section \"Suites & Rooms\" réutilisant les mêmes données + slider */}
        <section className="container-wide space-y-10">
          <SectionTitle
            eyebrow={t('accommodation.section.eyebrow')}
            title={t('accommodation.section.title')}
            subtitle={t('accommodation.section.subtitle')}
            align="left"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {detailedRooms.map((room) => {
              const sliderImages =
                room.roomImages && room.roomImages.length > 0
                  ? room.roomImages.map((file) =>
                      encodeURI(`/images/rooms/${room.roomFolder}/${file}`)
                    )
                  : [null];

              return (
              <FadeIn
                key={room.key}
                className="flex flex-col overflow-hidden border border-neutral-200 bg-white shadow-sm"
              >
                {/* Slider d'images pour chaque chambre */}
                <div className="h-56 w-full overflow-hidden">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-full w-full"
                  >
                    {sliderImages.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        {img ? (
                          <div
                            className="h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${img}')` }}
                          />
                        ) : (
                          <div className="h-full w-full bg-neutral-200" />
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                  <h3 className="font-display text-lg tracking-[0.16em] uppercase">
                    {room.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                    {room.description}
                  </p>
                  <div className="mt-2 flex justify-between items-center text-xs text-neutral-500">
                    <span className="tracking-[0.24em] uppercase">{t('accommodation.rooms.upToGuests')}</span>
                    <span className="tracking-[0.2em] uppercase">{t('accommodation.rooms.breakfastIncluded')}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                  
                    <button className="border hover:bg-neutral-900 hover:text-white transition-colors duration-300 border-neutral-900 px-5 py-2 text-xs tracking-[0.24em] uppercase">
                      {t('accommodation.rooms.checkRates')}
                    </button>
                  </div>
                </div>
              </FadeIn>
            );})}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


