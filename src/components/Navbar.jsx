import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo.jsx';

const navItems = [
  { key: 'overview', to: '/' },
  { key: 'accommodation', to: '/accommodation' },
  { key: 'dining', to: '/dining' },
  { key: 'exploringMedina', to: '/exploring-medina' },
  { key: 'meetingsEvents', to: '/meetings-events' },
  { key: 'experiences', to: '/experiences' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-brand-cream/95 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-4 md:py-6 lg:py-8 relative">
        <div className="flex items-center gap-4 z-10">
          <button
            onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
            className="text-xs tracking-[0.2em] uppercase hover:text-neutral-900"
          >
            <span className={i18n.language === 'en' ? 'text-neutral-900' : 'text-neutral-400'}>
              EN
            </span>{' '}
            <span className="mx-1 text-neutral-400">|</span>{' '}
            <span className={i18n.language === 'fr' ? 'text-neutral-900' : 'text-neutral-400'}>
              FR
            </span>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center border border-neutral-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className="h-px w-4 bg-neutral-900" />
            <span className="mt-1 h-px w-4 bg-neutral-900" />
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
          <Logo />
          <div className="w-full max-w-4xl border-t border-neutral-200 mt-3 md:mt-4" />
        </div>

        <div className="flex-1" />

        <button className="hidden text-xs tracking-[0.22em] uppercase md:inline-flex bg-brand-dark text-white px-6 py-2 z-10">
          {t('navbar.checkRates')}
        </button>
      </div>

      <nav className="border-t border-neutral-200 relative z-20">
        <div className="container-wide">
          <div className="hidden items-center justify-center gap-10 py-3 text-[11px] tracking-[0.28em] uppercase md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `pb-1 hover:text-neutral-900 cursor-pointer transition-colors relative z-10 ${
                    isActive ? 'border-b border-neutral-900 text-neutral-900' : 'text-neutral-500'
                  }`
                }
              >
                {t(`navbar.${item.key}`)}
              </NavLink>
            ))}
          </div>

          {open && (
            <div className="flex flex-col gap-2 py-3 text-[11px] tracking-[0.28em] uppercase md:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-1 hover:text-neutral-900 cursor-pointer transition-colors ${
                      isActive ? 'text-neutral-900' : 'text-neutral-500'
                    }`
                  }
                >
                  {t(`navbar.${item.key}`)}
                </NavLink>
              ))}
              <button className="mt-2 w-full bg-brand-dark px-4 py-2 text-xs tracking-[0.22em] uppercase text-white">
                {t('navbar.checkRates')}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

