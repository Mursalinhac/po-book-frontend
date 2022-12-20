import {Table} from "react-bootstrap";
import React from "react";
import InstallationPreview from "./InstallationPreview";
import CustomerInfoPrint from "./CustomerInfoPrint";

function PrintPreview({order}) {
    return (
        <div className="print-text">
            <h2 style={{color: "green"}}>Final Order {order.model}</h2>
            <div className="po-book-form"><CustomerInfoPrint customerInfo={order.customerInfo}/></div>
            <Table>
                <InstallationPreview options={order.factoryInstalled}/>
                <InstallationPreview options={order.dealerInstalled}/>

            </Table>
        </div>
    );

}

export default PrintPreview;