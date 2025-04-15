import React from "react";
import '../css/print.css';
import CustomerInfoPrint from "./CustomerInfoPrint";
import PricePreview from "./PricePreview";
import Terms_Conditions from "./Terms_Conditions";
import cioccaLogo from "../images/PO book images/top.png"; // Adjust path if needed

function PrintPreview({order}) {
    // Helper function to render options from a category
    const renderCategoryOptions = (category) => {
        if (!category) return null;
        
        // Get all selected options from this category
        const selectedOptions = [];
        
        // Iterate through each sub-category in this category
        Object.entries(category).forEach(([subCategoryKey, subCategory]) => {
            // Skip if subCategory is null or undefined
            if (!subCategory) return;
            
            // Check if this is a multi-select option with a "selected" object
            if (subCategory.selected && typeof subCategory.selected === 'object') {
                // For multi-select options, selected options are stored in an object
                Object.entries(subCategory.selected).forEach(([, option]) => {
                    if (option && option.title && option.code) {
                        selectedOptions.push(
                            <tr key={`${subCategoryKey}-${option.code}`}>
                                <td>{option.code || ""}</td>
                                <td>{option.title}</td>
                                <td className="price-column">${parseFloat(option.price || 0).toFixed(2)}</td>
                            </tr>
                        );
                    }
                });
            } 
            // Check if this is a single-select option that's been selected
            else if (subCategory.selected && subCategory.selected.title) {
                const option = subCategory.selected;
                selectedOptions.push(
                    <tr key={`${subCategoryKey}-${option.code || option.title}`}>
                        <td>{option.code || ""}</td>
                        <td>{option.title}</td>
                        <td className="price-column">${parseFloat(option.price || 0).toFixed(2)}</td>
                    </tr>
                );
            }
            // For legacy format with options array
            else if (subCategory.options && Array.isArray(subCategory.options)) {
                // For each option in the subcategory
                subCategory.options.forEach(option => {
                    // Only include options that are selected
                    if (option && option.title && option.selected) {
                        selectedOptions.push(
                            <tr key={`${subCategoryKey}-${option.code || option.title}`}>
                                <td>{option.code || ""}</td>
                                <td>{option.title}</td>
                                <td className="price-column">${parseFloat(option.price || 0).toFixed(2)}</td>
                            </tr>
                        );
                    }
                });
            }
        });
        
        return selectedOptions.length > 0 ? selectedOptions : null;
    };

    // Conditional rendering for category sections (only show if they have selected options)
    const factoryOptions = renderCategoryOptions(order.factoryInstalled);
    const dealerOptions = renderCategoryOptions(order.dealerInstalled);

    return (
        <div className="print-container">
            {/* Header with Ciocca Logo */}
            <div className="print-header">
                <img src={cioccaLogo} alt="Ciocca Corvette" className="company-logo" />
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
                            <div>{order.customerInfo?.fullName || "N/A"}</div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Address:</div>
                            <div>{order.customerInfo?.address || "N/A"}</div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">City/State/Zip:</div>
                            <div>
                                {order.customerInfo?.city || "N/A"}, {order.customerInfo?.state || ""} {order.customerInfo?.zipCode || ""}
                            </div>
                        </div>
                        <div className="customer-info-row">
                            <div className="customer-info-label">Phone:</div>
                            <div>{order.customerInfo?.phone || "N/A"}</div>
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
                            <div>{order.customerInfo?.model || "Corvette"}</div>
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
                            <td className="price-column">${parseFloat(order.price?.basePrice || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Additional Equipment (options)</td>
                            <td className="price-column">${parseFloat(order.price?.additionalEquipment || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Destination Freight Charge</td>
                            <td className="price-column">${parseFloat(order.price?.freightCharge || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Floor Plan</td>
                            <td className="price-column">${parseFloat(order.price?.floorPlan || 0).toFixed(2)}</td>
                        </tr>
                        
                        {/* Factory Installed Options - only show if there are selected options */}
                        {factoryOptions && (
                            <>
                                <tr>
                                    <th colSpan="3" className="section-header" style={{textAlign: "center"}}>Factory Installed Options</th>
                                </tr>
                                {factoryOptions}
                            </>
                        )}
                        
                        {/* Dealer Installed Options - only show if there are selected options */}
                        {dealerOptions && (
                            <>
                                <tr>
                                    <th colSpan="3" className="section-header" style={{textAlign: "center"}}>Dealer Installed Options</th>
                                </tr>
                                {dealerOptions}
                            </>
                        )}
                        
                        {/* Price Calculations Section */}
                        <tr>
                            <td colSpan="2" style={{textAlign: "right", fontWeight: "bold"}}>MSRP Total:</td>
                            <td className="price-column">${parseFloat(order.price?.msrpTotal || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{textAlign: "right", fontWeight: "bold"}}>Dealer Added Options:</td>
                            <td className="price-column">${parseFloat(order.price?.dealerAddedOptions || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{textAlign: "right", fontWeight: "bold"}}>Adjusted Vehicle Price:</td>
                            <td className="price-column">${parseFloat(order.price?.adjustedVehiclePrice || 0).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            {/* Governing Law Section */}
            <div className="print-section">
                <div className="section-header">Legal Information</div>
                <div className="governing-law">
                    <strong>GOVERNING LAW</strong> - This Agreement shall be constructed under and in accordance with the laws of the State of New Jersey without regard to conflict of law principles.
                </div>
                
                {/* Vehicle Sale Disclaimer */}
                <div className="governing-law">
                    <strong>IF A NEW VEHICLE SALE OR LEASE</strong> - The only warranties applying to this vehicle are those offered by the manufacturer. Dealer sells/leases this vehicle "as is" and hereby disclaims all warranties express or implied, including any implied warranties or merchantability and fitness for a particular purpose.
                </div>
            </div>
            
            {/* Total Price Section */}
            <div className="print-section">
                <div className="section-header">Price Summary</div>
                <table className="print-table">
                    <tbody>
                        <tr>
                            <td>TOTAL PRICE OF VEHICLE</td>
                            <td className="price-column">${parseFloat(order.price?.total || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Less Trade-In Allowance</td>
                            <td className="price-column">${parseFloat(order.price?.tradeInAllowance || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Dealer Documentary Fee</td>
                            <td className="price-column">${parseFloat(order.price?.documentaryFee || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td><strong>TOTAL TAXABLE AMOUNT</strong></td>
                            <td className="price-column">${parseFloat(order.price?.taxableAmount || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>State Sales Tax</td>
                            <td className="price-column">${parseFloat(order.price?.salesTax || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td><strong>TOTAL</strong></td>
                            <td className="price-column total-price">${parseFloat(order.price?.grandTotal || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Less Deposit</td>
                            <td className="price-column">${parseFloat(order.price?.deposit || 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td><strong>BALANCE DUE ON DELIVERY</strong></td>
                            <td className="price-column">${parseFloat(order.price?.balanceDue || 0).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            {/* Buyer's Order Notice */}
            <div className="print-section">
                <div className="po-buyer-notice">
                    Buyers Order must be signed and the additional deposit here must be received within 5 days of the date shown above by Ciocca in order to maintain customer's position on C8 Corvette Stingray placement list.
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
}

export default PrintPreview;
