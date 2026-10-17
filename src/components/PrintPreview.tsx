import React from "react";
import Image from "next/image";
import '../css/print.css';
import Terms_Conditions from "./Terms_Conditions";
import { PrintPreviewProps, FactoryOptionGroup, DealerOptionGroup } from '../types';
import { selectedOptions } from '../lib/order';
// Using public path for Next.js
const cioccaLogo = "/images/PO book images/top.png";

const PrintPreview: React.FC<PrintPreviewProps> = ({ order }) => {
    // Helper function to render options from a category
    const renderCategoryOptions = (category: Record<string, FactoryOptionGroup | DealerOptionGroup> | undefined) => {
        if (!category) return null;

        // Get all selected options from this category
        const selectedOptionsRows: React.JSX.Element[] = [];
        
        // Iterate through each sub-category in this category
        Object.entries(category).forEach(([subCategoryKey, subCategory]: [string, FactoryOptionGroup | DealerOptionGroup]) => {
            // Skip if subCategory is null or undefined
            if (!subCategory) return;
            
            selectedOptions(subCategory).forEach((option, index) => {
                selectedOptionsRows.push(
                    <tr key={`${subCategoryKey}-${option.id || index}`}>
                        <td>{option.code || ''}</td>
                        <td>{option.title}</td>
                        <td className="price-column">${Number(option.price || 0).toFixed(2)}</td>
                    </tr>
                );
            });
        });
        
        return selectedOptionsRows.length > 0 ? selectedOptionsRows : null;
    };

    // Conditional rendering for category sections (only show if they have selected options)
    const factoryOptions = renderCategoryOptions(order.factoryInstalled);
    const dealerOptions = renderCategoryOptions(order.dealerInstalled);
    const equipmentTotal = (groups: Record<string, FactoryOptionGroup | DealerOptionGroup> | undefined) =>
        Object.values(groups || {}).flatMap(selectedOptions).reduce((sum, option) => sum + Number(option.price || 0), 0);
    const dealerTotal = equipmentTotal(order.dealerInstalled);
    const basePrice = order.factoryInstalled?.model ? equipmentTotal({ model: order.factoryInstalled.model }) : 0;
    const factoryEquipment = equipmentTotal(order.factoryInstalled) - basePrice;

    return (
        <div className="print-container">
            {/* Header with Ciocca Logo */}
            <div className="print-header">
                <Image
                    src={cioccaLogo}
                    alt="Ciocca Corvette"
                    className="company-logo"
                    width={200}
                    height={80}
                    style={{ aspectRatio: '200/80' }}
                />
                <div className="address">
                    430 N. Albany Ave, Atlantic City, NJ 08401<br />
                    609-344-2100 / 609-345-2100
                </div>
            </div>
            
            {/* Vehicle Order Form */}
            <div className="print-section">
                <div className="section-header">Retail Vehicle Order</div>
                
                {/* Customer Information Section */}
                <div className="customer-info">
                    <div className="customer-info-section">
                        <h3>Customer Information</h3>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Name:</div>
                            <div>{order.customerInfo?.firstName || order.customerInfo?.fullName || "N/A"}</div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Address:</div>
                            <div>{[order.customerInfo?.address1, order.customerInfo?.address2].filter(Boolean).join(", ") || order.customerInfo?.address || "N/A"}</div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">City/State/Zip:</div>
                            <div>
                                {order.customerInfo?.city || "N/A"}, {order.customerInfo?.state || ""} {order.customerInfo?.zipcode || order.customerInfo?.zipCode || ""}
                            </div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Phone:</div>
                            <div>{order.customerInfo?.number || order.customerInfo?.phone || "N/A"}</div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Email:</div>
                            <div>{order.customerInfo?.email || "N/A"}</div>
                        </div>
                    </div>
                    
                    <div className="customer-info-section">
                        <h3>Vehicle Information</h3>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Year:</div>
                            <div>{order.customerInfo?.year || "N/A"}</div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Make:</div>
                            <div>{order.customerInfo?.make || "Chevrolet"}</div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Model:</div>
                            <div>{order.customerInfo?.model || order.model || "Corvette"}</div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">VIN:</div>
                            <div>{order.customerInfo?.vin || "TBD"}</div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Order Date:</div>
                            <div>{order.customerInfo?.orderDate || new Date().toLocaleDateString()}</div>
                        </div>
                    </div>
                </div>
                
                {/* Vehicle Details and Pricing Section */}
                <table className="print-table">
                    <thead>
                        <tr>
                            <th style={{width: "10%"}}>Code</th>
                            <th>Description</th>
                            <th className="price-column" style={{width: "15%"}}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Base Price of Unit</td>
                            <td className="price-column">${parseFloat(String(basePrice)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Additional Equipment (options)</td>
                            <td className="price-column">${parseFloat(String(factoryEquipment)).toFixed(2)}</td>
                        </tr>
                        {/* Factory Installed Options - only show if there are selected options */}
                        {factoryOptions && (
                            <>
                                <tr>
                                    <th colSpan={3} className="section-header" style={{textAlign: "center"}}>Factory Installed Options</th>
                                </tr>
                                {factoryOptions}
                            </>
                        )}
                        
                        {/* Dealer Installed Options - only show if there are selected options */}
                        {dealerOptions && (
                            <>
                                <tr>
                                    <th colSpan={3} className="section-header" style={{textAlign: "center"}}>Dealer Installed Options</th>
                                </tr>
                                {dealerOptions}
                            </>
                        )}
                        
                        {/* Price Calculations Section */}
                        <tr>
                            <td colSpan={2} style={{textAlign: "right", fontWeight: "bold"}}>Factory subtotal:</td>
                            <td className="price-column">${parseFloat(String(equipmentTotal(order.factoryInstalled))).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{textAlign: "right", fontWeight: "bold"}}>Dealer Added Options:</td>
                            <td className="price-column">${parseFloat(String(dealerTotal)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{textAlign: "right", fontWeight: "bold"}}>Vehicle subtotal:</td>
                            <td className="price-column">${parseFloat(String(order.price?.subTotal || 0)).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            {order.tradeInfo && (order.tradeInfo.make || order.tradeInfo.vin) && (
                <section className="print-section">
                    <h3 className="section-header">Trade-in information</h3>
                    <p>{[order.tradeInfo.year, order.tradeInfo.make, order.tradeInfo.model].filter(Boolean).join(' ')}</p>
                    <p>VIN: {order.tradeInfo.vin || 'Not entered'}</p>
                    <p>Trade value: ${Number(order.tradeInfo.tradeValue || 0).toFixed(2)}</p>
                    <p>Balance owed: ${Number(order.tradeInfo.balanceOwed || 0).toFixed(2)}</p>
                    <p>Trade-in amounts are recorded for review and are not applied to the vehicle totals.</p>
                </section>
            )}

            {/* Governing Law Section */}
            <div className="print-section">
                <div className="section-header">Legal Information</div>
                <div className="governing-law">
                    <strong>GOVERNING LAW</strong> - This Agreement shall be constructed under and in accordance with the laws of the State of New Jersey without regard to conflict of law principles.
                </div>
                
                {/* Vehicle Sale Disclaimer */}
                <div className="governing-law">
                    <strong>IF A NEW VEHICLE SALE OR LEASE</strong> - The only warranties applying to this vehicle are those offered by the manufacturer. Dealer sells/leases this vehicle &quot;as is&quot; and hereby disclaims all warranties express or implied, including any implied warranties or merchantability and fitness for a particular purpose.
                </div>
            </div>
            
            {/* Total Price Section */}
            <div className="print-section">
                <div className="section-header">Price Summary</div>
                <table className="print-table">
                    <tbody>
                        <tr>
                            <td>Vehicle subtotal</td>
                            <td className="price-column">${parseFloat(String(order.price?.subTotal || 0)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Less Trade-In Allowance</td>
                            <td className="price-column">${parseFloat(String(order.price?.tradeInValue || 0)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Dealer Documentary Fee</td>
                            <td className="price-column">${parseFloat(String(order.price?.dealerDocumentaryFees || 0)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td><strong>TOTAL TAXABLE AMOUNT</strong></td>
                            <td className="price-column">${parseFloat(String(order.price?.subTotal || 0)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>State Sales Tax</td>
                            <td className="price-column">${parseFloat(String(order.price?.tax || 0)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td><strong>TOTAL</strong></td>
                            <td className="price-column total-price">${parseFloat(String(order.price?.total || 0)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Less Deposit</td>
                            <td className="price-column">${parseFloat(String(order.price?.deposit || 0)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td><strong>BALANCE DUE ON DELIVERY</strong></td>
                            <td className="price-column">${parseFloat(String((order.price?.total || 0) - (order.price?.deposit || 0))).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            {/* Buyer's Order Notice */}
            <div className="print-section">
                <div className="po-buyer-notice">
                    Buyers Order must be signed and the additional deposit here must be received within 5 days of the date shown above by Ciocca in order to maintain customer&apos;s position on C8 Corvette Stingray placement list.
                </div>
            </div>
            
            {/* Signature Section */}
            <div className="signature-section">
                <div className="po-notice">
                    Customer agrees that this Order includes all the terms and conditions of a sale. THIS ORDER SHALL NOT BECOME BINDING UNTIL ACCEPTED BY DEALER OR HIS AUTHORIZED REPRESENTATIVE. I am 18 years of age or older and of full legal capacity to enter into this contract.
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <div className="signature-line">Customer Signature</div>
                    </div>
                    <div>
                        <div className="signature-line">Date</div>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
                    <div>
                        <div className="signature-line">Dealer Representative</div>
                    </div>
                    <div>
                        <div className="signature-line">Date</div>
                    </div>
                </div>
            </div>
            
            <div className="po-notice">
                <strong>THIS ORDER NOT SUBJECT TO CANCELLATION — DEPOSIT NON-REFUNDABLE</strong>
            </div>
            
            <div className="page-break"></div>
            
            {/* Terms and Conditions Section */}
            <div className="print-section page-2">
                <div className="section-header">ATTACHMENT A - ADDITIONAL TERMS & CONDITIONS</div>
                <div className="terms-conditions">
                    <Terms_Conditions />
                </div>
            </div>
            
            <div className="page-number"></div>
        </div>
    );
};

export default PrintPreview;
