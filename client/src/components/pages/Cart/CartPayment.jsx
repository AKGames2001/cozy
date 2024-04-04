import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

function CartPayment(props) {
  return (
    <>
      <div className="cart-payment-window">
        <div className="cart-payment-total">
          <p>Subtotal:</p>
          <p>${props.costTotal}</p>
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
    </>
  );
}

export default CartPayment;
