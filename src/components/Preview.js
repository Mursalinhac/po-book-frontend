import CustomerInfoPreview from "./CustomerInfoPreview";
import {Container, Table} from "react-bootstrap";
import InstallationPreview from "./InstallationPreview";

function Preview({order}) {
    return (
        <Container>
            <div className="po-book-form">
                <CustomerInfoPreview customerInfo={order.customerInfo}/>
                <hr/>
                <Table className="po-book-table" size="sm">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Code</th>
                        <th>Name</th>
                        <th className="price-cell">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <InstallationPreview options={order.factoryInstalled} title="Factory Installed"/>
                    <InstallationPreview options={order.dealerInstalled} title="Dealer Installed"/>
                    </tbody>
                </Table>

                <pre>{JSON.stringify(order, null, 2)}</pre>
            </div>
        </Container>
    );
}

export default Preview;