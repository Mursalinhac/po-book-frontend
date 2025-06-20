import React from 'react';
import OrderOption from "./OrderOption";
import { DealerInstalledProps } from '../types';

const DealerInstalled: React.FC<DealerInstalledProps> = ({ options, onChange }) => {
    // Safety check for undefined or null options
    if (!options) {
        console.error('DealerInstalled received null or undefined options');
        return (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded" role="alert">
                <span className="block sm:inline">No dealer options available</span>
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
                    parentKey="dealerInstalled"
                />
            ))}
        </div>
    );
};

export default DealerInstalled;