import {Col, Form, Row} from "react-bootstrap";

function TradeInfo({onChange}) {
    const handleChange = (event) => {
        onChange((previousState) => {
            return {
                ...previousState,
                tradeInfo: {
                    ...previousState.tradeInfo,
                    [event.target.name]: event.target.value,
                }
            }
        })
    }
    return (
        <div className="po-book-form">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Year</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            type="number"
                            placeholder="Year"
                            name="year"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Make</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            placeholder="Make"
                            name="make"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Model</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            type="text"
                            placeholder="Model"
                            name="model"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            type="text"
                            placeholder="Color"
                            name="color"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Vin</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            placeholder="VIN"
                            name="vin"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridNumber">
                        <Form.Label>Miles</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            placeholder="Miles"
                            type="number"
                            name="miles"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Trade Value</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            placeholder="Trade Value"
                            type="number"
                            name="tradeValue"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Balance Owed</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            placeholder="Balance Owed"
                            type="number"
                            name="balanceOwed"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Net Trade</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            placeholder="Net Trade"
                            type="number"
                            name="netTrade"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Balance Owed to</Form.Label>
                        <Form.Control
                            className="bg-dark white-text"
                            placeholder="Balance Owed to"
                            name="balanceOwedTo"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control className="bg-dark white-text"
                                      placeholder="Account Number"
                                      type="number"
                                      name="accountNumber"
                                      onChange={handleChange}/>
                    </Form.Group></Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Info From</Form.Label>
                        <Form.Control className="bg-dark white-text"
                                      placeholder="Info From"
                                      name="infoFrom"
                                      onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Good Will</Form.Label>
                        <Form.Control className="bg-dark white-text"
                                      placeholder="Good Will"
                                      name="goodWill"
                                      onChange={handleChange}/>
                    </Form.Group>
                </Row>
            </Form></div>
    );
}

export default TradeInfo;