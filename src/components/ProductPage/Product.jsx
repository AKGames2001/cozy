import React from "react";
import ProductDetail from "./Product/ProductDetail";
import Recommedation from "../Homepage/Recommendation";
import "../../resources/css/ProductPage/product.css";

function Product(props) {
  return (
    <>
      <div className="product-page">
        <ProductDetail userData={props.userData}/>
        <Recommedation />
      </div>
    </>
  );
}

export default Product;
