import React from "react";
import Detail from "../../components/pages/Product/Detail";
import Recommedation from "../../components/pages/Home/Recommendation";
// import "../../styles/ProductPage/product.css";

function ProductDetails(props) {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <Detail userData={props.userData}/>
        <Recommedation />
      </div>
    </>
  );
}

export default ProductDetails;
