'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Check } from 'lucide-react';
import PricePreview from './PricePreview';
import PrintComponent from './PrintComponent';
import { orderSteps, selectedOptions } from '../lib/order';
import type { PreviewProps } from '../types';
import styles from './review.module.css';

const PrintPreview = dynamic(() => import('./PrintPreview'), {
  loading: () => <p role="status" className="p-6 text-muted-foreground">Loading print preview...</p>,
});

const surface = 'rounded-[var(--radius-shell)] bg-[var(--surface)] p-5';
const money = (n: unknown) => Number(n || 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export default function Preview({ order, setOrder, onEdit }: PreviewProps) {
  const [full, setFull] = useState(false);
  const col = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = col.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => el.style.setProperty('--paper-zoom', String(Math.min(1, (e.contentRect.width - 24) / 816))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const steps = orderSteps(order).filter(step => step.id !== 'review');
  const outstanding = steps.some(step => step.missing.length);
  const sections = [
    { title: 'Factory', options: order.factoryInstalled, trimFirst: true },
    { title: 'Dealer', options: order.dealerInstalled, trimFirst: false },
  ].map(({ title, options, trimFirst }) => {
    const groups = Object.values(options || {});
    const items = [...groups.filter(g => trimFirst && g.key === 'model'), ...groups.filter(g => !(trimFirst && g.key === 'model'))].flatMap(selectedOptions);
    return { title, items };
  });
  const edit = (id: typeof steps[number]['id'], label: string) => onEdit && <button type="button" className={styles.edit} onClick={() => onEdit(id)} aria-label={`Edit ${label}`}>Edit</button>;
  return <div className={styles.root}><div className={styles.grid}>
    <div className="flex min-w-0 flex-col gap-6">
      <section aria-label="Readiness checklist" className={surface}>
        <ul className="flex flex-col gap-1 text-sm">
          {!outstanding && <li className="flex min-h-11 items-center gap-2 font-medium text-[var(--fg)]"><Check strokeWidth={1.5} aria-hidden="true" className="size-5 text-[var(--accent-color)]"/>Ready to print</li>}
          {steps.filter(step => step.id !== 'review').map(step => (
            <li key={step.id} className="flex min-h-14 items-center justify-between gap-3 py-1">
              <span className="flex min-w-0 items-start gap-3">
                {step.state === 'done'
                  ? <Check strokeWidth={1.5} aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[var(--fg)]"/>
                  : <span aria-hidden="true" className={`mt-1 size-4 shrink-0 rounded-full border-2 ${step.state === 'todo' ? 'border-[var(--error)]' : 'border-dashed border-[var(--muted-fg)]'}`}/>}
                <span className="min-w-0">
                  <span className="block font-medium text-[var(--fg)]">{step.label}</span>
                  <span className={`block ${step.missing.length ? 'text-[var(--error)]' : 'text-[var(--muted-fg)]'}`}>
                    {step.missing.length ? `Missing: ${step.missing.join(', ')}` : step.summary}
                  </span>
                </span>
              </span>
              {edit(step.id, step.label)}
            </li>
          ))}
        </ul>
      </section>
      <section aria-label="Your selections" className={surface}>
        <h3 className="form-heading">Your selections</h3>
        {sections.every(s => !s.items.length) ? <p className="mt-3 text-sm text-muted-foreground">No options selected</p> :
          sections.filter(s => s.items.length).map(({ title, items }) => <div key={title} className="mt-4">
            <h4 className="text-sm font-semibold text-[var(--fg)]">{title}</h4>
            <dl className={`${styles.sel} mt-2`}>
              {items.map((o, i) => <div key={`${o.title}-${i}`} className="contents"><dt className="min-w-0 text-[var(--fg)]">{o.title}</dt><dd className="text-[var(--muted-fg)]">{money(o.price)}</dd></div>)}
            </dl>
          </div>)}
      </section>
      <section className={surface}>
        <h3 className="form-heading">Price summary</h3>
        <table className="po-book-table mt-4"><tbody><PricePreview price={order.price} setOrder={setOrder}/></tbody></table>
        <div className="mt-6"><PrintComponent order={order}/></div>
      </section>
    </div>
    <div ref={col} className={`${styles.paperCol} ${full ? styles.full : ''}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[var(--fg)]">Purchase order</p>
        <button type="button" aria-pressed={full} onClick={() => setFull(f => !f)} className={styles.edit}>{full ? "Back to side by side" : "View full size"}</button>
      </div>
      <div className={styles.paperFrame} aria-label="Purchase order print preview"><div className={styles.paper}><PrintPreview order={order}/></div></div>
    </div>
  </div></div>;
}
