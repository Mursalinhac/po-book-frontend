import { Card, Col, Form } from "react-bootstrap";

const OrderOption = ({ orderOption, onChange }) => {
    return (
        <>
            <Col md={2} key={orderOption.key}>
                {/* <Card bg="dark">
                    <Card.Body> */}
                        <h4 className="justify-content-center">{orderOption.title}</h4>
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
                                                                [orderOption.key]: { [option.code]: option, ...previousState.options[orderOption.key] },
                                                            },
                                                            total: previousState.total + option.price
                                                        }
                                                    })
                                                } else {
                                                    onChange(previousState => {
                                                        let checkedOptions = previousState.options[orderOption.key]
                                                        delete checkedOptions[option.code]
                                                        return {
                                                            ...previousState,
                                                            options: { ...previousState.options, [orderOption.key]: checkedOptions },
                                                            total: previousState.total - option.price
                                                        }
                                                    })
                                                }
                                            } else {
                                                onChange(previousState => {
                                                    console.log(previousState, orderOption.key, option)
                                                    return {
                                                        ...previousState,
                                                        options: { ...previousState.options, [orderOption.key]: option },
                                                        total: previousState.total + option.price - (previousState.options[orderOption.key]?.price || 0)
                                                    }
                                                })
                                            }
                                        }}
                                    />
                                )
                            })}
                        </Form>
                    {/* </Card.Body>
                </Card> */}
            </Col>

        </>
    )
}

export default OrderOption;