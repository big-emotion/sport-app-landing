import React from 'react';

import { Header } from '@/app/components/sections/Header';
import Advantages from '@/app/components/sections/Advantages';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Advantages />
    </div>
  );
}
