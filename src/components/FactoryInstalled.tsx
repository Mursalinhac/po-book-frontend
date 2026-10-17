import React from 'react';
import OrderOption from "./OrderOption";
import styles from './options.module.css';
import { FactoryInstalledProps } from '../types';

const FactoryInstalled: React.FC<FactoryInstalledProps & { exclude?: string[] }> = ({ options, onChange, exclude = [] }) => {
    // Safety check for undefined or null options
    if (!options || Object.keys(options).length === 0) {
        console.error('FactoryInstalled received null or undefined options');
        return (
            <div className="rounded-[var(--radius-control)] bg-[color-mix(in_oklch,var(--error)_12%,var(--surface))] px-4 py-3 text-[var(--fg)]" role="alert">
                <span className="block sm:inline">No factory options available</span>
            </div>
        );
    }

    return (
        <div className={styles.groups}>
            {Object.entries(options).filter(([optionName, orderOption]) => !exclude.includes(optionName) && !exclude.includes(orderOption?.key)).map(([optionName, orderOption], index) => (
                <OrderOption
                    key={optionName}
                    index={index}
                    orderOption={orderOption}
                    onChange={onChange}
                    parentKey="factoryInstalled"
                />
            ))}
        </div>
    );
};

export default FactoryInstalled;
