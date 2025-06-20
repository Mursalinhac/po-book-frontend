import React from 'react';
import { Alert, AlertDescription } from "./ui/alert";
import { OrderOptionProps } from '../types';

const OrderOption: React.FC<OrderOptionProps> = ({ orderOption, onChange, parentKey }) => {
    // Safety check for undefined or null orderOption
    if (!orderOption) {
        console.error('OrderOption received null or undefined orderOption prop');
        return (
            <Alert variant="destructive">
                <AlertDescription>Missing option data</AlertDescription>
            </Alert>
        );
    }

    // Safety check for missing options array
    if (!orderOption.options || !Array.isArray(orderOption.options)) {
        console.error('OrderOption received invalid options array', orderOption);
        return (
            <Alert variant="destructive">
                <AlertDescription>Invalid option data</AlertDescription>
            </Alert>
        );
    }
    return (
        <div className="tile">
            <h4>{orderOption.title}</h4>
            <form className="po-book-form">
                {orderOption.options.map((option) => {
                    // Skip options without a code
                    if (!option || !option.code) {
                        console.warn('Skipping option without code', option);
                        return null;
                    }
                    return (
                        <div key={option.code} className="flex items-center space-x-2 mb-2">
                            <input
                                type={orderOption.selectType === "multi" ? "checkbox" : "radio"}
                                name={orderOption.key}
                                id={option.code}
                                value={option.code}
                                className="form-check-input bg-black border-corvette-gray text-white focus:ring-blue-500"
                                onChange={(event) => {
                                if (orderOption.selectType === "multi") {
                                    if (event.target.checked) {
                                        onChange(previousState => {
                                            // Ensure price exists and is a number
                                            const optionPrice = typeof option.price === 'number' ? option.price : 0;
                                            const currentSubTotal = previousState.price?.subTotal || 0;

                                            const newPrice = {
                                                ...previousState.price,
                                                subTotal: currentSubTotal + optionPrice
                                            }

                                            // Safely calculate tax
                                            const taxPercentage = newPrice.taxPercentage || 0;
                                            newPrice.tax = Math.round(newPrice.subTotal * taxPercentage) / 100;
                                            newPrice.total = newPrice.subTotal + newPrice.tax;
                                            return {
                                                ...previousState,
                                                [parentKey]: {
                                                    ...previousState[parentKey],
                                                    [orderOption.key]: {
                                                        ...previousState[parentKey]?.[orderOption.key],
                                                        selected: {[option.code]: option, ...previousState[parentKey]?.[orderOption.key]?.selected}
                                                    }
                                                },
                                                price: newPrice
                                            }
                                        })
                                    } else {
                                        onChange(previousState => {
                                            const checkedOptions = previousState[parentKey]?.[orderOption.key]?.selected as Record<string, unknown>
                                            if (checkedOptions) {
                                                delete checkedOptions[option.code]
                                            }

                                            // Ensure price exists and is a number
                                            const optionPrice = typeof option.price === 'number' ? option.price : 0;
                                            const currentSubTotal = previousState.price?.subTotal || 0;

                                            const newPrice = {
                                                ...previousState.price,
                                                subTotal: Math.max(0, currentSubTotal - optionPrice) // Prevent negative values
                                            }

                                            // Safely calculate tax
                                            const taxPercentage = newPrice.taxPercentage || 0;
                                            newPrice.tax = Math.round(newPrice.subTotal * taxPercentage) / 100;
                                            newPrice.total = newPrice.subTotal + newPrice.tax;
                                            return {
                                                ...previousState,
                                                [parentKey]: {
                                                    ...previousState[parentKey],
                                                    [orderOption.key]: {
                                                        ...previousState[parentKey]?.[orderOption.key],
                                                        selected: checkedOptions
                                                    }
                                                },
                                                price: newPrice
                                            }
                                        })
                                    }
                                } else {
                                    onChange(previousState => {
                                        // Safely handle price calculations
                                        const optionPrice = typeof option.price === 'number' ? option.price : 0;
                                        const currentSubTotal = previousState.price?.subTotal || 0;
                                        const selectedOption = previousState[parentKey]?.[orderOption.key]?.selected;
                                        const selectedPrice = typeof selectedOption === 'object' && selectedOption && 'price' in selectedOption ? (typeof selectedOption.price === 'number' ? selectedOption.price : 0) : 0;

                                        const newPrice = {
                                            ...previousState.price,
                                            subTotal: Math.max(0, currentSubTotal + optionPrice - selectedPrice)
                                        }
                                        // Safely calculate tax
                                        const taxPercentage = newPrice.taxPercentage || 0;
                                        newPrice.tax = Math.round(newPrice.subTotal * taxPercentage) / 100;
                                        newPrice.total = newPrice.subTotal + newPrice.tax;
                                        return {
                                            ...previousState,
                                            [parentKey]: {
                                                ...previousState[parentKey],
                                                [orderOption.key]: {
                                                    ...previousState[parentKey]?.[orderOption.key],
                                                    selected: option
                                                }
                                            },
                                            price: newPrice
                                        }
                                    })
                                }
                                }}
                            />
                            <label
                                htmlFor={option.code}
                                className="text-white text-sm cursor-pointer"
                            >
                                {option.title}
                            </label>
                        </div>
                    )
                })}
            </form>
        </div>
    );
};

export default OrderOption;