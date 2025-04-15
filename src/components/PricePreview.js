import React from "react";
import {InputGroup, Form} from "react-bootstrap";

const PricePreview = ({price, setOrder = () => {}}) => {
    // Handle the case when price or optionCodes is undefined/null
    if (!price) {
        return null;
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        let newPrice = price;
        if (name === "taxPercentage") {
            newPrice.taxPercentage = parseFloat(value);
            newPrice.tax = Math.round(newPrice.subTotal * newPrice.taxPercentage) / 100;
            newPrice.total = newPrice.subTotal + newPrice.tax
        } else if (name === "gasGuzzler") {
            newPrice.gasGuzzler = parseFloat(value);
            newPrice.total = newPrice.total + newPrice.gasGuzzler
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
                <td colSpan="2"></td>
                <td>TOTAL MSRP</td>
                <td className="price-column">${price?.msrp || price?.subTotal || '0.00'}</td>
            </tr>
            
            {/* Option code rows - these would come from the specific vehicle options */}
            {price?.optionCodes && Array.isArray(price.optionCodes) && price.optionCodes.map((option, index) => (
                <tr key={`option-${index}`}>
                    <td>{option.code}</td>
                    <td colSpan="2">{option.description}</td>
                    <td className="price-column">${option.price || '0.00'}</td>
                </tr>
            ))}
            
            {/* Empty rows for spacing/additional items */}
            <tr>
                <td colSpan="3"></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan="3"></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan="3"></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan="3"></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan="3"></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan="3"></td>
                <td className="price-column"></td>
            </tr>
            <tr>
                <td colSpan="3"></td>
                <td className="price-column"></td>
            </tr>
            
            {/* Buyers must be signed notice */}
            <tr className="notice-row">
                <td colSpan="4" className="small-text">
                    Buyers Order must be signed and the additional deposit here must be received within 5 days of the date shown above by Ciocca in order to maintain customer's position on C8 Corvette Stingray placement list
                </td>
            </tr>
            
            {/* Initial box */}
            <tr>
                <td colSpan="3" className="text-right">Initial</td>
                <td className="initial-box"></td>
            </tr>
        </>
    );
};

export default PricePreview;