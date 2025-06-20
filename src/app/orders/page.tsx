import React from 'react';
import type { Metadata } from 'next';
import Orders from "../../components/TradeInfo";

export const metadata: Metadata = {
  title: 'Order Management',
  description: 'View and manage Corvette purchase orders and customer information. Track order status, manage trade-ins, and process vehicle sales.',
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
    title: 'Order Management',
    description: 'View and manage Corvette purchase orders and customer information',
    images: ['/images/stingray.jpeg'],
  },
};

export default function OrdersPage() {
    return <Orders/>;
}
