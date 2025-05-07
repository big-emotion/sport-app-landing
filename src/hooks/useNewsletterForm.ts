'use client';

import { useTranslations } from 'next-intl';
import { FormEvent, FormEventHandler, useState } from 'react';
import { z } from 'zod';

import { ERROR_CODES } from '../utils/constants';

const NewsletterSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    email: z.string().email(t('invalid')),
  });

interface SuccessResponse {
  success: true;
}

interface ErrorResponse {
  error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

interface UseNewsletterFormReturn {
  isLoading: boolean;
  formError: string | null;
  apiMessage: string | null;
  isModalOpen: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  confirmSubscription: () => Promise<void>;
  cancelSubscription: () => void;
}

export const useNewsletterForm = (): UseNewsletterFormReturn => {
  const t = useTranslations('newsletter');

  const [emailToConfirm, setEmailToConfirm] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schema = NewsletterSchema(t);

  const errorMessages: Record<string, string> = {
    [ERROR_CODES.SUBSCRIPTION_FAILED]: t('api.subscriptionFailed'),
    [ERROR_CODES.EMAIL_ALREADY_SUBSCRIBED]: t('api.emailAlreadySubscribed'),
    [ERROR_CODES.INVALID_EMAIL]: t('api.invalidEmail'),
    [ERROR_CODES.SERVER_CONFIG_ERROR]: t('api.serverConfigError'),
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setApiMessage(null);
    setEmailToConfirm(null);

    // Honeypot field validation to detect spam bots
    const ribValue = (
      e.currentTarget.elements.namedItem('rib') as HTMLInputElement
    ).value;
    if (ribValue.trim() !== '') {
      setFormError(t('spamDetected')); // Set an error message for spam detection

      return; // Stop form submission if honeypot is filled
    }
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    const result = schema.safeParse({ email });

    if (!result.success) {
      const message = result.error.format().email?._errors[0];
      setFormError(message ?? t('unknownError'));

      return;
    }

    setFormError(null);
    setEmailToConfirm(result.data.email);
    setIsModalOpen(true);
  };

  const subscribeToNewsletter = async (email: string): Promise<ApiResponse> => {
    try {
      /* global fetch */
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      return await response.json();
    } catch (error) {
      /* global console */
      console.error(t('fetchError'), error);
      throw error;
    }
  };

  const confirmSubscription = async () => {
    if (emailToConfirm === null) {
      return;
    }

    setIsLoading(true);
    setApiMessage(null);

    try {
      const response = await subscribeToNewsletter(emailToConfirm);

      if ('error' in response) {
        const errorCode = response.error;
        if (
          typeof errorCode === 'string' &&
          errorCode.length > 0 &&
          Object.values(ERROR_CODES).includes(errorCode)
        ) {
          setApiMessage(errorMessages[errorCode]);
        } else {
          setApiMessage(t('errorWithStatus', { status: String(errorCode) }));
        }
      } else {
        setApiMessage(t('api.subscriptionSuccess'));
      }
    } catch (error: unknown) {
      console.error(t('unexpectedError'), error);
      setApiMessage(t('unexpectedError'));
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
      setEmailToConfirm(null);
    }
  };

  const cancelSubscription = () => {
    setIsModalOpen(false);
    setEmailToConfirm(null);
  };

  return {
    isLoading,
    formError,
    apiMessage,
    isModalOpen,
    handleSubmit,
    confirmSubscription,
    cancelSubscription,
  };
};
