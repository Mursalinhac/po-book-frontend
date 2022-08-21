import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";

import OrderOption from "./OrderOption";
import OrderPreview from "./OrderPreview";
import CustomerInfo from "./CustomerInfo"
import FactoryInstalled from "./FactoryInstalled"
import DealerInstalled from "./DealerInstalled"
// import Preview from "./Preview"




function Order() {
    let { model } = useParams();
    const [priceList, setPriceList] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [order, setOrder] = useState({ total: 0 })
    useEffect(() => {
        const getData = async () => {
            const { data } = await Axios.get(`http://localhost:3001/pricelist/${model}`)
            console.log(data)
            setPriceList(data)
            setIsLoading(false)
            let options = { factoryInstalled: {}, dealerInstalled: {} }
            data.factoryInstalled.forEach((option) => {
                if (option.selectType === "multi") {
                    options.factoryInstalled[option.key] = [];
                } else {
                    options.factoryInstalled[option.key] = null;
                }
            })

            data.dealerInstalled.forEach((option) => {
                if (option.selectType === "multi") {
                    options.dealerInstalled[option.key] = [];
                } else {
                    options.dealerInstalled[option.key] = null;
                }
            })
            setOrder(previousState => {
                return {
                    ...previousState,
                    options
                }
            })
        }

        if (isLoading) {
            getData();
        }
    })
    return isLoading ? <h1>Loading ...</h1> : (
        <Container fluid  >
            <Tabs

                defaultActiveKey="customerInfo"
                id="fill-tab-example"
                className="mb-12 nav-pills"
                role="tablist"
                fill
            >
                <Tab eventKey="customerInfo" title="Customer Info">
                    <CustomerInfo />
                </Tab>
                <Tab eventKey="factoryInstaller" title="Factory Installed" >
                    <FactoryInstalled options={priceList.factoryInstalled} onChange={setOrder} />
                </Tab>
                <Tab eventKey="dealerInstaller" title="Dealer Installed">
                    {/* <DealerInstalled /> */}
                    <DealerInstalled options={priceList.dealerInstalled} onChange={setOrder} />
                </Tab>
                <Tab eventKey="preview" title="Preview" >
                    {/* <Preview /> */}
                </Tab>
            </Tabs>
        </Container>);
}

export default Order;