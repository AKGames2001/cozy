import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Listing from "../containers/Product/Listing";
import Product from "../containers/Product/Product";

function ProductRoutes(props) {
  return (
    <>
      <Navbar userStatus={props.userStatus} auth={props.auth} />
      <Routes>
        <Route index element={<Listing />} />
        <Route path="/custom" element={<Product userData={props.userData}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default ProductRoutes;
