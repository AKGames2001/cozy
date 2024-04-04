import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../containers/Cart/CartPage";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function CartRoutes(props) {
  return (
    <>
      <Navbar userStatus={props.userStatus} auth={props.auth} />
      <Routes>
        {/* Route: /cart */}
        <Route path="/" element={<CartPage userData={props.userData} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default CartRoutes;
