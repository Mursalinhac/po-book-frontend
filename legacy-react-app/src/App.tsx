import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import './css/App.css';
import './css/imagehover.css';
import './css/styles.css';
import './css/print.css';

import Navigation from './components/Navigation';
import SkipLink from './components/SkipLink';
import Home from './components/Home';
import Customers from "./components/CustomerLists";
import Orders from "./components/TradeInfo";
import Order from "./components/Order";

const App: React.FC = () => {
    return (
        <Router>
            <SkipLink href="#main-content">Skip to main content</SkipLink>
            <Navigation/>
            <main id="main-content" role="main">
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/orders/new/:model" element={<Order/>}/>
                <Route path="*" element={<Home/>}/>
                </Routes>
            </main>

            {/*<Footer/>*/}
        </Router>
    );
};

export default App;
