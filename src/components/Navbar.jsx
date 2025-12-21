import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo.jsx';

const navItems = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/about' },
  { key: 'accommodation', to: '/accommodation' },
  { key: 'dining', to: '/dining' },
  { key: 'exploringMedina', to: '/exploring-medina' },
  { key: 'meetingsEvents', to: '/meetings-events' },
  { key: 'experiences', to: '/experiences' },
  { key: 'offers', to: '/offers' },
  { key: 'gallery', to: '/gallery' },
  { key: 'contact', to: '/contact' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b border-neutral-200 bg-white transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Main header band */}
      <div className="container-wide flex items-center justify-between py-4 md:py-6 lg:py-7">
        {/* Left: Logo + burger (mobile) */}
        <div className="flex items-center gap-3 md:gap-5">
          <Logo />

          <button
            className="inline-flex h-8 w-8 items-center justify-center border border-neutral-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className="h-px w-4 bg-neutral-900" />
            <span className="mt-1 h-px w-4 bg-neutral-900" />
          </button>
        </div>

        {/* Center: Brand signature text */}
        <div className="hidden md:flex flex-1 justify-center pointer-events-none">
          <span className="font-serif text-sm md:text-base tracking-[0.4em] uppercase text-neutral-800">
            {t('navbar.tagline')}
          </span>
        </div>

        {/* Right: Book button + separate language switcher */}
        <div className="hidden md:flex items-center gap-4">
          <button className="inline-flex items-center rounded-none border border-neutral-900 bg-neutral-900 px-6 py-2 text-xs tracking-[0.24em] uppercase text-white">
            {t('navbar.checkRates')}
          </button>
          <button
            onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
            className="text-[11px] tracking-[0.25em] uppercase text-neutral-700 hover:text-neutral-900 flex items-center gap-1"
          >
            <span className={i18n.language === 'en' ? 'text-neutral-900' : 'text-neutral-400'}>
              EN
            </span>
            <span className="text-neutral-400">·</span>
            <span className={i18n.language === 'fr' ? 'text-neutral-900' : 'text-neutral-400'}>
              FR
            </span>
          </button>
        </div>

        {/* Fallback for mobile: keep space so center text alignment is not broken */}
        <div className="md:hidden" />
      </div>

      {/* Navigation band */}
      <nav className="border-t border-neutral-200 bg-white relative z-20">
        <div className="container-wide">
          {/* Desktop nav */}
          <div className="hidden items-center justify-center gap-10 py-3 text-xs md:text-sm tracking-[0.32em] uppercase md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `pb-1 cursor-pointer transition-colors duration-300 relative ${
                    isActive
                      ? 'border-b border-neutral-900 text-neutral-900 hover:text-amber-700'
                      : 'text-neutral-500 hover:text-amber-700'
                  }`
                }
              >
                {t(`navbar.${item.key}`)}
              </NavLink>
            ))}
          </div>

          {/* Mobile nav */}
          {open && (
            <div className="flex flex-col gap-2 py-3 text-xs tracking-[0.28em] uppercase md:hidden bg-white">
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

