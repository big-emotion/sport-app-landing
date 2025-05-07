import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { FormEventHandler } from 'react';

import { Button } from '../ui/Button';

interface FormStatusMessagesProps {
  readonly formError: string | null;
  readonly apiMessage: string | null;
}

interface NewsletterFormProps {
  readonly isLoading: boolean;
  readonly formError: string | null;
  readonly apiMessage: string | null;
  readonly handleSubmit: FormEventHandler<HTMLFormElement>;
}

interface SubmitButtonSectionProps {
  readonly isLoading: boolean;
  readonly t: ReturnType<typeof useTranslations>;
}

const FormStatusMessages = ({
  formError,
  apiMessage,
}: FormStatusMessagesProps): React.JSX.Element | null => {
  if (typeof formError === 'string' && formError.length > 0) {
    return <p className="text-sm text-red-500 px-2">{formError}</p>;
  }

  if (typeof apiMessage === 'string' && apiMessage.length > 0) {
    const isError =
      apiMessage.toLowerCase().includes('error') ||
      apiMessage.toLowerCase().includes('failed') ||
      apiMessage.toLowerCase().includes('already subscribed');
    const messageClass = isError ? 'text-red-500' : 'text-green-600';

    return <p className={`text-sm px-2 ${messageClass}`}>{apiMessage}</p>;
  }

  return null;
};

const SubmitButtonSection = ({
  isLoading,
  t,
}: SubmitButtonSectionProps): React.JSX.Element => {
  return (
    <motion.div
      className="self-end"
      whileHover={{ scale: isLoading ? 1 : 1.05 }}
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
    >
      <Button
        className="py-3 px-5"
        type="submit"
        size="md"
        disabled={isLoading}
      >
        {isLoading ? t('subscribing') : t('button')}
      </Button>
    </motion.div>
  );
};

export const NewsletterForm = ({
  isLoading,
  formError,
  apiMessage,
  handleSubmit,
}: NewsletterFormProps): React.JSX.Element => {
  const t = useTranslations('newsletter');

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      {/* Invisible honeypot field to prevent spam */}
      <div aria-hidden="true" style={{ display: 'none' }}>
        <label htmlFor="rib">RIB</label>
        <input type="text" id="rib" name="rib" />
      </div>

      <label htmlFor="newsletter-email" className="sr-only">
        {t('placeholder')}
      </label>
      <motion.input
        id="newsletter-email"
        name="email"
        type="email"
        whileFocus={{ scale: 1.02 }}
        placeholder={t('placeholder')}
        required
        className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none text-black"
        disabled={isLoading}
      />

      <FormStatusMessages formError={formError} apiMessage={apiMessage} />

      <SubmitButtonSection isLoading={isLoading} t={t} />
    </form>
  );
};
