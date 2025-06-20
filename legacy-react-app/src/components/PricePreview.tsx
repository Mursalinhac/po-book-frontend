import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { PricePreviewProps, FormChangeEvent } from '../types';

const PricePreview: React.FC<PricePreviewProps> = ({ price, setOrder }) => {
    // Handle the case when price or optionCodes is undefined/null
    if (!price) {
        return null;
    }

    const handleChange = (event: FormChangeEvent) => {
        const { name, value } = event.target;
        if (!price || !setOrder) return;

        let newPrice = { ...price };
        if (name === "taxPercentage") {
            newPrice.taxPercentage = parseFloat(value as string);
            newPrice.tax = Math.round((newPrice.subTotal || 0) * (newPrice.taxPercentage || 0)) / 100;
            newPrice.total = (newPrice.subTotal || 0) + (newPrice.tax || 0);
        } else if (name === "gasGuzzler") {
            newPrice.gasGuzzler = parseFloat(value as string);
            newPrice.total = (newPrice.total || 0) + (newPrice.gasGuzzler || 0);
        }

        setOrder(previousState => {
            return {
                ...previousState,
                price: newPrice
            }
        })
    }
    return (
        <>
            {/* Pricing totals section */}
            <tr className="subtotal-row">
                <td colSpan={2}></td>
                <td>TOTAL MSRP</td>
                <td className="price-column">${price?.msrp || price?.subTotal || '0.00'}</td>
            </tr>
            
            {/* Option code rows - these would come from the specific vehicle options */}
            {price?.optionCodes && Array.isArray(price.optionCodes) && price.optionCodes.map((option, index) => (
                <tr key={`option-${index}`}>
                    <td>{option.code}</td>
                    <td colSpan={2}>{option.description}</td>
                    <td className="price-column">${option.price || '0.00'}</td>
                </tr>
            ))}
            
            {/* Empty rows for spacing/additional items */}
            <tr>
                <td colSpan={3}></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan={3}></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan={3}></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan={3}></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan={3}></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan={3}></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan={3}></td>
                <td className="price-column"></td>
            </tr>
            
            {/* Buyers must be signed notice */}
            <tr className="notice-row">
                <td colSpan={4} className="small-text">
                    Buyers Order must be signed and the additional deposit here must be received within 5 days of the date shown above by Ciocca in order to maintain customer's position on C8 Corvette Stingray placement list
                </td>
            </tr>
            
            {/* Initial box */}
            <tr>
                <td colSpan={3} className="text-right">Initial</td>
                <td className="initial-box"></td>
            </tr>
        </>
    );
};

export default PricePreview;