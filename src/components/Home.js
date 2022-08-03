import { Container, Navbar, Nav, NavDropdown, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


import stingray from "../images/stingray.jpeg"
import Z06 from "../images/Z06.jpg"
import ERAY from "../images/eray.jpeg"
import ZR1 from "../images/zr1.jpg"


function Home() {
    return (
        <Container>
            <br></br>
            <Row>
                <Col md={6} xs={12}>
                    <Card>
                        <a className="card card-demo text-dark">
                            <span className="card-img shadow-lg rounded-bottom-4 rounded-top-3 overflow-hidden">
                                <Link to="/orders/new/stingray"><Card.Img variant="top" src={stingray} /></Link>
                            </span>
                            <Card.Body>
                                <Card.Title className="white-text">Stingray</Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
                <Col md={6} xs={12}>
                    <Card >
                        <a className="card card-demo text-dark">
                            <span className="card-img shadow-lg rounded-bottom-4 rounded-top-3 overflow-hidden">
                            <Link to="/orders/new/z06"><Card.Img variant="top" src={Z06} /></Link>
                            </span>
                            <Card.Body>
                                <Card.Title className="white-text">Z06</Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
                <Col md={6} xs={12}>
                    <Card >
                        <a className="card card-demo text-dark">
                            <span className="card-img shadow-lg rounded-bottom-4 rounded-top-3 overflow-hidden">
                            <Link to="/orders/new/eray"><Card.Img variant="top" src={ERAY} /></Link>
                            </span>
                            <Card.Body>
                                <Card.Title className="white-text">ERAY</Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
                <Col md={6} xs={12}>
                    <Card >
                        <a className="card card-demo text-dark">
                            <span className="card-img shadow-lg rounded-bottom-4 rounded-top-3 overflow-hidden">
                            <Link to="/orders/new/zr1"><Card.Img variant="top" src={ZR1} /></Link>
                            </span>
                            <Card.Body>
                                <Card.Title className="white-text">ZR1</Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
            </Row>

        </Container>

    );

}
export default Home;