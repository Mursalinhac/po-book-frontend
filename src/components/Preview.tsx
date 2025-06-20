import React from 'react';
import dynamic from "next/dynamic";
import CustomerInfoPreview from "./CustomerInfoPreview";
import InstallationPreview from "./InstallationPreview";
import PricePreview from "./PricePreview";
import PrintComponent from "./PrintComponent";
import { PreviewProps } from '../types';

// Dynamic import for PrintPreview (heavy component, only needed for print preview)
const PrintPreview = dynamic(() => import("./PrintPreview"), {
  loading: () => <div className="flex items-center justify-center p-8 bg-white"><div className="text-gray-600">Loading Print Preview...</div></div>
});

const Preview: React.FC<PreviewProps> = ({ order, setOrder }) => {
    return (
        <div className="container mx-auto px-4">
            <div className="po-book-form">
                <CustomerInfoPreview customerInfo={order.customerInfo}/>
                <div className="horizontal-rule"></div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Factory Installed</h3>
                        <table className="po-book-table w-full text-sm">
                            <thead>
                                <tr>
                                    <th className="text-left"></th>
                                    <th className="text-left">Code</th>
                                    <th className="text-left">Name</th>
                                    <th className="price-cell">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <InstallationPreview options={order.factoryInstalled} title=""/>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Dealer Installed</h3>
                        <table className="po-book-table w-full text-sm">
                            <thead>
                                <tr>
                                    <th className="text-left"></th>
                                    <th className="text-left">Code</th>
                                    <th className="text-left">Name</th>
                                    <th className="price-cell">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <InstallationPreview options={order.dealerInstalled} title=""/>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Price Summary</h3>
                        <table className="po-book-table w-full text-sm">
                            <tbody>
                                <PricePreview price={order.price} setOrder={setOrder}/>
                            </tbody>
                        </table>
                    </div>
                </div>

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