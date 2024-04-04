import React from "react";
import ProductDetail from "../../components/pages/Product/ProductDetail";
import Recommedation from "../../components/pages/Home/Recommendation";
import "../../styles/ProductPage/product.css";

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
