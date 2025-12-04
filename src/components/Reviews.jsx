import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn.jsx';

export default function Reviews() {
  const { t } = useTranslation();
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviews = t('overview.reviews.items', { returnObjects: true });
  const maxIndex = Math.max(0, reviews.length - 3);

  const getInitial = (name) => name.charAt(0).toUpperCase();

  return (
    <section className="container-wide space-y-8 py-12">
      <FadeIn>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.18em] uppercase text-center text-neutral-900">
          {t('overview.reviews.title')}
        </h2>
      </FadeIn>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${reviewIndex * (100 / 3)}%)` }}
          >
            {reviews.map((review, idx) => (
              <div key={idx} className="min-w-full md:min-w-[33.333%] px-2 md:px-3 flex-shrink-0">
                <div className="bg-white border border-neutral-200 p-6 md:p-8 shadow-sm h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {getInitial(review.name)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-900 text-base mb-1">{review.name}</h4>
                      <p className="text-xs tracking-[0.15em] uppercase text-neutral-500">{review.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 mb-5">
                    <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                      &laquo; {review.text} &raquo;
                    </p>
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <button className="text-xs tracking-[0.2em] uppercase text-neutral-900 hover:text-amber-700 transition-colors flex items-center gap-2 group">
                      <span>{t('overview.reviews.learnMore')}</span>
                      <svg 
                        className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {reviewIndex > 0 && (
          <button
            onClick={() => setReviewIndex((prev) => Math.max(0, prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white border-2 border-neutral-900 shadow-lg flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all z-10"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {reviewIndex < maxIndex && (
          <button
            onClick={() => setReviewIndex((prev) => {
              const max = Math.max(0, reviews.length - 3);
              return Math.min(max, prev + 1);
            })}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white border-2 border-neutral-900 shadow-lg flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all z-10"
            aria-label="Next review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      <FadeIn className="flex justify-center">
        <a
          href="https://www.booking.com/hotel/ma/riad-alassala-fes.fr.html?aid=311984&label=riad-alassala-fes-Su2e8u73iQDqaIUAfomkqQS589936883973%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-931252678244%3Alp1009974%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXdX6HrtnYy-Ml68sH-ljtU&sid=2d5171bdc88aa3cbbae8e7ffd6322f4a&dest_id=-32910&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1764800989&srpvid=67c49e2959bb03dd&type=total&ucfs=1&#tab-reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-neutral-900 bg-white text-neutral-900 px-8 py-3 text-xs tracking-[0.24em] uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300 inline-block"
        >
          {t('overview.reviews.viewAll')}
        </a>
      </FadeIn>
    </section>
  );
}

