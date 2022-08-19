import {useState, useEffect} from "react";
import {Col, Container, Row, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Axios from "axios";

import OrderOption from "./OrderOption";

function Order() {
    let {model} = useParams();
    const [priceList, setPriceList] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [order, setOrder] = useState()
    useEffect(() => {
        const getData = async () => {
            const {data} = await Axios.get(`http://localhost:3001/pricelist/${model}`)
            console.log(data)
            setPriceList(data)
            setIsLoading(false)
            let options = {}
            data.data.forEach((option) => {
                if (option.selectType === "multi") {
                    options[option.key] = [];
                } else {
                    options[option.key] = null;
                }
            })
            setOrder(options)
        }

        if (isLoading) {
            getData();
        }
    })
    return isLoading ? <h1>Loading ...</h1> : (
        <Container fluid>
            <Row>
                <Col md={7}>

                    <div className="po-book-form">
                        <h4 className="justify-content-center">Customer Info</h4>
                        <Form>
                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="First Name"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Last Name"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor"/>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                            </Row>
                        </Form>
                    </div>
                    <br></br>

                    {priceList.data.map(orderOption => <OrderOption orderOption={orderOption} onChange={setOrder}/>)}

                </Col>
                <Col md={5}>
                    <pre>{JSON.stringify(order, null, 2)}</pre>
                </Col>
            </Row>
        </Container>);
}

export default Order;