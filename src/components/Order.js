import {useState, useEffect} from "react";
import {Container, Tab, Tabs, Alert} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Axios from "axios";

import CustomerInfo from "./CustomerInfo"
import FactoryInstalled from "./FactoryInstalled"
import DealerInstalled from "./DealerInstalled"
import Preview from "./Preview"
import TradeInfo from "./TradeInfo";


function Order() {
    let {model} = useParams();
    const [priceList, setPriceList] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [order, setOrder] = useState({total: 0});

    // Fetch data only once when component mounts or model changes
    useEffect(() => {
        const getData = async () => {
            try {
                console.log(`Fetching data for model: ${model}`);
                // Use absolute URL to avoid proxy issues
                const response = await Axios.get(`http://localhost:3001/pricelist/${model}`);
                console.log("Data received:", response.data);

                // Initialize with empty objects if undefined
                const safeData = {
                    ...response.data,
                    factoryInstalled: response.data.factoryInstalled || {},
                    dealerInstalled: response.data.dealerInstalled || {}
                };

                setPriceList(safeData);
                setOrder(safeData);
                setError(null);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(`Failed to load data: ${err.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        setIsLoading(true);
        getData();
    }, [model]); // Only depend on model

    if (error) {
        return (
            <div>
                <Alert variant="danger">{error}</Alert>
            </div>
        );
    }

    return isLoading ? (
        <div>
            <h1>Loading...</h1>
        </div>
    ) : (
        <Container fluid>
            <Tabs
                defaultActiveKey="customerInfo"
                id="fill-tab-example"
                className="mb-12 nav-pills"
                role="tablist"
                fill
            >
                <Tab eventKey="customerInfo" title="Customer Info">
                    <CustomerInfo onChange={setOrder}/>
                </Tab>
                <Tab eventKey="trade-in" title="Trade-In">
                    <TradeInfo order={order} setOrder={setOrder}/>
                </Tab>
                <Tab eventKey="factoryInstaller" title="Factory Installed">
                    <FactoryInstalled options={priceList.factoryInstalled} onChange={setOrder}/>
                </Tab>
                <Tab eventKey="dealerInstaller" title="Dealer Installed">
                    {/* <DealerInstalled /> */}
                    <DealerInstalled options={priceList.dealerInstalled} onChange={setOrder}/>
                </Tab>
                <Tab eventKey="preview" title="Preview">
                    <Preview order={order} setOrder={setOrder}/>
                </Tab>
            </Tabs>
        </Container>);
}

export default Order;