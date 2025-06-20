import React from 'react';
import type { Metadata } from 'next';
import Customers from "../../components/CustomerLists";

export const metadata: Metadata = {
  title: 'Customer Management',
  description: 'Manage customer information and purchase orders for Corvette sales. View customer details, contact information, and order history.',
  keywords: ['customer management', 'Corvette customers', 'purchase orders', 'customer database', 'sales management'],
  openGraph: {
    title: 'Customer Management | Corvette Purchase Order',
    description: 'Manage customer information and purchase orders for Corvette sales',
    images: [
      {
        url: '/images/stingray.jpeg',
        width: 1200,
        height: 630,
        alt: 'Customer Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Management',
    description: 'Manage customer information and purchase orders for Corvette sales',
    images: ['/images/stingray.jpeg'],
  },
};

export default function CustomersPage() {
    return <Customers/>;
}
