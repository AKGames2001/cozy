import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductListing from "../containers/Product/ProductListing";
import ProductDetails from "../containers/Product/ProductDetails";

function ProductRoutes(props) {
  return (
    <>
      <Navbar userStatus={props.userStatus} auth={props.auth} />
      <Routes>
        {/* Route: /product */}
        <Route index element={<ProductListing />} />

        {/* Route: /product/custom */}
        <Route path="/custom" element={<ProductDetails userData={props.userData} userStatus={props.userStatus} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default ProductRoutes;
