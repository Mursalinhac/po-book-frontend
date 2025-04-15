import {Form, Alert} from "react-bootstrap";

const OrderOption = ({orderOption, onChange, parentKey}) => {
    // Safety check for undefined or null orderOption
    if (!orderOption) {
        console.error('OrderOption received null or undefined orderOption prop');
        return <Alert variant="warning">Missing option data</Alert>;
    }

    // Safety check for missing options array
    if (!orderOption.options || !Array.isArray(orderOption.options)) {
        console.error('OrderOption received invalid options array', orderOption);
        return <Alert variant="warning">Invalid option data</Alert>;
    }
    return (
        <div className="tile">
            <h4>{orderOption.title}</h4>
            <Form className="po-book-form">
                {orderOption.options.map((option, index) => {
                    // Skip options without a code
                    if (!option || !option.code) {
                        console.warn('Skipping option without code', option);
                        return null;
                    }
                    return (
                        <Form.Check
                            type={orderOption.selectType === "multi" ? "checkbox" : "radio"}
                            name={orderOption.key}
                            id={option.code}
                            label={option.title}
                            value={option.code}
                            required={false}
                            onChange={(event) => {
                                if (orderOption.selectType === "multi") {
                                    if (event.target.checked) {
                                        onChange(previousState => {
                                            // Ensure price exists and is a number
                                            const optionPrice = typeof option.price === 'number' ? option.price : 0;
                                            const currentSubTotal = previousState.price?.subTotal || 0;

                                            let newPrice = {
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
                                                        ...previousState[parentKey][orderOption.key],
                                                        selected: {[option.code]: option, ...previousState[parentKey][orderOption.key].selected}
                                                    }
                                                },
                                                price: newPrice
                                            }
                                        })
                                    } else {
                                        onChange(previousState => {
                                            let checkedOptions = previousState[parentKey][orderOption.key].selected
                                            delete checkedOptions[option.code]

                                            // Ensure price exists and is a number
                                            const optionPrice = typeof option.price === 'number' ? option.price : 0;
                                            const currentSubTotal = previousState.price?.subTotal || 0;

                                            let newPrice = {
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
                                                        ...previousState[parentKey][orderOption.key],
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
                                        const selectedPrice = previousState[parentKey]?.[orderOption.key]?.selected?.price || 0;

                                        let newPrice = {
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
                                                    ...previousState[parentKey][orderOption.key],
                                                    selected: option
                                                }
                                            },
                                            price: newPrice
                                        }
                                    })
                                }
                            }}
                        />
                    )
                })}
            </Form>
        </div>
    )
}

export default OrderOption;