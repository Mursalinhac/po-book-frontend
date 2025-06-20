import React from 'react';
import { CustomerInfoPreviewProps } from '../types';

const CustomerInfoPreview: React.FC<CustomerInfoPreviewProps> = ({ customerInfo }) => {
    return (
        <>
            <h2>Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex gap-2">
                    <span className="preview-label">Name:</span>
                    <span>{customerInfo?.firstName}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Stock:</span>
                    <span className="preview-field">{customerInfo?.stock}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Salesperson:</span>
                    <span className="preview-field">{customerInfo?.salesperson}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="flex gap-2">
                    <span className="preview-label">Address:</span>
                    <span className="preview-field">
                        {`${customerInfo?.address1 || ""} ${customerInfo?.address2 || ""}`}
                    </span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">City:</span>
                    <span className="preview-field">{customerInfo?.city}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">State:</span>
                    <span className="preview-field">{customerInfo?.state}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Zip Code:</span>
                    <span className="preview-field">{customerInfo?.zipcode}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex gap-2">
                    <span className="preview-label">Mobile Phone:</span>
                    <span className="preview-field">{customerInfo?.number}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Email:</span>
                    <span className="preview-field">{customerInfo?.email}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="flex gap-2">
                    <span className="preview-label">Year:</span>
                    <span className="preview-field">{customerInfo?.year}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Make:</span>
                    <span className="preview-field">{customerInfo?.make}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Model:</span>
                    <span className="preview-field">{customerInfo?.model}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Body Type:</span>
                    <span className="preview-field">{customerInfo?.bodytype}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                <div className="flex gap-2">
                    <span className="preview-label">Color:</span>
                    <span className="preview-field">{customerInfo?.color}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Trim:</span>
                    <span className="preview-field">{customerInfo?.trim}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Top:</span>
                    <span className="preview-field">{customerInfo?.top}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">Miles:</span>
                    <span className="preview-field">{customerInfo?.miles}</span>
                </div>
                <div className="flex gap-2">
                    <span className="preview-label">VIN:</span>
                    <span className="preview-field">{customerInfo?.vin}</span>
                </div>
            </div>
        </>
    );
};

export default CustomerInfoPreview;

