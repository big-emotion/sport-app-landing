/* eslint-disable no-undef */
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { JSX, useState } from 'react';

import { Section } from '@/app/components/ui/Section';

import { Button } from '../ui/Button';

export default function Newsletter(): JSX.Element {
  const t = useTranslations('newsletter');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérification du honeypot
    const ribValue = (
      e.currentTarget.elements.namedItem('rib') as HTMLInputElement
    ).value;
    if (ribValue.trim() !== '') {
      console.warn('Spam détecté : champ honeypot rempli');

      return;
    }

    console.info('Formulaire soumis avec succès');
    setIsSubmitted(true);
  };

  const motionSettings = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true },
  };

  return (
    <Section>
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black"
        {...motionSettings}
      >
        {t('title')}
      </motion.h2>

      <div className="flex justify-center">
        <motion.div
          {...motionSettings}
          className="w-full max-w-md bg-white flex flex-col gap-6"
        >
          {isSubmitted ? (
            // Message de confirmation
            <p className="text-lg text-green-600 text-center">
              Merci pour votre inscription ! Vous recevrez bientôt nos dernières
              actualités.
            </p>
          ) : (
            // Formulaire
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Champ honeypot invisible */}
              <div aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="rib">RIB</label>
                <input type="text" id="rib" name="rib" />
              </div>

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder={t('placeholder')}
                required
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none text-black"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="py-3 px-5" type="submit" size="md">
                  {t('button')}
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
