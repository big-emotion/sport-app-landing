'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { JSX, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Section } from '@/app/components/ui/Section';
import ConfirmModal from '@/app/components/ui/ConfirmModal';
import { Button } from '../ui/Button';

export default function Newsletter(): JSX.Element {
  const t = useTranslations('newsletter');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const router = useRouter();

  const confirmSubscription = () => {
    setIsModalOpen(false);
    router.push('/confirmation?access=granted');
  };

  const cancelSubscription = () => {
    setIsModalOpen(false);
  };

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
          <form onSubmit={handleSubmit} className="flex gap-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder={t('placeholder')}
              required
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none text-black"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="py-3 px-5" type="submit" size="md">
                {t('button')}
              </Button>
            </motion.div>
          </form>
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
