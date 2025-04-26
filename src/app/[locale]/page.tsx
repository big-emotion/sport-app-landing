import React from 'react';

import Advantages from '@/app/components/sections/Advantages';
import { Header } from '@/app/components/sections/Header';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Advantages />
    </div>
  );
}
