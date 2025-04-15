import React from "react";
import {Col, Row, Form, Card} from "react-bootstrap";
import Picture1 from "../images/PO book images/Picture1.png";
import Picture2 from "../images/PO book images/Picture2.png";
import Picture3 from "../images/PO book images/Picture3.png";
import Picture4 from "../images/PO book images/Picture4.png";
import Picture5 from "../images/PO book images/Picture5.png";
import Picture6 from "../images/PO book images/Picture6.png";
import Top from "../images/PO book images/top.png";
import cioccaLogo from "../images/PO book images/top.png";

function CustomerInfoPrint({customerInfo}) {
    return (
        <div className="customer-info-section">
            {/* Vehicle Type Checkboxes */}
            <div className="vehicle-type">
                <div className="checkbox-row">
                    <div className="checkbox-container">
                        <div className={`checkbox ${customerInfo?.vehicleType === 'New' ? 'checked' : ''}`}></div>
                        <span>New</span>
                    </div>
                    <div className="checkbox-container">
                        <div className={`checkbox ${customerInfo?.vehicleType === 'Used' ? 'checked' : ''}`}></div>
                        <span>Used</span>
                    </div>
                    <div className="checkbox-container">
                        <div className={`checkbox ${customerInfo?.vehicleType === 'Demo' ? 'checked' : ''}`}></div>
                        <span>Demo</span>
                    </div>
                    <div className="checkbox-container">
                        <div className={`checkbox ${customerInfo?.vehicleType === 'Program/Fleet Rental' ? 'checked' : ''}`}></div>
                        <span>Program/Fleet Rental</span>
                    </div>
                </div>
            </div>
            
            {/* Customer and Vehicle Information Table */}
            <table className="po-table customer-table">
                <tbody>
                    <tr>
                        <td width="15%">Customer</td>
                        <td width="35%" className="info-field">{customerInfo?.firstName} {customerInfo?.lastName}</td>
                        <td width="15%">Stock #</td>
                        <td width="35%" className="info-field">{customerInfo?.stock}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td className="info-field">{customerInfo?.address1}</td>
                        <td>City</td>
                        <td className="info-field">{customerInfo?.city}</td>
                    </tr>
                    <tr>
                        <td>Home Phone</td>
                        <td className="info-field">{customerInfo?.homePhone}</td>
                        <td>State</td>
                        <td className="info-field">{customerInfo?.state}</td>
                    </tr>
                    <tr>
                        <td>Please Enter My Order For One:</td>
                        <td className="info-field"></td>
                        <td>Mobile Phone</td>
                        <td className="info-field">{customerInfo?.number}</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td className="info-field">{customerInfo?.color}</td>
                        <td>Zip</td>
                        <td className="info-field">{customerInfo?.zipcode}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td className="info-field">{customerInfo?.year}</td>
                        <td>Email</td>
                        <td className="info-field">{customerInfo?.email}</td>
                    </tr>
                    <tr>
                        <td>Make</td>
                        <td className="info-field">Chevrolet</td>
                        <td>Model</td>
                        <td className="info-field">Corvette Z06</td>
                    </tr>
                    <tr>
                        <td>Trim</td>
                        <td className="info-field">{customerInfo?.trim || 'Natural Dipped'}</td>
                        <td>Body Type</td>
                        <td className="info-field">{customerInfo?.bodytype}</td>
                    </tr>
                    <tr>
                        <td>Top</td>
                        <td className="info-field">{customerInfo?.top}</td>
                        <td>VIN</td>
                        <td className="info-field">{customerInfo?.vin}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="info-field"></td>
                        <td>Miles</td>
                        <td className="info-field">{customerInfo?.miles}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CustomerInfoPrint;