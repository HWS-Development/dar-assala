import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import FadeIn from '../components/FadeIn.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email sending logic here
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/riadalassala/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/RiadAlassala',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/riadalassalafes/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-900">
      <Navbar />
      <Hero
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        showBooking={false}
      />

      <main className="space-y-20 pb-16 pt-14">
        {/* Contact Form Section */}
        <section className="container-wide">
          <FadeIn>
            <SectionTitle
              eyebrow={t('contact.form.eyebrow')}
              title={t('contact.form.title')}
              subtitle={t('contact.form.subtitle')}
              align="center"
            />
          </FadeIn>

          <FadeIn className="mt-12 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-neutral-600 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-neutral-600 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-neutral-600 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-[0.2em] text-neutral-600 mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-neutral-600 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-brand-dark text-white px-8 py-3 text-xs tracking-[0.28em] uppercase hover:bg-neutral-800 transition-colors"
                >
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>
          </FadeIn>
        </section>

        {/* Contact Information & Map Section */}
        <section className="container-wide">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-600 mb-4">
                    {t('contact.info.title')}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                        {t('contact.info.address')}
                      </h4>
                      <p className="text-sm text-neutral-900 leading-relaxed">
                        {t('contact.info.addressValue')}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                        {t('contact.info.phone')}
                      </h4>
                      <a
                        href={`tel:${t('contact.info.phoneValue')}`}
                        className="text-sm text-neutral-900 hover:text-amber-700 transition-colors"
                      >
                        {t('contact.info.phoneValue')}
                      </a>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                        {t('contact.info.whatsapp')}
                      </h4>
                      <a
                        href={`https://wa.me/${t('contact.info.whatsappValue').replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-900 hover:text-amber-700 transition-colors"
                      >
                        {t('contact.info.whatsappValue')}
                      </a>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                        {t('contact.info.email')}
                      </h4>
                      <a
                        href={`mailto:${t('contact.info.emailValue')}`}
                        className="text-sm text-neutral-900 hover:text-amber-700 transition-colors"
                      >
                        {t('contact.info.emailValue')}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-600 mb-4">
                    {t('contact.social.title')}
                  </h3>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-amber-700 transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Google Maps */}
            <FadeIn>
              <div className="w-full h-96 rounded-sm overflow-hidden border border-neutral-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.1234567890123!2d-4.9781406!3d34.0596204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9ff4a9bae5a97d%3A0x79ad14c9dc151882!2sRiad%20Alassala%20Fes!5e0!3m2!1sen!2sus!4v1733164800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Riad Alassala Location"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


