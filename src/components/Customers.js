import {Form, Table, Badge, Button, FloatingLabel} from "react-bootstrap";

function Customers() {
    return (<div className="po-book-form">
            <Form>
                <FloatingLabel controlId="floatingInput" label="Search">
                    <Form.Control className="bg-dark white-text w-50 " placeholder="First Name"></Form.Control>
                </FloatingLabel>
                <Table className=" po-book-table">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Exterior Color</th>
                        <th>Interior Color</th>
                        <th>Option</th>
                        <th>Edit,Delete & Save</th>
                    </tr>
                    <tr className="horizontal-rule"></tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>08/20/2022</td>
                        <td>Mursalin Shaikh</td>
                        <td>Z06 Coupe</td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td>J6E,NGA, 36S,3M9, SOA</td>
                        <td><Button className="po-book-button" size="sm">EDIT</Button>{' '}<Button
                            className="po-book-button"
                            size="sm">DELETE</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>08/20/2022</td>
                        <td>Mursalin Shaikh</td>
                        <td>Z06 Coupe</td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td>J6E,NGA, 36S,3M9, SOA</td>
                        <td><Button className="po-book-button" size="sm">EDIT</Button>{' '}<Button
                            className="po-book-button"
                            size="sm">DELETE</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>08/20/2022</td>
                        <td>Mursalin Shaikh</td>
                        <td>Z06 Coupe</td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td>J6E,NGA, 36S,3M9, SOA</td>
                        <td><Button className="po-book-button" size="sm">EDIT</Button>{' '}<Button
                            className="po-book-button"
                            size="sm">DELETE</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>08/20/2022</td>
                        <td>Mursalin Shaikh</td>
                        <td>Z06 Coupe</td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td>J6E,NGA, 36S,3M9, SOA</td>
                        <td><Button className="po-book-button" size="sm">EDIT</Button>{' '}<Button
                            className="po-book-button"
                            size="sm">DELETE</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>08/20/2022</td>
                        <td>Mursalin Shaikh</td>
                        <td>Z06 Coupe</td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td><Badge bg="warning">New</Badge></td>
                        <td>J6E,NGA, 36S,3M9, SOA</td>
                        <td><Button className="po-book-button" size="sm">EDIT</Button>{' '}<Button
                            className="po-book-button"
                            size="sm">DELETE</Button>{' '}
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Form></div>);
}

export default Customers;