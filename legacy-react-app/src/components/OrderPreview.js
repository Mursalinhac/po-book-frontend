import React from "react";
import {Form, Row, Col} from "react-bootstrap";

function OrderPreview({order}) {
    return (
        <div className="po-book-form">
            <h4 className="justify-content-center">Order Info</h4>
            <Form>
                {order.model && (
                    <Row >
                        <Col>
                            <Form.Label>{order.model.title}</Form.Label>
                        </Col>
                        <Col className="justify-content-end">
                            <Form.Label>{order.model.price}</Form.Label>
                        </Col>
                    </Row>
                )}

                {order.exteriorColor && (
                    <Row>
                        <Col>
                            <Form.Label>{order.exteriorColor.title}</Form.Label>
                        </Col>
                        <Col className="justify-content-end">
                            <Form.Label>{order.exteriorColor.price}</Form.Label>
                        </Col>
                    </Row>
                )}

                {Object.entries(order).map(([optionName, value]) => (
                    value?.title ? (
                        <Row key={optionName}>
                            <Col>
                                <Form.Label>{value.title}</Form.Label>
                            </Col>
                            <Col className="justify-content-end">
                                <Form.Label>{value.price}</Form.Label>
                            </Col>
                        </Row>
                    ) : (
                        <p key={optionName}>{optionName}</p>
                    )
                ))}
                <pre>{JSON.stringify(order, null, 2)}</pre>
            </Form>
        </div>
    );
}

export default OrderPreview;
