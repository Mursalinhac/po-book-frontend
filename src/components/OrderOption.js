import {Form} from "react-bootstrap";

const OrderOption = ({orderOption, onChange}) => {
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <div className="po-book-form" key={orderOption.key}>
                <h4 className="justify-content-center">{orderOption.title}</h4>
                <Form>
                    {orderOption.options.map(option => {
                        return (
                            <Form.Check
                                type={orderOption.selectType === "multi" ? "checkbox" : "radio"}
                                name={orderOption.key}
                                id={option.code}
                                label={option.title}
                                value={option.code}
                                onChange={() => {
                                    if (orderOption.selectType === "multi") {
                                        onChange(previousState => {
                                            console.log(previousState, orderOption.key, previousState[orderOption.key], option)
                                            // return {
                                            //     ...previousState,
                                            //     [orderOption.key]: [option, ...previousState[orderOption.key]]
                                            // }
                                            return previousState
                                        })

                                    } else {

                                        onChange(previousState => {
                                            console.log(previousState, orderOption.key, option)
                                            return {...previousState, [orderOption.key]: option}
                                        })
                                    }
                                    console.log({parentKey: orderOption.key, ...option})
                                }}
                            />
                        )
                    })}
                </Form>
            </div>
            <br/>
        </>
    )
}

export default OrderOption;