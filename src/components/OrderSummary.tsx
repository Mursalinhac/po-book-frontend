'use client';

import Image from 'next/image';
import type { OrderData } from '../types';
import { selectedCount, selectedOptions, selectedTotal } from '../lib/order';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import styles from './configurator.module.css';

const money = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

/** Value that flashes briefly whenever it changes (keyed remount restarts the CSS animation). */
const Flash = ({ value }: { value: string }) => <span key={value} className={styles.flash}>{value}</span>;

interface Props { order: OrderData; onReview: () => void; image?: string; modelName?: string; atReview?: boolean }

export default function OrderSummary({ order, onReview, image, modelName, atReview }: Props) {
  const trim = order.factoryInstalled?.model ? selectedOptions(order.factoryInstalled.model)[0] : undefined;
  const factoryCount = selectedCount(order.factoryInstalled, 'model');
  const dealerCount = selectedCount(order.dealerInstalled);
  const count = selectedCount(order.factoryInstalled) + dealerCount;
  const rows: [string, string, string?][] = [
    ['Vehicle', money(Number(trim?.price) || 0)],
    ['Factory options', money(selectedTotal(order.factoryInstalled, 'model')), String(factoryCount)],
    ['Dealer accessories', money(selectedTotal(order.dealerInstalled)), String(dealerCount)],
    ['Subtotal', money(order.price?.subTotal || 0)],
    [`Tax (${order.price?.taxPercentage || 0}%)`, money(order.price?.tax || 0)],
  ];
  return (
    <aside className={styles.summary} aria-label="Order summary">
      {image && (
        <div className={styles.stageImage}>
          <Image src={image} alt={modelName ? `Corvette ${modelName}` : ''} fill sizes="(max-width: 1199px) 18rem, 21rem" />
        </div>
      )}
      {image && <p className={styles.stageCaption}>Illustrative photo</p>}
      <div className={styles.summaryHeading}>
        <h2>Your configuration</h2>
        <span>{count} {count === 1 ? 'selection' : 'selections'}</span>
      </div>
      {trim ? <>
        <p className={styles.trim}>{trim.title}</p>
        <dl className={styles.breakdown}>
          {rows.map(([label, value, n]) => (
            <div key={label}>
              <dt>{label}{n && n !== '0' ? <small>{n}</small> : null}</dt>
              <dd><Flash value={value} /></dd>
            </div>
          ))}
        </dl>
        <div className={styles.total}><span>Total</span><strong><Flash value={money(order.price?.total || 0)} /></strong></div>
      </> : <p className={styles.incomplete}>Choose a model trim to start your configuration.</p>}
      {!atReview && <Button type="button" onClick={onReview} className={styles.reviewButton}>Review order <span className={styles.reviewArrow}><ArrowRight strokeWidth={1.5} aria-hidden="true" /></span></Button>}
      <p className={styles.summaryNote}>Amounts follow the supplied price list. Trade-in details are recorded separately.</p>
    </aside>
  );
}
