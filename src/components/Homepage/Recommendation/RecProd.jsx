import React from "react";

function RecProd(props) {
  return (
    <>
      <div className="tab-product" key={props.data.id}>
        <div className="tab-product-image">
          {/* <img src={"https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg"} alt="/" /> */}
          <img src={"images/" +props.data.image} alt="/" />
        </div>
        <div className="tab-product-info">
          <p style={{ fontWeight: "bold" }}>{props.data.title}</p>
          <p style={{ fontSize: "12px" }}>{props.data.description}</p>
          <p>${props.data.price}</p>
        </div>
      </div>
    </>
  );
}

export default RecProd;
