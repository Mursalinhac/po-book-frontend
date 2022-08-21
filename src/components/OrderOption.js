import {Form} from "react-bootstrap";

const OrderOption = ({orderOption, onChange, parentKey}) => {
    console.log(orderOption)
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
                                            return {
                                                ...previousState,
                                                [parentKey]: {
                                                    ...previousState[parentKey],
                                                    [orderOption.key]: {
                                                        ...previousState[parentKey][orderOption.key],
                                                        selected: {[option.code]: option, ...previousState[parentKey][orderOption.key].selected}
                                                    }
                                                },
                                                total: previousState.total + option.price
                                            }
                                        })
                                    } else {
                                        onChange(previousState => {
                                            let checkedOptions = previousState[parentKey][orderOption.key].selected
                                            delete checkedOptions[option.code]
                                            return {
                                                ...previousState,
                                                [parentKey]: {
                                                    ...previousState[parentKey],
                                                    [orderOption.key]: {
                                                        ...previousState[parentKey][orderOption.key],
                                                        selected: checkedOptions
                                                    }
                                                },
                                                total: previousState.total - option.price
                                            }
                                        })
                                    }
                                } else {
                                    onChange(previousState => {
                                        console.log(previousState, orderOption, option)
                                        console.log(parentKey, previousState[parentKey])
                                        return {
                                            ...previousState,
                                            [parentKey]: {
                                                ...previousState[parentKey],
                                                [orderOption.key]: {
                                                    ...previousState[parentKey][orderOption.key],
                                                    selected: option
                                                }
                                            },
                                            total: previousState.total + option.price - (previousState[parentKey][orderOption.key]?.price || 0)
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