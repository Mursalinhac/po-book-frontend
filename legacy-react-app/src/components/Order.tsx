import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import CustomerInfo from "./CustomerInfo";
import FactoryInstalled from "./FactoryInstalled";
import DealerInstalled from "./DealerInstalled";
import Preview from "./Preview";
import TradeInfo from "./TradeInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { OrderProps, PriceListResponse, OrderData, VehicleModel } from '../types';

const Order: React.FC<OrderProps> = () => {
    const { model } = useParams<{ model: VehicleModel }>();
    const [priceList, setPriceList] = useState<PriceListResponse>({} as PriceListResponse);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [order, setOrder] = useState<OrderData>({ total: 0 });
    const [activeTab, setActiveTab] = useState("customerInfo");

    // Fetch data only once when component mounts or model changes
    useEffect(() => {
        const getData = async () => {
            try {
                console.log(`Fetching data for model: ${model}`);
                // Use absolute URL to avoid proxy issues
                const response = await Axios.get<PriceListResponse>(`http://localhost:3001/pricelist/${model}`);
                console.log("Data received:", response.data);

                // Initialize with empty objects if undefined
                const safeData: PriceListResponse = {
                    ...response.data,
                    factoryInstalled: response.data.factoryInstalled || {},
                    dealerInstalled: response.data.dealerInstalled || {}
                };

                setPriceList(safeData);
                setOrder(safeData);
                setError(null);
            } catch (err) {
                console.error("Error fetching data:", err);
                const errorMessage = err instanceof Error ? err.message : 'Unknown error';
                setError(`Failed to load data: ${errorMessage}`);
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
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            </div>
        );
    }

    const tabs = [
        { key: "customerInfo", title: "Customer Info", component: <CustomerInfo onChange={setOrder}/> },
        { key: "trade-in", title: "Trade-In", component: <TradeInfo order={order} setOrder={setOrder}/> },
        { key: "factoryInstaller", title: "Factory Installed", component: <FactoryInstalled options={priceList.factoryInstalled} onChange={setOrder}/> },
        { key: "dealerInstaller", title: "Dealer Installed", component: <DealerInstalled options={priceList.dealerInstalled} onChange={setOrder}/> },
        { key: "preview", title: "Preview", component: <Preview order={order} setOrder={setOrder}/> }
    ];

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="w-full px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-5 bg-corvette-dark border border-corvette-gray">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.key}
                            value={tab.key}
                            className="text-white data-[state=active]:bg-corvette-gray data-[state=active]:text-black"
                        >
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabs.map((tab) => (
                    <TabsContent key={tab.key} value={tab.key} className="mt-6">
                        {tab.component}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default Order;