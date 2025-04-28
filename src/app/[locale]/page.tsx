import React from 'react';

import { Feature } from '@/app/components/sections/Feature';
import { Header } from '@/app/components/sections/Header';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Feature />
    </div>
  );
}
