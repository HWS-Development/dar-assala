import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn.jsx';

export default function Reviews() {
  const { t } = useTranslation();
  const [reviewIndex, setReviewIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const reviews = t('overview.reviews.items', { returnObjects: true });
  
  // Calculate max index based on cards per view
  // Ensure we can always see the last review
  const calculateMaxIndex = (cards) => {
    if (cards >= reviews.length) return 0;
    // Calculate how many slides we need to show all reviews
    // For 6 reviews with 3 cards per view: we need slides at indices 0, 1, 2, 3
    // Slide 3 shows reviews 3, 4, 5 (the last 3)
    return Math.max(0, reviews.length - cards);
  };

  const maxIndex = React.useMemo(() => calculateMaxIndex(cardsPerView), [cardsPerView, reviews.length]);

  const getInitial = (name) => name.charAt(0).toUpperCase();

  // Handle responsive cards per view
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index if it's out of bounds when cardsPerView changes
  React.useEffect(() => {
    if (reviewIndex > maxIndex) {
      setReviewIndex(maxIndex);
    }
  }, [maxIndex]);

  const nextReview = () => {
    setReviewIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const prevReview = () => {
    setReviewIndex((prev) => Math.max(0, prev - 1));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.4
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        duration: 0.4
      }
    })
  };

  return (
    <section className="container-wide space-y-12 py-16 md:py-20">
      <FadeIn>
        <div className="text-center space-y-4">
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">
            {t('overview.reviews.title')}
          </p>
          <div className="w-16 h-px bg-amber-700 mx-auto"></div>
        </div>
      </FadeIn>

      <div className="relative">
        {/* Navigation Buttons */}
        {reviewIndex > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={prevReview}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 group"
            aria-label="Previous review"
          >
            <motion.svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: -2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </motion.svg>
          </motion.button>
        )}

        {reviewIndex < maxIndex && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={nextReview}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 group"
            aria-label="Next review"
          >
            <motion.svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        )}

        {/* Reviews Container */}
        <div className="overflow-hidden">
          <motion.div
            key={reviewIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex transition-transform duration-700 ease-out"
            style={{ 
              transform: `translateX(-${reviewIndex * 100}%)`
            }}
          >
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="min-w-full md:min-w-[33.333%] px-3 md:px-4 flex-shrink-0"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-neutral-200 p-8 md:p-10 shadow-sm h-full flex flex-col relative overflow-hidden group"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-10 translate-x-10 rounded-full blur-2xl"></div>
                  
                  {/* Quote icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="absolute top-6 right-6 text-amber-700/20 text-6xl font-serif leading-none"
                  >
                    &ldquo;
                  </motion.div>

                  {/* Review Content */}
                  <div className="flex-1 mb-6 relative z-10">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-sm md:text-base leading-relaxed text-neutral-700 italic"
                    >
                      {review.text}
                    </motion.p>
                  </div>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-center gap-4 pt-6 border-t border-neutral-100 relative z-10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-amber-700 to-amber-800 flex items-center justify-center text-white font-bold text-xl md:text-2xl flex-shrink-0 shadow-md"
                    >
                      {getInitial(review.name)}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-900 text-base md:text-lg mb-1">
                        {review.name}
                      </h4>
                      <p className="text-xs tracking-[0.15em] uppercase text-neutral-500">
                        {review.country}
                      </p>
                    </div>
                  </motion.div>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-6 relative z-10"
                  >
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="text-xs tracking-[0.2em] uppercase text-neutral-600 hover:text-amber-700 transition-colors flex items-center gap-2 group"
                    >
                      <span>{t('overview.reviews.learnMore')}</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setReviewIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === reviewIndex ? 'bg-amber-700 w-8' : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to review set ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* View All Button */}
      <FadeIn className="flex justify-center">
        <motion.a
          href="https://www.booking.com/hotel/ma/riad-alassala-fes.fr.html?aid=311984&label=riad-alassala-fes-Su2e8u73iQDqaIUAfomkqQS589936883973%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-931252678244%3Alp1009974%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXdX6HrtnYy-Ml68sH-ljtU&sid=2d5171bdc88aa3cbbae8e7ffd6322f4a&dest_id=-32910&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1764800989&srpvid=67c49e2959bb03dd&type=total&ucfs=1&#tab-reviews"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-neutral-900 bg-white text-neutral-900 px-8 py-3 text-xs tracking-[0.24em] uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300 inline-block"
        >
          {t('overview.reviews.viewAll')}
        </motion.a>
      </FadeIn>
    </section>
  );
}
