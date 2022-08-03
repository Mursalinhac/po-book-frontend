import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/runwebrun.css';

// 

import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import Order from "./components/Order";



function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/orders/new/:model" element={<Order />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
