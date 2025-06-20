import React from 'react';

const CustomerLists: React.FC = () => {
    return (<div className="po-book-form">
        <form>
            <div className="relative mb-4 w-1/2">
                <input
                    className="bg-dark white-text w-full px-3 py-2 border border-corvette-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                    placeholder="First Name"
                    id="search"
                />
                <label
                    htmlFor="search"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-corvette-dark px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                    Search
                </label>
            </div>
            <table className="po-book-table w-full">
                <thead>
                <tr>
                    <th className="text-left">Name</th>
                    <th className="text-left">VIN</th>
                    <th className="text-left">Model</th>
                    <th className="text-left">Primary Color</th>
                    <th className="text-left">Order Number</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">Options</th>
                    <th className="text-left">TPW</th>
                    <th className="text-left">Edit,Delete & Save</th>
                </tr>
                <tr className="horizontal-rule"></tr>
                </thead>
                <tbody>

                <tr>
                    <td>Steve Mac</td>
                    <td>P5119808</td>
                    <td>Z06 Coupe</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">New</span></td>
                    <td>BZNHT8</td>
                    <td>1000</td>
                    <td>J6E,NGA, 36S,3M9, SOA</td>
                    <td>11/28/2022</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Zubair Shaikh</td>
                    <td>P5119808</td>
                    <td>Stingray Coupe</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">New</span></td>
                    <td>CDJKVC</td>
                    <td>1000</td>
                    <td>J6E,NGA, 36S,3M9, SOA</td>
                    <td>12/19/2022</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>CAMPA</td>
                    <td>P5501830</td>
                    <td>Stingray Coupe</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">New</span></td>
                    <td>CDJGZD</td>
                    <td>1000</td>
                    <td>J6E,NGA, 36S,3M9, SOA</td>
                    <td>12/5/2022</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Crema</td>
                    <td>P5119692</td>
                    <td>Stingray Convertbile</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">New</span></td>
                    <td>CDJRCG</td>
                    <td>1000</td>
                    <td>J6E,NGA, 36S,3M9, SOA</td>
                    <td>12/5/2022</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Steve Mac</td>
                    <td>P5119808</td>
                    <td>Z06 Coupe</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">New</span></td>
                    <td>BZNHT8</td>
                    <td>1000</td>
                    <td>J6E,NGA, 36S,3M9, SOA</td>
                    <td>11/28/2022</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Jane Doe</td>
                    <td>V9876543</td>
                    <td>Sedan</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Delivered</span></td>
                    <td>XYZ123</td>
                    <td>2000</td>
                    <td>AB1,CD2,EF3</td>
                    <td>12/15/2022</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>QWERTY12</td>
                    <td>SUV</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">In Progress</span></td>
                    <td>ABC456</td>
                    <td>3000</td>
                    <td>GH4,IJKL,OP5</td>
                    <td>01/10/2023</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Emily Johnson</td>
                    <td>MNBVCXZ9</td>
                    <td>Hatchback</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Cancelled</span></td>
                    <td>DEF789</td>
                    <td>4000</td>
                    <td>QR6,STUV,WX7</td>
                    <td>02/25/2023</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Michael Brown</td>
                    <td>ASDFG34</td>
                    <td>Convertible</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">New</span></td>
                    <td>GHI012</td>
                    <td>5000</td>
                    <td>YZ8,ABCD,EFG9</td>
                    <td>03/15/2023</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Sarah Davis</td>
                    <td>ZXCVB78</td>
                    <td>Sedan</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Delivered</span></td>
                    <td>JKL345</td>
                    <td>6000</td>
                    <td>FGH1,IJKL,OP2</td>
                    <td>04/05/2023</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>David Wilson</td>
                    <td>POIUYT67</td>
                    <td>SUV</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">In Progress</span></td>
                    <td>LMN678</td>
                    <td>7000</td>
                    <td>QW3,ERTY,UIO4</td>
                    <td>05/20/2023</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Amy Thompson</td>
                    <td>REWQ12</td>
                    <td>Hatchback</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Cancelled</span></td>
                    <td>POI789</td>
                    <td>8000</td>
                    <td>YUI5,ERTY,UIO6</td>
                    <td>06/10/2023</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Robert Miller</td>
                    <td>MKJHGF1</td>
                    <td>Sedan</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">New</span></td>
                    <td>QAZ234</td>
                    <td>9000</td>
                    <td>ASD7,FGH8,JKL9</td>
                    <td>07/15/2023</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Olivia Wilson</td>
                    <td>HGFDSA3</td>
                    <td>SUV</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Delivered</span></td>
                    <td>WSX098</td>
                    <td>10000</td>
                    <td>QAZ2,WSX3,EDC4</td>
                    <td>08/05/2023</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>Ethan Turner</td>
                    <td>VCXZAS5</td>
                    <td>Convertible</td>
                    <td><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">In Progress</span></td>
                    <td>RFV456</td>
                    <td>11000</td>
                    <td>TYU5,DFG6,GHJ7</td>
                    <td>09/25/2023</td>
                    <td>
                        <button className="po-book-button text-xs px-2 py-1 mr-1">EDIT</button>
                        <button className="po-book-button text-xs px-2 py-1">DELETE</button>
                    </td>
                </tr>

                </tbody>
            </table>
        </form>
    </div>);
};

export default CustomerLists;