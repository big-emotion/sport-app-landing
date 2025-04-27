import React from 'react';

import { Header } from '@/app/components/sections/Header';
import { Testimonial } from '@/app/components/sections/Testimonial';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Testimonial />
    </div>
  );
}
