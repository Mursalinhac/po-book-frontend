import { Form, Table, Badge, Button, FloatingLabel } from "react-bootstrap";

function CustomerLists() {
    return (<div className="po-book-form">
        <Form>
            <FloatingLabel controlId="floatingInput" label="Search">
                <Form.Control className="bg-dark white-text w-50 " placeholder="First Name"></Form.Control>
            </FloatingLabel>
            <Table className=" po-book-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>VIN</th>
                        <th>Model</th>
                        <th>Primary Color</th>
                        <th>Order Number</th>
                        <th>Status</th>
                        <th>Options</th>
                        <th>TPW</th>
                        <th>Edit,Delete & Save</th>
                    </tr>
                    <tr className="horizontal-rule"></tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Mursalin Shaikh</td>
                        <td>P5119808</td>
                        <td>Z06 Coupe</td>

                        <td><Badge bg="warning">New</Badge></td>
                        <td>BZNHT8</td>
                        <td>1000</td>
                        <td>J6E,NGA, 36S,3M9, SOA</td>
                        <td>11/28/2022</td>
                        <td><Button className="po-book-button" size="sm">EDIT</Button>{' '}<Button
                            className="po-book-button"
                            size="sm">DELETE</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>Zubair Shaikh</td>
                        <td>P5119808</td>
                        <td>Stingray Coupe</td>
                        <td><Badge bg="primary">New</Badge></td>
                        <td>CDJKVC</td>
                        <td>1000</td>
                        <td>J6E,NGA, 36S,3M9, SOA</td>
                        <td>12/19/2022</td>
                        <td><Button className="po-book-button" size="sm">EDIT</Button>{' '}<Button
                            className="po-book-button"
                            size="sm">DELETE</Button>{' '}
                        </td>
                    </tr><tr>
                        <td>CAMPA</td>
                        <td>P5501830</td>
                        <td>Stingray Coupe</td>
                        <td><Badge bg="danger">New</Badge></td>
                        <td>CDJGZD</td>
                        <td>1000</td>                        
                        <td>J6E,NGA, 36S,3M9, SOA</td>
                        <td>12/5/2022</td>
                        <td><Button className="po-book-button" size="sm">EDIT</Button>{' '}<Button
                            className="po-book-button"
                            size="sm">DELETE</Button>{' '}
                        </td>
                    </tr><tr>
                        <td>Crema</td>
                        <td>P5119692</td>
                        <td>Stingray Convertbile</td>
                        <td><Badge bg="dark">New</Badge></td>
                        <td>CDJRCG</td>
                        <td>1000</td>
                        <td>J6E,NGA, 36S,3M9, SOA</td>
                        <td>12/5/2022</td>
                        <td><Button className="po-book-button" size="sm">EDIT</Button>{' '}<Button
                            className="po-book-button"
                            size="sm">DELETE</Button>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Form></div>);
}

export default CustomerLists;