import React, {useRef} from "react";
import {Badge, Button, Table} from "react-bootstrap";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
    render() {
        return (
            <div>
                <h2 style={{color: "green"}}>Final Order {this.props.order.model}</h2>
                <Table style={{color: "black"}}>
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
            </div>
        );
    }
}

export default function PrintComponent({order}) {
    let componentRef = useRef();

    return (
        <>
            <div>
                {/* button to trigger printing of target component */}
                <ReactToPrint
                    trigger={() => <Button>Print this out!</Button>}
                    content={() => componentRef}
                />

                <div style={{display: "none"}}>
                    <ComponentToPrint ref={(el) => (componentRef = el)} order={order}/>
                </div>
            </div>
        </>
    );
}
