import React from 'react';

import Footer from '@/app/components/sections/Footer';
import { Header } from '@/app/components/sections/Header';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
