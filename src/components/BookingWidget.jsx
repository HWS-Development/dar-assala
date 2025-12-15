import React from 'react';
import { useTranslation } from 'react-i18next';

export default function BookingWidget() {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-3xl rounded-none bg-white/95 px-4 py-4 shadow-sm backdrop-blur lg:px-6 lg:py-5">
      <form className="grid grid-cols-2 gap-3 text-[11px] uppercase tracking-[0.26em] md:grid-cols-4">
        <label className="flex flex-col gap-1">
          <span className="text-neutral-500">{t('booking.checkIn')}</span>
          <input
            type="date"
            className="border border-neutral-300 bg-transparent px-2 py-2 text-[11px] normal-case tracking-normal outline-none focus:border-neutral-900"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-neutral-500">{t('booking.checkOut')}</span>
          <input
            type="date"
            className="border border-neutral-300 bg-transparent px-2 py-2 text-[11px] normal-case tracking-normal outline-none focus:border-neutral-900"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-neutral-500">{t('booking.guests')}</span>
          <select className="border border-neutral-300 bg-transparent px-2 py-2 text-[11px] normal-case tracking-normal outline-none focus:border-neutral-900">
            <option>{t('booking.adults.one')}</option>
            <option>{t('booking.adults.two')}</option>
            <option>{t('booking.adults.three')}</option>
            <option>{t('booking.adults.family')}</option>
          </select>
        </label>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-brand-dark px-4 py-3 text-[11px] tracking-[0.28em] uppercase text-white"
          >
            {t('booking')}
          </button>
        </div>
      </form>
    </div>
  );
}

