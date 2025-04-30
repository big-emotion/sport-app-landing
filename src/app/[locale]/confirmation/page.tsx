'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';

import { Button } from '@/app/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function ConfirmationPage(): JSX.Element | null {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [valid, setValid] = useState<boolean | null>(null);

  useEffect(() => {
    const access = searchParams.get('access');
    if (access !== 'granted') {
      notFound();
    } else {
      setValid(true);
    }
  }, [searchParams]);

  if (valid === null) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black gap-6 px-4 text-center">
      <h1 className="text-3xl font-bold">Merci pour votre inscription !</h1>
      <Button variant="primary" size="md" onClick={() => router.push('/')}>
        Retour à l'accueil
      </Button>
    </div>
  );
}
