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
                                            return {
                                                ...previousState,
                                                options: {
                                                    ...previousState.options,
                                                    [parentKey]: {
                                                        ...previousState.options[parentKey],
                                                        [orderOption.key]: {[option.code]: option, ...previousState.options[parentKey][orderOption.key]}
                                                    },
                                                },
                                                total: previousState.total + option.price
                                            }
                                        })
                                    } else {
                                        onChange(previousState => {
                                            let checkedOptions = previousState.options[parentKey][orderOption.key]
                                            delete checkedOptions[option.code]
                                            return {
                                                ...previousState,
                                                options: {
                                                    ...previousState.options,
                                                    [parentKey]: {
                                                        ...previousState.options[parentKey],
                                                        [orderOption.key]: checkedOptions
                                                    }
                                                },
                                                total: previousState.total - option.price
                                            }
                                        })
                                    }
                                } else {
                                    onChange(previousState => {
                                        console.log(previousState, orderOption.key, option)
                                        console.log(parentKey, previousState.options[parentKey])
                                        return {
                                            ...previousState,
                                            options: {
                                                ...previousState.options,
                                                [parentKey]: {
                                                    ...previousState.options[parentKey],
                                                    [orderOption.key]: option
                                                }
                                            },
                                            total: previousState.total + option.price - (previousState.options[parentKey][orderOption.key]?.price || 0)
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