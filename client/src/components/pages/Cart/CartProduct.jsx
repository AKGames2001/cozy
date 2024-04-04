import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CartProduct(props) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/product/custom", {state: {id: e.target.id}})
  }

  function mapper() {
    return props.cartData.map((ele) => {
      return (
        <div className="cart-product">
          <div className="cart-product-image">
            <img src={"/images/" + ele.image} alt="/" onClick={handleClick} id={ele.id} />
          </div>
          <div className="cart-product-info">
            <div className="cart-product-title">
              <h3 style={{ fontSize: "24px" }} onClick={handleClick} id={ele.id}>{ele.title}</h3>
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

  return (
    <>
      <div className="cart-product-window">
        {mapper()}
        <div className="cart-product-total">
          <p>Bundle Total:</p>
          <p>${props.costTotal}</p>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
