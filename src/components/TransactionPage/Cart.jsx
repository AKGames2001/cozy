import React, { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import "../../resources/css/TransactionPage/cart.css";

function Cart(props) {
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [costTotal, setCostTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/cart/fetch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.userData,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCartData(data.cart);
        data.cart.map(a => {  
            setCostTotal(costTotal + a.price);
        })
        setIsLoading(false);
      });
  }, []);

  function mapper() {
   return cartData.map((ele) => {
    //   console.log(ele);
    //   console.log(costTotal);
      return (
        <div className="cart-product">
          <div className="cart-product-image">
            <img src={"/images/" + ele.image} alt="/" />
          </div>
          <div className="cart-product-info">
            <div className="cart-product-title">
              <h3 style={{ fontSize: "24px" }}>{ele.title}</h3>
            </div>
            <div className="cart-product-price">
              <p>${ele.price}</p>
            </div>
            <div className="cart-product-options">
              <div className="cart-product-options-left">
                <label htmlFor="qty" style={{ fontSize: "14px" }}>
                  Qty.
                </label>
                <select name="qty">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="cart-product-options-right">
                <div className="cart-product-options-right-price">
                  <p>Total: ${ele.price}</p>
                </div>
                <div className="cart-product-options-right-btn">
                  <FaTrashCan />
                  <p style={{ fontSize: "12px" }}>REMOVE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="cart">
        <div className="cart-product-window">
          {mapper()}
          <div className="cart-product-total">
            <p>Bundle Total:</p>
            <p>${costTotal}</p>
          </div>
        </div>
        <div className="cart-payment-window">
          <div className="cart-payment-total">
            <p>Subtotal:</p>
            <p>${costTotal}</p>
          </div>
          <div className="cart-payment-buttons">
            <button
              style={{
                backgroundColor: "var(--btn-color)",
                color: "white",
              }}
            >
              Checkout
            </button>
            <button
              style={{
                backgroundColor: "rgb(155, 155, 155)",
                color: "black",
              }}
            >
              Continue Shopping <FaShoppingBasket />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
