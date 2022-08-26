import {Form, Row, Col} from "react-bootstrap";

function CustomerInfo({onChange}) {
    const handleChange = (event) => {
        onChange((previousState) => {
            return {
                ...previousState,
                customerInfo: {
                    ...previousState.customerInfo,
                    [event.target.name]: event.target.value
                }
            }
        })
    }

    return (
        <div className="po-book-form">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Customer Name" name="firstName"
                                      onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Stock#</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Stock" name="stock"
                                      onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Salesperson</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Salesperson" name="salesperson"
                                      onChange={handleChange}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="1234 Main St" name="address1"
                                      onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="City" name="city"
                                      onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="State" name="state"
                                      onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Zip code" name="zipcode" type="number"
                                      onChange={handleChange}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Mobile Phone</Form.Label>
                        <Form.Control className="bg-dark white-text" type="number" placeholder="Mobile Phone"
                                      name="number"
                                      onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="bg-dark white-text" type="email" placeholder="Enter email" name="email"
                                      onChange={handleChange}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Year</Form.Label>
                        <Form.Control className="bg-dark white-text" type="number" placeholder="Year" name="year"
                                      onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Make</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Make" name="make"
                                      onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Model</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Model" name="model"
                                      onChange={handleChange}/>
                    </Form.Group><Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Body Type</Form.Label>
                    <Form.Control className="bg-dark white-text" placeholder="Body Type" name="bodytype"
                                  onChange={handleChange}/>
                </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Color</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Color" name="color"
                                      onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Trim</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Trim" name="trim"
                                      onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Top</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Top" name="top"
                                      onChange={handleChange}/>
                    </Form.Group><Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Miles</Form.Label>
                    <Form.Control className="bg-dark white-text" placeholder="Miles" type="number" name="miles"
                                  onChange={handleChange}/>
                </Form.Group><Form.Group as={Col} controlId="formGridName">
                    <Form.Label>VIN</Form.Label>
                    <Form.Control className="bg-dark white-text" placeholder="Body Type" name="vin"
                                  onChange={handleChange}/>
                </Form.Group>
                </Row>
            </Form>
        </div>


    );
}

export default CustomerInfo;