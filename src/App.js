import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/imagehover.css';

// 

import Navigation from './components/Navigation';
import Home from './components/Home';
import Customers from "./components/CustomerLists";
import Orders from "./components/TradeIn";
import Order from "./components/Order";


function App() {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/customers" element={<Customers/>}/>
                <Route exact path="/orders" element={<Orders/>}/>
                <Route exact path="/orders/new/:model" element={<Order/>}/>
                <Route exact path="*" element={<Home/>}/>

            </Routes>

            {/*<Footer/>*/}
        </Router>
    );
}

export default App;
