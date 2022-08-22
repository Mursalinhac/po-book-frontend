import {Col, Row} from "react-bootstrap";

const CustomerInfoPreview = ({customerInfo}) => {
    return (
        <>
            <h1>Customer Information</h1>
            <Row>
                <Col md={6}>
                    <Row>
                        <Col className="preview-label">Name</Col>
                        <Col className="preview-field">
                            {`${customerInfo?.firstName} ${customerInfo?.lastName}`}
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col className="preview-label">Email</Col>
                        <Col className="preview-field">{customerInfo?.email}</Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Row>
                        <Col className="preview-label">Address</Col>
                        <Col className="preview-field">
                            {`${customerInfo?.address1} ${customerInfo?.address2 || ""}`}
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col className="preview-label">State</Col>
                        <Col className="preview-field">{customerInfo?.state}</Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Row>
                        <Col className="preview-label">City</Col>
                        <Col className="preview-field">{customerInfo?.city}</Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col className="preview-label">Zip Code</Col>
                        <Col className="preview-field">{customerInfo?.zipcode}</Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default CustomerInfoPreview;

