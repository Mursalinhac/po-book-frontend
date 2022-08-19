import {Form} from "react-bootstrap";

const OrderOption = ({orderOption, onChange}) => {
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
                                required={false}
                                onChange={(event) => {
                                    if (orderOption.selectType === "multi") {
                                        if (event.target.checked) {
                                            onChange(previousState => {
                                                return {
                                                    ...previousState,
                                                    [orderOption.key]: [...previousState[orderOption.key], option]
                                                }
                                            })
                                        } else {

                                        }
                                    } else {

                                        onChange(previousState => {
                                            // console.log(previousState, orderOption.key, option)
                                            return {...previousState, [orderOption.key]: option}
                                        })
                                    }
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