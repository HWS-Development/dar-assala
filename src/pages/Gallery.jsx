import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Gallery() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const photos = [
    '/images/gallery/photos/photo1.jpg',
    '/images/gallery/photos/photo2.jpg',
    '/images/gallery/photos/photo3.jpg',
    '/images/gallery/photos/photo4.jpg',
    '/images/gallery/photos/photo5.jpg',
    '/images/gallery/photos/photo6.jpg'
  ];

  const videos = [
    {
      thumbnail: '/images/gallery/videos/vid1.jpg',
      video: '/videos/galerie/video1.mp4'
    },
    {
      thumbnail: '/images/gallery/videos/vid2.jpg',
      video: '/videos/galerie/video2.mp4'
    }
  ];

  const openVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <section className="container-wide flex min-h-[50vh] items-center justify-center py-20">
        <FadeIn className="text-center space-y-4 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl tracking-[0.25em] uppercase text-neutral-900">
            {t('gallery.hero.title')}
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 max-w-2xl mx-auto">
            {t('gallery.hero.subtitle')}
          </p>
        </FadeIn>
      </section>

      <main className="space-y-20 pb-16 pt-14">
        {/* Photos Section */}
        <section className="container-wide">
          <FadeIn>
            <SectionTitle
              eyebrow={t('gallery.photos.eyebrow')}
              title=""
              subtitle=""
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {photos.map((photo, idx) => (
              <FadeIn key={idx} className="overflow-hidden border border-neutral-200 bg-white">
                <motion.div
                  className="aspect-[4/3] bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url('${photo}')` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="container-wide">
          <FadeIn>
            <SectionTitle
              eyebrow={t('gallery.videos.eyebrow')}
              title=""
              subtitle=""
            />
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {videos.map((video, idx) => (
              <FadeIn key={idx} className="relative overflow-hidden border border-neutral-200 bg-white group cursor-pointer">
                <motion.div
                  className="aspect-video bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${video.thumbnail}')` }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openVideo(video.video)}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-neutral-900 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Ambiances Section */}
        <section className="container-wide">
          <FadeIn>
            <SectionTitle
              eyebrow={t('gallery.ambiance.eyebrow')}
              title=""
              subtitle=""
            />
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {/* Day Card */}
            <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white">
              <motion.div
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/gallery/ambience/day.jpg')" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-1 flex-col gap-4 px-6 py-8">
                <h3 className="font-display text-xl md:text-2xl tracking-[0.18em] uppercase">
                  {t('gallery.ambiance.day.title')}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {t('gallery.ambiance.day.description')}
                </p>
              </div>
            </FadeIn>

            {/* Night Card */}
            <FadeIn className="flex flex-col overflow-hidden border border-neutral-200 bg-white">
              <motion.div
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/gallery/ambience/night.jpg')" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-1 flex-col gap-4 px-6 py-8">
                <h3 className="font-display text-xl md:text-2xl tracking-[0.18em] uppercase">
                  {t('gallery.ambiance.night.title')}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {t('gallery.ambiance.night.description')}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-5xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-neutral-300 transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}

