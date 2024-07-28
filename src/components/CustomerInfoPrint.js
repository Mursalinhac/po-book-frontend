import {Col, Row, Form, Card} from "react-bootstrap";
import Picture1 from "../images/PO book images/Picture1.png";
import Picture2 from "../images/PO book images/Picture2.png";
import Picture3 from "../images/PO book images/Picture3.png";
import Picture4 from "../images/PO book images/Picture4.png";
import Picture5 from "../images/PO book images/Picture5.png";
import Picture6 from "../images/PO book images/Picture6.png";
import Top from "../images/PO book images/top.png";

function CustomerInfoPrint({customerInfo}) {
    return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <img
                    style={{
                        height: '40px', width: "200px",
                        alignSelf: "center"
                    }}
                    src={Top}
                    className="img-fluid"/>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "xx-small"
                        }}>Retail Vehicle Order
                        </p>
                        <div className="box"></div>
                    </div>
                    <text style={{fontSize: "xx-small"}}>430 N. Albany Ave, Atlantic City, NJ 08401
                        609-344-2100 / 609-345-2100
                    </text>
                </div>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label as={Col}>Name:</Form.Label>
                        <Col style={{color: 'blue', textDecoration: 'underline'}}>{customerInfo?.firstName}</Col>

                        <Form.Label as={Col}>Stock</Form.Label>
                        <Col style={{color: 'blue', textDecoration: 'underline'}}>{customerInfo?.stock}</Col>

                        <Form.Label as={Col}>Salesperson:</Form.Label>
                        <Col style={{color: 'blue', textDecoration: 'underline'}}>{customerInfo?.salesperson}</Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label as={Col}>Address</Form.Label>
                        <Col style={{color: 'blue', textDecoration: 'underline'}}>{customerInfo?.address1}</Col>

                        <Form.Label as={Col}>State</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.state}</Col>

                        <Form.Label as={Col}>City</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.city}</Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label as={Col}>Zip Code</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.zipcode}</Col>

                        <Form.Label as={Col}>Mobile Phone</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.number}</Col>

                        <Form.Label as={Col}>Email</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.email}</Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label as={Col}>Year</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.year}</Col>

                        <Form.Label as={Col}>Make</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.make}</Col>

                        <Form.Label as={Col}>Model</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.model}</Col>

                        <Form.Label as={Col}>Body Type</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.bodytype}</Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label as={Col}>Color</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.color}</Col>

                        <Form.Label as={Col}>Trim</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.trim}</Col>

                        <Form.Label as={Col}>Top</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.top}</Col>

                        <Form.Label as={Col}>Miles</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.miles}</Col>

                        <Form.Label as={Col}>VIN</Form.Label>
                        <Col style={{color: 'blue'}}>{customerInfo?.vin}</Col>
                    </Form.Group>
                </Form>

            </div>
        </>

    )
        ;

}

export default CustomerInfoPrint;