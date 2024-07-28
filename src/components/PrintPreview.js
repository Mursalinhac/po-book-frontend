import {Table} from "react-bootstrap";
import React from "react";
import InstallationPreview from "./InstallationPreview";
import CustomerInfoPrint from "./CustomerInfoPrint";
import Order_Agreement from "./Order_Agreement";
import Terms_Conditions from "./Terms_Conditions";
import TradeInfoPrint from "./TradeInfoPrint";

function PrintPreview({order}) {
    return (
        <div className="print-text">
            <div className="po-book-form"><CustomerInfoPrint customerInfo={order.customerInfo}/></div>
            <Order_Agreement/>
            <Table style={{
                padding:"20px",
                position: 'relative',
                pageBreakInside: "avoid",
                width: '66.66%'
            }}>
                <InstallationPreview options={order.factoryInstalled}/>
                <InstallationPreview options={order.dealerInstalled}/>
            </Table>
            <div><TradeInfoPrint/></div>
            <div><Terms_Conditions/></div>
        </div>
    );

}

export default PrintPreview;