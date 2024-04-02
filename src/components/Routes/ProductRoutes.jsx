import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Listing from "../ProductPage/Listing";
import Product from "../ProductPage/Product";

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
