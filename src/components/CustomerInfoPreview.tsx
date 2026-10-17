import type { CustomerInfoPreviewProps } from '../types';

export default function CustomerInfoPreview({ customerInfo: customer }: CustomerInfoPreviewProps) {
  const rows = [
    ['Name', customer?.firstName], ['Stock', customer?.stock], ['Salesperson', customer?.salesperson],
    ['Address', [customer?.address1, customer?.address2].filter(Boolean).join(', ')],
    ['City', customer?.city], ['State', customer?.state], ['Zip code', customer?.zipcode],
    ['Mobile phone', customer?.number], ['Email', customer?.email],
  ];
  const entered = rows.filter(([, value]) => value);
  return <section aria-label="Customer information" className="@container">
    <h3 className="form-heading">Customer information</h3>
    {entered.length ? <dl className="grid grid-cols-1 gap-x-8 gap-y-5 @md:grid-cols-2 @2xl:grid-cols-3 mt-6">
      {entered.map(([label, value]) => <div key={label} className="min-w-0">
        <dt className="preview-label mb-1">{label}</dt><dd className="preview-field">{value}</dd>
      </div>)}
    </dl> : <p className="text-sm text-muted-foreground mt-3">Enter customer details in Customer Info to include them in this order.</p>}
  </section>;
}
