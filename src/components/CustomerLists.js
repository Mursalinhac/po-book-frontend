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
                    <td>Steve Mac</td>
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
                </tr>
                <tr>
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
                </tr>
                <tr>
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
                <tr>
                    <td>Steve Mac</td>
                    <td>P5119808</td>
                    <td>Z06 Coupe</td>
                    <td><Badge bg="warning">New</Badge></td>
                    <td>BZNHT8</td>
                    <td>1000</td>
                    <td>J6E,NGA, 36S,3M9, SOA</td>
                    <td>11/28/2022</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>Jane Doe</td>
                    <td>V9876543</td>
                    <td>Sedan</td>
                    <td><Badge bg="success">Delivered</Badge></td>
                    <td>XYZ123</td>
                    <td>2000</td>
                    <td>AB1,CD2,EF3</td>
                    <td>12/15/2022</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>QWERTY12</td>
                    <td>SUV</td>
                    <td><Badge bg="info">In Progress</Badge></td>
                    <td>ABC456</td>
                    <td>3000</td>
                    <td>GH4,IJKL,OP5</td>
                    <td>01/10/2023</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>Emily Johnson</td>
                    <td>MNBVCXZ9</td>
                    <td>Hatchback</td>
                    <td><Badge bg="danger">Cancelled</Badge></td>
                    <td>DEF789</td>
                    <td>4000</td>
                    <td>QR6,STUV,WX7</td>
                    <td>02/25/2023</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>Michael Brown</td>
                    <td>ASDFG34</td>
                    <td>Convertible</td>
                    <td><Badge bg="warning">New</Badge></td>
                    <td>GHI012</td>
                    <td>5000</td>
                    <td>YZ8,ABCD,EFG9</td>
                    <td>03/15/2023</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>Sarah Davis</td>
                    <td>ZXCVB78</td>
                    <td>Sedan</td>
                    <td><Badge bg="success">Delivered</Badge></td>
                    <td>JKL345</td>
                    <td>6000</td>
                    <td>FGH1,IJKL,OP2</td>
                    <td>04/05/2023</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>David Wilson</td>
                    <td>POIUYT67</td>
                    <td>SUV</td>
                    <td><Badge bg="info">In Progress</Badge></td>
                    <td>LMN678</td>
                    <td>7000</td>
                    <td>QW3,ERTY,UIO4</td>
                    <td>05/20/2023</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>Amy Thompson</td>
                    <td>REWQ12</td>
                    <td>Hatchback</td>
                    <td><Badge bg="danger">Cancelled</Badge></td>
                    <td>POI789</td>
                    <td>8000</td>
                    <td>YUI5,ERTY,UIO6</td>
                    <td>06/10/2023</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>Robert Miller</td>
                    <td>MKJHGF1</td>
                    <td>Sedan</td>
                    <td><Badge bg="warning">New</Badge></td>
                    <td>QAZ234</td>
                    <td>9000</td>
                    <td>ASD7,FGH8,JKL9</td>
                    <td>07/15/2023</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>Olivia Wilson</td>
                    <td>HGFDSA3</td>
                    <td>SUV</td>
                    <td><Badge bg="success">Delivered</Badge></td>
                    <td>WSX098</td>
                    <td>10000</td>
                    <td>QAZ2,WSX3,EDC4</td>
                    <td>08/05/2023</td>
                    <td>
                        <Button className="po-book-button" size="sm">EDIT</Button>{' '}
                        <Button className="po-book-button" size="sm">DELETE</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>Ethan Turner</td>
                    <td>VCXZAS5</td>
                    <td>Convertible</td>
                    <td><Badge bg="info">In Progress</Badge></td>
                    <td>RFV456</td>
                    <td>11000</td>
                    <td>TYU5,DFG6,GHJ7</td>
                    <td>09/25/2023</td>
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