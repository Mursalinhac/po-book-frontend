'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { CatalogSummary, Model } from '../lib/models';
import styles from './home.module.css';

type Item = Model & { summary: CatalogSummary | null };

const usd = (n: number) => `$${n.toLocaleString('en-US')}`;

export default function ModelLineup({ items }: { items: Item[] }) {
  const available = items.filter((m) => m.available);
  const [slug, setSlug] = useState(available[0].slug);
  const stageRef = useRef<HTMLDivElement>(null);
  const active = available.find((m) => m.slug === slug) ?? available[0];
  const s = active.summary;
  const specA = s?.bodyStyles.join(' · ');
  const specB = s ? `${s.trims} trims` : null;
  const specLine = [specA, specB].filter(Boolean).join(' · ');

  const select = (next: string) => {
    setSlug(next);
    // Stacked (phone) layout: bring the changed stage into view.
    if (window.matchMedia('(max-width: 899px)').matches) {
      const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      stageRef.current?.scrollIntoView({ block: 'start', behavior: calm ? 'auto' : 'smooth' });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const i = available.findIndex((m) => m.slug === active.slug);
    let n = i;
    if (e.key in keys) n = (i + keys[e.key] + available.length) % available.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = available.length - 1;
    else return;
    e.preventDefault();
    setSlug(available[n].slug);
    e.currentTarget.querySelector<HTMLElement>(`[data-slug="${available[n].slug}"]`)?.focus();
  };

  return (
    <>
      <div className={styles.stage} ref={stageRef}>
        <div className={styles.photo}>
          {available.map((m, i) => (
            <Image
              key={m.slug}
              src={m.image}
              alt={`Corvette ${m.name}`}
              fill
              sizes="(max-width: 899px) 92vw, 60vw"
              preload={i === 0}
              className={m.slug === active.slug ? styles.shown : styles.hidden}
            />
          ))}
        </div>
        <div key={active.slug} className={styles.swap}>
          <p className={styles.name} aria-live="polite">{active.name}</p>
          {specLine && (
            <p className={styles.phoneSpec}>
              {[specLine, s?.minPrice != null ? `from ${usd(s.minPrice)}` : null].filter(Boolean).join(' · ')}
            </p>
          )}
          <div className={styles.actionRow}>
            {specLine && <span className={styles.spec}>{specLine}</span>}
            <Link href={`/orders/new/${active.slug}`} className={styles.action}>
              <span>Configure the {active.name}</span>
              {s?.minPrice != null && <span className={styles.from}>from {usd(s.minPrice)}</span>}
              <span className={styles.arrow}><ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.lineup} role="radiogroup" aria-label="Corvette models" onKeyDown={onKeyDown}>
        {items.map((m, i) => {
          const sum = m.summary;
          const checked = m.available && m.slug === active.slug;
          return (
            <button
              key={m.slug}
              type="button"
              role="radio"
              aria-checked={checked}
              aria-disabled={m.available ? undefined : true}
              tabIndex={checked ? 0 : -1}
              data-slug={m.slug}
              className={`${styles.row} ${checked ? styles.current : ''} ${m.available ? '' : styles.off}`}
              style={{ '--i': i } as React.CSSProperties}
              onClick={m.available ? () => select(m.slug) : undefined}
            >
              <span className={styles.thumb}>
                <Image src={m.image} alt="" fill sizes="80px" className={m.available ? undefined : styles.thumbOff} />
              </span>
              <span className={styles.rowName}>{m.name}</span>
              {m.available ? (
                sum?.minPrice != null && <span className={styles.rowPrice}>from {usd(sum.minPrice)}</span>
              ) : (
                <span className={styles.rowPrice}>Coming soon</span>
              )}
              {m.available && sum && (
                <span className={styles.rowSub}>
                  {[...sum.bodyStyles, `${sum.trims} trims`].join(' · ')}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
