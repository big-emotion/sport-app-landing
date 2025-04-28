import React from 'react';

import { Advantages } from '@/app/components/sections/Advantages';
import { Feature } from '@/app/components/sections/Feature';
import { Galerie } from '@/app/components/sections/Galerie';
import { Header } from '@/app/components/sections/Header';
import { Testimonial } from '@/app/components/sections/Testimonial';

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div>
      <Header />
      <Feature />
      <Testimonial />
      <Galerie />
      <Advantages />
    </div>
  );
}
