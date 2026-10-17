import React from 'react';
import Link from 'next/link';

const CustomerLists: React.FC = () => (
    <section className="empty-page">
        <h1>Customer List</h1>
        <p className="mb-6 max-w-prose text-muted-foreground">Customer storage is not available in this version. Customer details can be entered and printed as part of a vehicle order.</p>
        <Link href="/" className="inline-flex min-h-11 items-center rounded-[var(--radius-control)] bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Choose a model</Link>
    </section>
);
export default CustomerLists;
