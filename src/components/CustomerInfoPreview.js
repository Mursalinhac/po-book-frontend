import {Col, Row} from "react-bootstrap";

const CustomerInfoPreview = ({customerInfo}) => {
    return (
        <>
            <h2>Customer Information</h2>
            <Row>
                <Col md={4}>
                    <Row xs="auto">
                        <Col className="preview-label">Name: </Col>
                        <Col>{customerInfo?.firstName}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Stock</Col>
                        <Col className="preview-field">{customerInfo?.stock}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Salesperson:</Col>
                        <Col className="preview-field">{customerInfo?.salesperson}</Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Address</Col>
                        <Col className="preview-field">
                            {`${customerInfo?.address1 || ""} ${customerInfo?.address2 || ""}`}
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">State</Col>
                        <Col className="preview-field">{customerInfo?.state}</Col>
                    </Row>
                </Col>

                <Col md={4}>
                    <Row>
                        <Col className="preview-label">City</Col>
                        <Col className="preview-field">{customerInfo?.city}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Zip Code</Col>
                        <Col className="preview-field">{customerInfo?.zipcode}</Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Mobile Phone</Col>
                        <Col className="preview-field">{customerInfo?.number}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Email</Col>
                        <Col className="preview-field">{customerInfo?.email}</Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Year</Col>
                        <Col className="preview-field">{customerInfo?.year}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Make</Col>
                        <Col className="preview-field">{customerInfo?.make}</Col>
                    </Row>
                </Col>

                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Model</Col>
                        <Col className="preview-field">{customerInfo?.model}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Body Type</Col>
                        <Col className="preview-field">{customerInfo?.bodytype}</Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Color</Col>
                        <Col className="preview-field">{customerInfo?.color}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Trim</Col>
                        <Col className="preview-field">{customerInfo?.trim}</Col>
                    </Row>
                </Col>

                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Top</Col>
                        <Col className="preview-field">{customerInfo?.top}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">Miles</Col>
                        <Col className="preview-field">{customerInfo?.miles}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="preview-label">VIN</Col>
                        <Col className="preview-field">{customerInfo?.vin}</Col>
                    </Row>
                </Col>
            </Row>

        </>


    );

}

export default CustomerInfoPreview;

