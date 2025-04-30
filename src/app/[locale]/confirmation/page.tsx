'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/app/components/ui/Button'; // adapte le chemin si besoin

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const access = searchParams.get('access');
    if (access !== 'granted') {
      router.push('/');
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black gap-6 px-4 text-center">
      <h1 className="text-3xl font-bold">Merci pour votre inscription !</h1>
      <Button variant="primary" size="md" onClick={() => router.push('/')}>
        Retour à l'accueil
      </Button>
    </div>
  );
}
