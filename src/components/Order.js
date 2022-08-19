import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";

import OrderOption from "./OrderOption";
import OrderPreview from "./OrderPreview";
import CustomerInfo from "./CustomerInfo"
// import FactoryInstalled from "./FactoryInstalled"
// import DealerInstalled from "./DealerInstalled"
// import Preview from "./Preview"




function Order() {
    let { model } = useParams();
    const [priceList, setPriceList] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [order, setOrder] = useState()
    useEffect(() => {
        const getData = async () => {
            const { data } = await Axios.get(`http://localhost:3001/pricelist/${model}`)
            console.log(data)
            setPriceList(data)
            setIsLoading(false)
            let options = {}
            data.data.forEach((option) => {
                if (option.selectType === "multi") {
                    options[option.key] = [];
                } else {
                    options[option.key] = null;
                }
            })
            setOrder(options)
        }

        if (isLoading) {
            getData();
        }
    })
    return isLoading ? <h1>Loading ...</h1> : (
        <Container fluid >
            <Tabs 
                defaultActiveKey="customerInfo"
                id="fill-tab-example"
                className="mb-3"
                bg="light"
                fill
            >
                <Tab eventKey="customerInfo" title="Customer Info">
                    <CustomerInfo />
                </Tab>
                <Tab eventKey="factoryInstaller" title="Factory Installed" >
                    {/* <FactoryInstalled /> */}
                </Tab>
                <Tab eventKey="dealerInstaller" title="Dealer Installed">
                    {/* <DealerInstalled /> */}
                </Tab>
                <Tab eventKey="preview" title="Preview" >
                    {/* <Preview /> */}
                </Tab>
            </Tabs>
        </Container>);
}

export default Order;