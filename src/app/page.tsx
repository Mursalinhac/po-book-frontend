import React from 'react';
import type { Metadata } from 'next';
import Home from '../components/Home';

export const metadata: Metadata = {
  title: 'Select Your Corvette Model',
  description: 'Choose from Stingray, Z06, E-Ray, and ZR1 Corvette models. Configure and order your new Corvette with our interactive purchase order system.',
  keywords: ['Corvette models', 'Stingray', 'Z06', 'E-Ray', 'ZR1', 'Chevrolet Corvette', 'Sports Car Selection'],
  openGraph: {
    title: 'Select Your Corvette Model | Corvette Purchase Order',
    description: 'Choose from Stingray, Z06, E-Ray, and ZR1 Corvette models',
    images: [
      {
        url: '/images/stingray.jpeg',
        width: 1200,
        height: 630,
        alt: 'Corvette Model Selection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Select Your Corvette Model',
    description: 'Choose from Stingray, Z06, E-Ray, and ZR1 Corvette models',
    images: ['/images/stingray.jpeg'],
  },
};

export default function Page() {
    return <Home/>;
}
