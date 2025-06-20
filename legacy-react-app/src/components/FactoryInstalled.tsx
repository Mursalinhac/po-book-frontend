import React from 'react';
import OrderOption from "./OrderOption";
import { FactoryInstalledProps } from '../types';

const FactoryInstalled: React.FC<FactoryInstalledProps> = ({ options, onChange }) => {
    // Safety check for undefined or null options
    if (!options) {
        console.error('FactoryInstalled received null or undefined options');
        return (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded" role="alert">
                <span className="block sm:inline">No factory options available</span>
            </div>
        );
    }

    return (
        <div className="tile-holder">
            {Object.entries(options || {}).map(([optionName, orderOption]) => (
                <OrderOption
                    key={optionName}
                    orderOption={orderOption}
                    onChange={onChange}
                    parentKey="factoryInstalled"
                />
            ))}
        </div>
    );
};

export default FactoryInstalled;