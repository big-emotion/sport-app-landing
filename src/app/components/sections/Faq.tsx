'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { JSX, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Comment fonctionne votre service ?',
    answer:
      'Notre service fonctionne en vous connectant avec les meilleurs experts selon vos besoins.',
  },
  {
    question: 'Quels sont vos tarifs ?',
    answer:
      'Nos tarifs sont personnalisés en fonction de votre projet. Contactez-nous pour un devis.',
  },
  {
    question: 'Puis-je annuler mon abonnement à tout moment ?',
    answer:
      'Oui, vous pouvez annuler votre abonnement à tout moment via votre compte client.',
  },
];

export default function Faq(): JSX.Element {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t('title')}
      </motion.h2>

      <div className="space-y-4 max-w-lg mx-auto">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="border-b overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-white text-black"
              >
                <span className="font-medium">{item.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-6 py-4 text-black overflow-hidden"
                  >
                    <div>{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
