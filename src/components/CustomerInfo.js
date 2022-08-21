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
                        <Form.Label>First Name</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="First Name" name="firstName"
                                      onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control className="bg-dark white-text" placeholder="Last Name" name="lastName"
                                      onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="bg-dark white-text" type="email" placeholder="Enter email" name="email"
                                      onChange={handleChange}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control className="bg-dark white-text" placeholder="1234 Main St" name="address1"
                                  onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control className="bg-dark white-text" placeholder="Apartment, studio, or floor"
                                  name="address2" onChange={handleChange}/>
                </Form.Group>

                <Row className="mb-3">
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
                        <Form.Control className="bg-dark white-text" placeholder="Zip code" name="zipcode"
                                      onChange={handleChange}/>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    );
}

export default CustomerInfo;