'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/src/app/components/ui/Button';

export default function Newsletter() {
  const t = useTranslations('newsletter');
  return (
    <div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black">
        {t('title')}
      </h2>

      <div className="flex justify-center">
        <div className="w-full max-w-md bg-white flex flex-col gap-6">
          <p className="text-lg text-gray-600 text-center">{t('subtitle')}</p>

          <form className="flex gap-4">
            <input
              type="email"
              placeholder={t('placeholder')}
              required
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none text-black"
            />
            <Button className="bg-yellow-300 px-5" type="submit" size="md">
              {t('button')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
