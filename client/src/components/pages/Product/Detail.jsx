import React, { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

function Detail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state.id);
    fetch("http://localhost:5000/api/product", {
      method: "POST",   
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: location.state.id }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data);
        setIsLoading(false);
      });
  });

  function handleAddToCart() {
    console.log(props.userData);
    fetch("http://localhost:5000/api/cart/add", {
      method: "POST",   
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: location.state.id, email: props.userData }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={"/images" + apiData.image} alt="/" />
        </div>
        <div className="product-detail-info">
          <div className="product-detail-title">
            <h3 style={{ fontSize: "30px" }}>{apiData.title}</h3>
          </div>
          <div className="product-detail-price">
            <p style={{ fontSize: "20px" }}>${apiData.price}</p>
          </div>
          <div className="product-detail-description">
            <p style={{ fontSize: "14px" }}>{apiData.description}</p>
          </div>
          <div className="prodcut-detail-options">
            <div className="product-detail-options-item">
              <p>Size:</p>
              <div className="product-detail-option-size">
                <p>XS</p>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
            </div>
            <div className="product-detail-options-item">
              <p>Origin:</p>
              <div>
                <p>Australia</p>
              </div>
            </div>
            <div className="product-detail-options-item">
              <p>Quanitity:</p>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div className="product-detail-delivery-info">
            <p>
              <IoMdCheckmark /> Free shipping available
            </p>
            <p>
              <TbTruckDelivery /> Expected Delivery By: Thursday, May 6
            </p>
          </div>
          <div className="product-detail-buttons">
            <button className="product-detail-btn">Buy Now</button>
            <button className="product-detail-btn" onClick={handleAddToCart}>Add to Cart</button>
            <button className="product-detail-btn-alt">
              <FaPlus /> ADD TO WISHLIST
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
