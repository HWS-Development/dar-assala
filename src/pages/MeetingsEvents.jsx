import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function MeetingsEvents() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />
      <main className="container-wide flex min-h-[60vh] items-center justify-center">
        <div className="text-center text-sm tracking-[0.28em] uppercase text-neutral-600">
          {t('pages.meetingsEvents')}
        </div>
      </main>
      <Footer />
    </div>
  );
}

