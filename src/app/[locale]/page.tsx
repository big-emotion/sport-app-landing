import React from 'react';

import Faq from '@/app/components/sections/Faq';
import { Header } from '@/app/components/sections/Header';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Faq />
    </div>
  );
}
