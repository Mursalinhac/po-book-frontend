import React from 'react';
import CustomerInfoPreview from "./CustomerInfoPreview";
import InstallationPreview from "./InstallationPreview";
import PricePreview from "./PricePreview";
import PrintComponent from "./PrintComponent";
import PrintPreview from "./PrintPreview";
import { PreviewProps } from '../types';

const Preview: React.FC<PreviewProps> = ({ order, setOrder }) => {
    return (
        <div className="container mx-auto px-4">
            <div className="po-book-form">
                <CustomerInfoPreview customerInfo={order.customerInfo}/>
                <div className="horizontal-rule"></div>
                <table className="po-book-table w-full text-sm">
                    <thead>
                    <tr>
                        <th className="text-left"></th>
                        <th className="text-left">Code</th>
                        <th className="text-left">Name</th>
                        <th className="price-cell">Price</th>
                    </tr>
                    </thead>
                    {/*<tbody>*/}
                    <InstallationPreview options={order.factoryInstalled} title="Factory Installed"/>
                    <InstallationPreview options={order.dealerInstalled} title="Dealer Installed"/>
                    <PricePreview price={order.price} setOrder={setOrder}/>
                    {/*</tbody>*/}
                </table>

                {/*<pre>{JSON.stringify(order.price, null, 2)}</pre>*/}
            </div>
            <PrintComponent order={order}/>

            <div style={{
                height: "842px",
                width: "595px",
                backgroundColor:"white"}}>
                <PrintPreview order={order}/>
            </div>
        </div>
    );
};

export default Preview;