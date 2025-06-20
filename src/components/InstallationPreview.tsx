import React from 'react';
import OptionPreview from "./OptionPreview";
import { InstallationPreviewProps } from '../types';

const InstallationPreview: React.FC<InstallationPreviewProps> = ({ options, title }) => {
    return (
        <>
            {title && <h3>{title}</h3>}
            {options && Object.entries(options).map(([key, option]) => (
                <OptionPreview key={key} option={option} />
            ))}
        </>
    );
};

export default InstallationPreview;