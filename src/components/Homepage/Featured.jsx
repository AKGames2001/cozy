import React, { useState, useEffect } from "react";
import "../../resources/css/Homepage/featured.css";
import Featured_1 from "../../resources/images/bottle.png";

function Featured() {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  function mapper() {
    return apiData.map((element) => {
      console.log(element)
      return (
        <div className="featured-product" key={element.id}>
          <img src={"images/" + element.image} alt="/" />
          <div className="featured-product-info">
            <p style={{ fontWeight: "700" }}>{element.title}</p>
            <p>${element.price}</p>
          </div>
        </div>
      );
    });
  }

  function callingData() {
    fetch("http://localhost:5000/api/featured")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    callingData();
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="featured-products">
        <h3>Featured Products</h3>
        <div className="featured-product-list">
          {mapper()}
        </div>
      </div>
    </>
  );
}

export default Featured;
