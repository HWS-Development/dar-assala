import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-brand-cream">
      <div className="container-wide py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 tracking-[0.18em] uppercase">
        <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
        <div className="flex gap-6">
          <button className="hover:text-neutral-800">{t('footer.privacy')}</button>
          <button className="hover:text-neutral-800">{t('footer.terms')}</button>
          <button className="hover:text-neutral-800">{t('footer.contact')}</button>
        </div>
      </div>
    </footer>
  );
}

