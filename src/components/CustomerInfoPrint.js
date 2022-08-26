import {Col, Row} from "react-bootstrap";
import React from "react";
// import Picture1 from "../images/PO book images/Picture1.png";

function CustomerInfoPrint({customerInfo}) {
    return (
        <>
            <Row>
                <Col className="preview-label">Name: </Col>
                <Col>{customerInfo?.firstName}</Col>

                <Col className="preview-label">Stock</Col>
                <Col className="preview-field">{customerInfo?.stock}</Col>

                <Col className="preview-label">Salesperson:</Col>
                <Col className="preview-field">{customerInfo?.salesperson}</Col>
            </Row>

            <Row>
                <Col className="preview-label">Address</Col>
                <Col className="preview-field"> {customerInfo?.address1}  </Col>

                <Col className="preview-label">State</Col>
                <Col className="preview-field">{customerInfo?.state}</Col>

                <Col className="preview-label">City</Col>
                <Col className="preview-field">{customerInfo?.city}</Col>
            </Row>
            <Row>
                <Col className="preview-label">Zip Code</Col>
                <Col className="preview-field">{customerInfo?.zipcode}</Col>

                <Col className="preview-label">Mobile Phone</Col>
                <Col className="preview-field">{customerInfo?.number}</Col>

                <Col className="preview-label">Email</Col>
                <Col className="preview-field">{customerInfo?.email}</Col>
            </Row>

            <Row>
                <Col className="preview-label">Year</Col>
                <Col className="preview-field">{customerInfo?.year}</Col>

                <Col className="preview-label">Make</Col>
                <Col className="preview-field">{customerInfo?.make}</Col>

                <Col className="preview-label">Model</Col>
                <Col className="preview-field">{customerInfo?.model}</Col>

                <Col className="preview-label">Body Type</Col>
                <Col className="preview-field">{customerInfo?.bodytype}</Col>
            </Row>

            <Row>
                <Col className="preview-label">Color</Col>
                <Col className="preview-field">{customerInfo?.color}</Col>

                <Col className="preview-label">Trim</Col>
                <Col className="preview-field">{customerInfo?.trim}</Col>

                <Col className="preview-label">Top</Col>
                <Col className="preview-field">{customerInfo?.top}</Col>

                <Col className="preview-label">Miles</Col>
                <Col className="preview-field">{customerInfo?.miles}</Col>

                <Col className="preview-label">VIN</Col>
                <Col className="preview-field">{customerInfo?.vin}</Col>
                {/*<Col className="align-content-end" md={2}> <img src={Picture1}/></Col>*/}
            </Row>
        </>
    );
}

export default CustomerInfoPrint;