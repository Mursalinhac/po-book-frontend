import {Form, Table, Badge, Button, FloatingLabel} from "react-bootstrap";

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
                    <th>Order Number</th>
                    <th>GRDS</th>
                    <th>Status</th>
                    <th>TPW</th>
                    <th>VES</th>
                    <th>RDR</th>
                    <th>Fedex</th>
                    <th>DTM</th>
                    <th>OnStar(Date)</th>
                    <th>149</th>
                    <th>Rewards</th>
                    <th>Comments</th>
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
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                </tbody>
            </Table>
        </Form></div>);
}

export default CustomerLists;