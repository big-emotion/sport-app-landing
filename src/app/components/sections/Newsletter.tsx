'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { JSX } from 'react';

import ConfirmModal from '@/app/components/ui/ConfirmModal';
import { Section } from '@/app/components/ui/Section';
import { useNewsletterForm } from '@/hooks/useNewsletterForm';

import { NewsletterForm } from './NewsletterForm';

export default function Newsletter(): JSX.Element {
  const t = useTranslations('newsletter');

  const {
    isLoading,
    formError,
    apiMessage,
    isModalOpen,
    handleSubmit,
    confirmSubscription,
    cancelSubscription,
  } = useNewsletterForm();

  return (
    <Section>
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {t('title')}
      </motion.h2>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full max-w-md bg-white flex flex-col gap-6"
        >
          <p className="text-lg text-gray-600 text-center">{t('subtitle')}</p>
          <NewsletterForm
            isLoading={isLoading}
            formError={formError}
            apiMessage={apiMessage}
            handleSubmit={handleSubmit}
          />
        </motion.div>
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={confirmSubscription}
        onCancel={cancelSubscription}
      />
    </Section>
  );
}
