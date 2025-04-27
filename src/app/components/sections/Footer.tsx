'use client';

import { useTranslations } from 'next-intl';
import { JSX } from 'react';

export default function Footer(): JSX.Element {
  const t = useTranslations('footer');

  return (
    <div className="flex justify-center gap-12">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-12 text-black">
        {t('title')}
      </h2>
      <div>
        <p className="text-gray-600">{t('legal')}</p>
        <p className="text-gray-600">{t('copyright')}</p>
      </div>
    </div>
  );
}
