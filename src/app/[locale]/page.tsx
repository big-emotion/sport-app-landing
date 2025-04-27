import React from 'react';

import { Galerie } from '@/app/components/sections/Galerie';
import { Header } from '@/app/components/sections/Header';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Galerie />
    </div>
  );
}
