import {Col, Form, Row} from "react-bootstrap";

function TradeIn() {
    return (
        <div className="po-book-form">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Year</Form.Label>
                        <Form.Control className="bg-dark white-text" type="number" placeholder="Year"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Make</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Make"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Model</Form.Label>
                        <Form.Control className="bg-dark white-text" type="text" placeholder="Model"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Color</Form.Label>
                        <Form.Control className="bg-dark white-text" type="text" placeholder="Color"
                        />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Vin</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="VIN"
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridNumber">
                        <Form.Label>Miles</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Miles" type="number"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Trade Value</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Trade Value" type="number"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Balance Owed</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Balance Owed" type="number"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Net Trade</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Net Trade" type="number"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Balance Owed to</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Balance Owed to"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Address"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Account Number" type="number"
                        />
                    </Form.Group></Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Info From</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Info From"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Good Will</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Good Will"
                        />
                    </Form.Group>
                </Row>
            </Form>
        </div>
    );
}

export default TradeIn;