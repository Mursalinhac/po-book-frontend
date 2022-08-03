import { Col, Container, Row, Form, Button, Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Order() {
    let { model } = useParams();
    console.log(model)
    return (
        <Container fluid>
            <Row>
                <Col md={7}>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Customer info</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Control placeholder="First name" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Last name" />
                                        </Col>
                                    </Row>
                                </Form>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            {/* <Form.Label>Email</Form.Label> */}
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            {/* <Form.Label>Password</Form.Label> */}
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        {/* <Form.Label>Address</Form.Label> */}
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        {/* <Form.Label>Address 2</Form.Label> */}
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridCity">
                                            {/* <Form.Label>City</Form.Label> */}
                                            <Form.Control placeholder="City" />
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            {/* <Form.Label>State</Form.Label> */}
                                            <Form.Control placeholder="State" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                            {/* <Form.Label>Zip</Form.Label> */}
                                            <Form.Control placeholder="Zip Code" />
                                            <Form.Control />
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Select Model</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Corvette Stingray Coupe 1LT',
                                        'Corvette Stingray Coupe 2LT',
                                        'Corvette Stingray Coupe 3LT',
                                        'Corvette Stingray Convertible 1LT',
                                        'Corvette Stingray Convertible 2LT',
                                        'Corvette Stingray Convertible 3LT'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Exterior Color</Accordion.Header>
                            <Accordion.Body>
                                <>
                                    <Button variant="outline-primary">Primary</Button>{' '}
                                    <Button variant="outline-secondary">Secondary</Button>{' '}
                                    <Button variant="outline-success">Success</Button>{' '}
                                    <Button variant="outline-warning">Warning</Button>{' '}
                                    <Button variant="outline-danger">Danger</Button>{' '}
                                    <Button variant="outline-info">Info</Button>{' '}
                                    <Button variant="outline-light">Light</Button>{' '}
                                    <Button variant="outline-dark">Dark</Button>
                                </>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Interior Color</Accordion.Header>
                            <Accordion.Body>
                                <>
                                    <Button variant="primary">Primary</Button>{' '}
                                    <Button variant="secondary">Secondary</Button>{' '}
                                    <Button variant="success">Success</Button>{' '}
                                    <Button variant="warning">Warning</Button>{' '}
                                    <Button variant="danger">Danger</Button>{' '}
                                    <Button variant="info">Info</Button>{' '}
                                    <Button variant="light">Light</Button>{' '}
                                    <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
                                </>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Z51/MAG/LIFT</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Magnetic Selective Ride Control Suspension',
                                        'Z51 Performance Suspension with Magnetic Ride Control',
                                        'Front Lift Adjustable Height with Memory',
                                        'Z51 Performance Package'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Additional Options</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Personalized Plaque w/Name and VIN',
                                        'Customer Selectable VIN',
                                        'Custom Interior Trim and Seat Combination Override',
                                        'Corvette Museum Delivery'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Brakes</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Yellow Painted Brake Calipers',
                                        'Bright Red Painted Brake Calipers',
                                        'Edge Red Painted Brake Calipers'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Convertible Top</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Carbon Flash Painted Nacelles and Roof',
                                        'Carbon Flash Painted Nacelles and Body-Color Roof'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="8">
                            <Accordion.Header>Exhaust Systems</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Black Exhaust Tips',
                                        'Performance Exhaust'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="9">
                            <Accordion.Header>Exterior Appearance</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Shadow Gray Exterior Accents',
                                        'Body Color Exterior Accents',
                                        'Chrome Exterior Badge Package',
                                        'Carbon Flash Metallic Painted Outside Mirrors',
                                        'Engine Appearance Package', 'Front License Plate Bracket'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="10">
                            <Accordion.Header>Roof Panels</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Carbon Fiber Dual Roof Package',
                                        'Body Color Dual Roof Package',
                                        'Visible Carbon Fiber Removable Roof Panel with Body Color Surround',
                                        'Transparent Removable Roof Panel'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="11">
                            <Accordion.Header>Seats</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Competition Sport Bucket Seats',
                                        'Competition Sport Bucket Seats',
                                        'Competition Sport Bucket Seats',
                                        'GT2 Bucket Seats'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="12">
                            <Accordion.Header>Special Edition</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['70th Anniversary Special Edition'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                // type={type}
                                                id={`-${type}`}
                                                label={` ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="13">
                            <Accordion.Header>Stripe Packages</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Orange Full Length Dual Racing Stripe Package',
                                        'Red Full Length Dual Racing Stripe Package',
                                        'Yellow Full Length Dual Racing Stripe Package',
                                        '70th Anniversary Satin Matrix Gray Full Length Dual Racing Stripe Package',
                                        'Carbon Flash Metallic Full Length Dual Racing Stripe Package',
                                        '70th Anniversary Satin Black Metallic Full Length Dual Racing Stripe Package',
                                        'Sterling Silver Full Length Dual Racing Stripe Package',
                                        'Blue Full Length Dual Racing Stripe Package',
                                        'Midnight Gray Full Length Dual Racing Stripe Package',
                                        'Carbon Flash/Edge Yellow Stinger Stripe',
                                        'Carbon Flash/Midnight Silver Stinger Stripe',
                                        'Carbon Flash/Edge Red Stinger Stripe'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="14">
                            <Accordion.Header>Wheels</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    {['Silver Painted Aluminum Wheels with Machined Edge',
                                        'Carbon Flash Painted Aluminum Wheels with Machined Edge',
                                        '5-Trident Spoke Machined Face Sterling Silver Painted Aluminum Wheels',
                                        '5-Trident Spoke Machined Face Spectra Gray Painted Aluminum Wheels',
                                        '20-spoke Bright Machined-faced Forged Aluminum Wheels',
                                        '20-Spoke Carbon Flash-Painted Forged Aluminum with Red Stripe Wheels',
                                        '20-Spoke Gloss Black Forged Aluminum Wheels'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    // type={type}
                                                    id={`-${type}`}
                                                    label={` ${type}`}
                                                />
                                            </div>
                                        ))}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>



                    </Accordion>




                </Col>
                <Col md={5}></Col>
            </Row>

        </Container>
    );
}

export default Order;