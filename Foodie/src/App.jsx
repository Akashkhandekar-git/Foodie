import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Component/Footer/Footer";
import LoginPopUp from "./Component/LoginPopUp/LoginPopUp";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {
      showLogin?<LoginPopUp setShowLogin = {setShowLogin}/>:<></>
    }
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
