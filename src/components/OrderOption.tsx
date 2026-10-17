import React from 'react';
import { ChevronDown } from 'lucide-react';
import { OrderOptionProps } from '../types';
import { optionId, selectedOptions, updateOptionSelection } from '../lib/order';
import styles from './options.module.css';

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
const anchor = (parentKey: string, key: string, index: number) => `${parentKey}-group-${key.replace(/[^a-zA-Z0-9]+/g, '-')}-${index}`;

const OrderOption: React.FC<OrderOptionProps & { index?: number }> = ({ orderOption, onChange, parentKey, index = 0 }) => {
    if (!orderOption || !Array.isArray(orderOption.options)) {
        return <div role="alert">This option group is unavailable.</div>;
    }
    const selections = selectedOptions(orderOption);
    const names = selections.map((s) => s.title).join(', ');
    const total = selections.reduce((sum, s) => sum + (Number(s.price) || 0), 0);
    const base = anchor(parentKey, orderOption.key, index);
    return (
        <details className={styles.disclosure}>
            <summary className={styles.summary}>
                <span className={styles.summaryTitle}>{orderOption.title}</span>
                <span className={styles.summaryMeta}>
                    <span className={styles.summaryNames} title={names || undefined}>{names || 'None'}</span>
                    {total > 0 && <span className={styles.summaryTotal}>{money.format(total)}</span>}
                </span>
                <ChevronDown className={styles.chevron} strokeWidth={1.5} aria-hidden="true" />
            </summary>
            <div role="group" id={base} aria-labelledby={`${base}-title`} className={styles.group}>
                <div id={`${base}-title`} className={styles.srOnly}>{orderOption.title}</div>
                <div className={styles.choices}>
                    {orderOption.options.map((option) => {
                        const id = optionId(orderOption, option);
                        const inputId = `${parentKey}-${id}`;
                        return (
                            <div key={id} className={styles.choice}>
                                <input
                                    type={orderOption.selectType === 'multi' ? 'checkbox' : 'radio'}
                                    name={`${parentKey}-${orderOption.key}`}
                                    id={inputId}
                                    value={id}
                                    checked={selections.some((selected) => optionId(orderOption, selected) === id)}
                                    onChange={(event) => {
                                        const checked = event.currentTarget.checked;
                                        onChange((previous) => updateOptionSelection(previous, parentKey, orderOption, option, checked));
                                    }}
                                />
                                <label htmlFor={inputId}>
                                    <span>{option.title}{option.code.trim() && <span className={styles.code}>{option.code.trim()}</span>}</span>
                                    <span className={styles.price}>{money.format(option.price)}</span>
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </details>
    );
};
export default OrderOption;
