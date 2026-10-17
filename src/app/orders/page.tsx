import React from 'react';
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Trade-in',
  description: 'Enter trade-in details as part of a Corvette purchase order.',
  keywords: ['order management', 'Corvette orders', 'purchase tracking', 'trade-in management', 'vehicle sales'],
  openGraph: {
    title: 'Order Management | Corvette Purchase Order',
    description: 'View and manage Corvette purchase orders and customer information',
    images: [
      {
        url: '/images/stingray.jpeg',
        width: 1200,
        height: 630,
        alt: 'Order Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade-in',
    description: 'View and manage Corvette purchase orders and customer information',
    images: ['/images/stingray.jpeg'],
  },
};

export default function OrdersPage() {
    return (
      <section className="empty-page">
        <h1>Trade-in</h1>
        <p className="mb-6 max-w-prose text-muted-foreground">Trade-in details belong to a vehicle order. Choose a model, then open its Trade-In tab to enter the vehicle information.</p>
        <Link href="/" className="inline-flex min-h-11 items-center rounded-[var(--radius-control)] bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Choose a model</Link>
      </section>
    );
}
