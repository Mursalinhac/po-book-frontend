import { Form, Row, Col } from "react-bootstrap";
function OrderPreview({ order }) {
    return (
        <div className="po-book-form">
            <h4 className="justify-content-center">Order Info</h4>
            <Form>
                {order.model ? (
                    <Row>
                        <Col>
                            <Form.Label>{order.model.title}</Form.Label>
                        </Col>
                        <Col className="justify-content-end">
                            <Form.Label>{order.model.price}</Form.Label>
                        </Col>
                    </Row>

                ) : null}

                {order.exteriorColor ? (
                    <Row>
                        <Col>
                            <Form.Label>{order.exteriorColor.title}</Form.Label>
                        </Col>
                        <Col className="justify-content-end">
                            <Form.Label>{order.exteriorColor.price}</Form.Label>
                        </Col>
                    </Row>

                ) : null}

                {Object.entries(order).forEach(([optionName, value]) => { 
                    console.log(optionName, value)
                    return value?.title ?
                        (<Row>
                            <Col>
                                <Form.Label>{value.title}</Form.Label>
                            </Col>
                            <Col className="justify-content-end">
                                <Form.Label>{value.price}</Form.Label>
                            </Col>
                        </Row>)
                        : <p>{optionName}</p>
                })}
            <pre>{JSON.stringify(order, null, 2)}</pre>
            </Form>
        </div>
    );
}
export default OrderPreview;