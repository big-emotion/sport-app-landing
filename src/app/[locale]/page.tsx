import React from 'react';

import { Header } from '@/app/components/sections/Header';
import { Galerie } from '@/app/components/sections/Galerie';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Galerie />
    </div>
  );
}
