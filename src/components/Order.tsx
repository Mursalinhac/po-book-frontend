'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { apiClient } from '../lib/api';
import { models } from '../lib/models';
import { orderSteps, type StepId } from '../lib/order';
import CustomerInfo from './CustomerInfo';
import TradeInfo from './TradeInfo';
import FactoryInstalled from './FactoryInstalled';
import DealerInstalled from './DealerInstalled';
import TrimPicker from './TrimPicker';
import Preview from './Preview';
import OrderSummary from './OrderSummary';
import StepRail from './StepRail';
import { ArrowLeft } from 'lucide-react';
import styles from './configurator.module.css';
import { OrderProps, OrderData } from '../types';

const stepIds: StepId[] = ['trim', 'factory', 'dealer', 'customer', 'trade', 'review'];

const Order: React.FC<OrderProps> = ({ model }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [order, setOrder] = useState<OrderData>({});
    const [activeStep, setActiveStep] = useState<StepId>('trim');
    const [retry, setRetry] = useState(0);

    useEffect(() => {
        let cancelled = false;
        const load = async () => {
            try {
                if (!model) throw new Error('Choose a model to start an order.');
                const data = await apiClient.getPriceList(model);
                if (!cancelled) {
                    setOrder({ ...data });
                }
            } catch (cause) {
                if (!cancelled) setError(cause instanceof Error ? cause.message : 'Unable to load this model.');
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        };
        void load();
        return () => { cancelled = true; };
    }, [model, retry]);

    const current = models.find((item) => item.slug === model);
    const modelTitle = current?.title || model || 'Corvette';
    const steps = orderSteps(order);
    const ready = !isLoading && !error;

    const scrollTo = useCallback((id: StepId) => {
        const section = document.getElementById(`step-${id}`);
        if (!section) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        section.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        section.querySelector<HTMLElement>('h2')?.focus({ preventScroll: true });
        setActiveStep(id);
    }, []);

    // Scroll-spy: the active step is the last section whose top has passed ~30% of the viewport.
    useEffect(() => {
        if (!ready) return;
        const seen = new Set<StepId>();
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                const id = entry.target.id.replace('step-', '') as StepId;
                if (entry.isIntersecting) seen.add(id); else seen.delete(id);
            }
            const top = stepIds.find((id) => seen.has(id));
            if (top) setActiveStep(top);
        }, { rootMargin: '-30% 0px -60% 0px' });
        stepIds.forEach((id) => { const el = document.getElementById(`step-${id}`); if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, [ready]);

    const section = (id: StepId, children: React.ReactNode, showSummary = false) => {
        const step = steps.find((item) => item.id === id);
        return (
            <section id={`step-${id}`} className={styles.step} aria-labelledby={`step-${id}-title`}>
                <header className={styles.stepHeader}>
                    <h2 id={`step-${id}-title`} tabIndex={-1}>{step?.label}</h2>
                    {showSummary && <span>{step?.summary}</span>}
                </header>
                {children}
            </section>
        );
    };

    return (
        <div className={styles.page}>
            <Link href="/" className={styles.back}><ArrowLeft size={15} strokeWidth={1.5} aria-hidden="true" />Back to models</Link>
            <header className={styles.header}><h1>Configure your {modelTitle}</h1>
            <p>Enter customer details, choose options, and review your purchase order.</p></header>
            {isLoading ? (
                <div role="status" aria-label="Loading vehicle options" className="space-y-4 motion-safe:animate-pulse">
                    <div className="h-12 rounded-lg bg-[var(--surface-raised)]"/>
                    <div className="h-64 rounded-lg bg-[var(--surface)]"/>
                    <span className="sr-only">Loading vehicle options...</span>
                </div>
            ) : error ? (
                <div role="alert" className="rounded-lg border border-destructive bg-card p-6">
                    <h2 className="mb-2 text-lg font-semibold">Unable to load vehicle options</h2>
                    <p className="mb-4 text-sm text-muted-foreground">{error}</p>
                    <button type="button" onClick={() => { setIsLoading(true); setError(null); setRetry((value) => value + 1); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Try again</button>
                </div>
            ) : (
                <div className={styles.layout}>
                    <StepRail steps={steps} active={activeStep} onSelect={scrollTo} />
                    <div className={styles.main}>
                        <div className={styles.buildGrid}>
                            <div className={styles.steps}>
                                {section('trim', order.factoryInstalled?.model && <TrimPicker group={order.factoryInstalled.model} onChange={setOrder} />)}
                                {section('factory', <FactoryInstalled options={order.factoryInstalled || {}} onChange={setOrder} exclude={['model']} />)}
                                {section('dealer', <DealerInstalled options={order.dealerInstalled || {}} onChange={setOrder} />)}
                                {section('customer', <CustomerInfo onChange={setOrder} />, true)}
                                {section('trade', <TradeInfo order={order} setOrder={setOrder} />, true)}
                            </div>
                            <OrderSummary order={order} onReview={() => scrollTo('review')} image={current?.image} modelName={modelTitle} atReview={activeStep === 'review'} />
                        </div>
                        {section('review', <Preview order={order} setOrder={setOrder} onEdit={scrollTo} />)}
                    </div>
                </div>
            )}
        </div>
    );
};
export default Order;
