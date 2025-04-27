import React from 'react';

import { Header } from '@/app/components/sections/Header';
import Newsletter from '@/app/components/sections/Newsletter';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Newsletter />
    </div>
  );
}
