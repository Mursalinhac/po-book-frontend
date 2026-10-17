'use client';

import { useRef, useState } from 'react';
import { Printer } from 'lucide-react';
import { Button } from './ui/button';
import { useReactToPrint } from 'react-to-print';
import PrintPreview from './PrintPreview';
import { selectedOptions } from '../lib/order';
import type { PrintComponentProps } from '../types';
import '../css/print.css';

export default function PrintComponent({ order }: PrintComponentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const hasModel = order.factoryInstalled?.model && selectedOptions(order.factoryInstalled.model).length > 0;
  const handlePrint = useReactToPrint({
    contentRef,
    pageStyle: '@page { size: auto; margin: 10mm; }',
    onBeforePrint: async () => { setError(null); },
    onPrintError: () => setError('The purchase order could not be printed. Please try again.'),
    documentTitle: `Corvette-${order.model || 'purchase'}-order`,
  });
  return <div>
    <div className="flex flex-wrap gap-3">
      <Button type="button" disabled={!hasModel} onClick={handlePrint} className="gap-3 pr-2" aria-describedby={!hasModel ? 'print-requirements' : undefined}>
        Print<span className="grid size-7 place-items-center rounded-full bg-[color-mix(in_oklch,var(--accent-ink)_18%,transparent)]"><Printer data-icon="inline-end" strokeWidth={1.5} className="size-4" aria-hidden="true" /></span>
      </Button>
      <Button type="button" variant="outline" disabled aria-describedby="save-unavailable">Save</Button>
    </div>
    {!hasModel && <p id="print-requirements" className="mt-3 text-sm text-muted-foreground">Choose a model trim before printing your order.</p>}
    <p id="save-unavailable" className="mt-3 max-w-prose text-xs leading-relaxed text-muted-foreground">Saving orders is not available. Use Print to keep a copy or save as PDF.</p>
    {error && <p role="alert" className="mt-3 text-sm text-[var(--error)]">{error}</p>}
    <div hidden><div ref={contentRef}><PrintPreview order={order}/></div></div>
  </div>;
}
