'use client';

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import type { StepId, StepStatus } from '../lib/order';
import styles from './configurator.module.css';

const stateLabel = { done: 'Complete', todo: 'Needs attention', optional: 'Optional' };

export default function StepRail({ steps, active, onSelect }: { steps: StepStatus[]; active: StepId; onSelect: (id: StepId) => void }) {
  const list = useRef<HTMLOListElement>(null);
  useEffect(() => {
    // Keep the active step visible in the horizontal bar without moving the page.
    const el = list.current?.querySelector<HTMLElement>('[aria-current="step"]');
    const box = list.current;
    if (el && box && box.scrollWidth > box.clientWidth) box.scrollTo({ left: el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2 });
  }, [active]);
  return (
    <nav aria-label="Order steps" className={styles.rail}>
      <ol ref={list} className={styles.railList}>
        {steps.map((step) => (
          <li key={step.id}>
            <a href={`#step-${step.id}`} className={styles.railItem} data-state={step.state}
              aria-current={step.id === active ? 'step' : undefined}
              onClick={(event) => { event.preventDefault(); onSelect(step.id); }}>
              <span className={styles.railMark} aria-hidden="true">
                {step.state === 'done' && <Check size={12} strokeWidth={2} />}
              </span>
              <span className={styles.railText}>
                <span className={styles.railLabel}>{step.label}</span>
                <span className={styles.railSummary}>{step.summary}</span>
              </span>
              <span className="sr-only">{stateLabel[step.state]}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
