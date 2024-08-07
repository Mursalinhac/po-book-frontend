import {Table} from "react-bootstrap";
import React from "react";
import InstallationPreview from "./InstallationPreview";
import CustomerInfoPrint from "./CustomerInfoPrint";
import Order_Agreement from "./Order_Agreement";
import Terms_Conditions from "./Terms_Conditions";
import TradeInfoPrint from "./TradeInfoPrint";
import PricePreview from "./PricePreview";

function PrintPreview({order}) {
    return (
        <div className="print-text">
            <div className="page1" style={{pageBreakAfter: "always", display:"flow"}}>
                <div className="po-book-form"><CustomerInfoPrint customerInfo={order.customerInfo}/></div>
                <Order_Agreement/>
                {/*<TradeInfoPrint/>*/}
                <Table style={{
                    // padding: "20px",
                    position: 'relative',
                    pageBreakInside: "auto",
                    width: '66%'
                }}>
                    <InstallationPreview options={order.factoryInstalled}/>
                    <InstallationPreview options={order.dealerInstalled}/>
                    <PricePreview price={order.price}/>
                </Table>
            </div>

            <div className="page2">
                <div><Terms_Conditions/></div>
            </div>
        </div>
    );
}

export default PrintPreview;
