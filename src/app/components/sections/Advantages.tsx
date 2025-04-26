'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { JSX } from 'react';

import { AccessItem } from '@/app/components/ui/AccessItem';

export default function Advantages(): JSX.Element {
  const t = useTranslations('advantage');

  return (
    <div>
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black mt-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {t('title')}
      </motion.h2>

      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AccessItem
              title={t('access_title')}
              subtitle={t('access_subtitle')}
            />
          </motion.div>
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AccessItem
              title={t('commu_title')}
              subtitle={t('commu_subtitle')}
            />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AccessItem
              title={t('discovery_title')}
              subtitle={t('discovery_subtitle')}
            />
          </motion.div>
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AccessItem
              title={t('multisport_title')}
              subtitle={t('multisport_subtitle')}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
