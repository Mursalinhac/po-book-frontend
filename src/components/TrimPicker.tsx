import React from 'react';
import { Check } from 'lucide-react';
import type { FactoryOptionGroup } from '../types/api';
import type { OrderData } from '../types/components';
import { optionId, selectedOptions, updateOptionSelection } from '../lib/order';
import styles from './options.module.css';

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });

const bodyOf = (title: string) => (/convertible/i.test(title) ? 'Convertible' : /coupe/i.test(title) ? 'Coupe' : 'Other');
const levelOf = (title: string) => title.trim().split(/\s+/).pop();

const TrimPicker: React.FC<{ group?: FactoryOptionGroup; onChange: (updater: (prev: OrderData) => OrderData) => void }> = ({ group, onChange }) => {
    if (!group || !Array.isArray(group.options) || group.options.length === 0) return null;
    const selected = selectedOptions(group);
    const groups = new Map<string, typeof group.options>();
    for (const option of group.options) {
        const body = bodyOf(option.title);
        groups.set(body, [...(groups.get(body) ?? []), option]);
    }
    return (
        <div role="radiogroup" aria-labelledby="step-trim-title">
            {[...groups].map(([body, options]) => (
                <div key={body} className={styles.trimGroup}>
                    <h3>{body}</h3>
                    <div className={styles.trimGrid}>
                        {options.map((option, index) => {
                            const id = optionId(group, option);
                            const inputId = `trim-${id}`;
                            const prev = options[index - 1];
                            return (
                                <div key={id} className={styles.trim}>
                                    <input
                                        type="radio"
                                        name={`factoryInstalled-${group.key}`}
                                        id={inputId}
                                        value={id}
                                        checked={selected.some((s) => optionId(group, s) === id)}
                                        onChange={(event) => {
                                            const checked = event.currentTarget.checked;
                                            onChange((previous) => updateOptionSelection(previous, 'factoryInstalled', group, option, checked));
                                        }}
                                    />
                                    <label htmlFor={inputId}>
                                        <span className={styles.trimTitle}>{option.title}</span>
                                        {option.code.trim() && <span className={styles.trimCode}>{option.code.trim()}</span>}
                                        <span className={styles.trimPrice}>{money.format(option.price)}</span>
                                        {/* ponytail: empty step line on the first tile keeps price baselines aligned across tiles */}
                                        {prev ? <span className={styles.trimStep}>+{money.format(option.price - prev.price)} over {levelOf(prev.title)}</span> : <span className={styles.trimStep} aria-hidden="true">&nbsp;</span>}
                                    </label>
                                    <span className={styles.check} aria-hidden="true"><Check size={14} strokeWidth={1.5} /></span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default TrimPicker;
