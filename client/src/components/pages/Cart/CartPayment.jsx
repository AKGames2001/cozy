import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

function CartPayment(props) {
  return (
    <>
      <div className="flex justify-center flex-col w-3/10 bg-[rgb(243,243,243)] gap-5">
        <div className="flex w-full justify-between text-base border-b-[1px] border-t-[1px] border-solid border-[rgb(221,221,221)]">
          <p>Subtotal:</p>
          <p>${props.costTotal}</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <button
            className="flex justify-center items-center w-4/5 py-3 cursor-pointer rounded transition-opacity ease-in-out duration-100 gap-3 hover:opacity-90"
            style={{
              backgroundColor: "var(--btn-color)",
              color: "white",
            }}
          >
            Checkout
          </button>
          <button
            className="flex justify-center items-center w-4/5 py-3 cursor-pointer rounded transition-opacity ease-in-out duration-100 gap-3 hover:opacity-90"
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
