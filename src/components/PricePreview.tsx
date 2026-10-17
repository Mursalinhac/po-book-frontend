import React from 'react';
import { PricePreviewProps } from '../types';

const currency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const PricePreview: React.FC<PricePreviewProps> = ({ price }) => {
    if (!price) return null;
    const rows = [
        ['Vehicle subtotal', price.subTotal || 0],
        [`Sales tax (${price.taxPercentage || 0}%)`, price.tax || 0],
        ['Total', price.total || 0],
    ] as const;
    return <>{rows.map(([label, value]) => (
        <tr key={label} className={label === 'Total' ? 'subtotal-row text-2xl font-semibold' : undefined}>
            <th scope="row" colSpan={3} className="text-left">{label}</th>
            <td className={label === 'Total' ? 'price-column text-2xl font-semibold tabular-nums' : 'price-column tabular-nums'}>{currency(value)}</td>
        </tr>
    ))}</>;
};
export default PricePreview;
