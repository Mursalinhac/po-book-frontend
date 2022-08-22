import {Form} from "react-bootstrap";

const OrderOption = ({orderOption, onChange, parentKey}) => {
    return (
        <div className="tile">
            <h4>{orderOption.title}</h4>
            <Form className="po-book-form">
                {orderOption.options.map(option => {
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
                                            let newPrice = {
                                                ...previousState.price,
                                                subTotal: previousState.price.subTotal + option.price
                                            }

                                            newPrice.tax = Math.round(newPrice.subTotal * newPrice.taxPercentage) / 100
                                            newPrice.total = newPrice.subTotal + newPrice.tax
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

                                            let newPrice = {
                                                ...previousState.price,
                                                subTotal: previousState.price.subTotal - option.price
                                            }

                                            newPrice.tax = Math.round(newPrice.subTotal * newPrice.taxPercentage) / 100
                                            newPrice.total = newPrice.subTotal + newPrice.tax
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
                                        let newPrice = {
                                            ...previousState.price,
                                            subTotal: previousState.price.subTotal + option.price -
                                                (previousState[parentKey][orderOption.key]?.selected.price || 0)
                                        }
                                        newPrice.tax = Math.round(newPrice.subTotal * newPrice.taxPercentage) / 100
                                        newPrice.total = newPrice.subTotal + newPrice.tax
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