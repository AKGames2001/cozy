import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../TransactionPage/Cart";
import Navbar from "../Navbar";
import Footer from "../Footer";

function TransactionRoutes(props) {
  return (
    <>
      <Navbar userStatus={props.userStatus} auth={props.auth} />
      <Routes>
        <Route path="/cart" element={<Cart userData={props.userData}/>} />
        <Route path="/abx" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default TransactionRoutes;
