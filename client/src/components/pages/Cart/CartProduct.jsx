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
        <div className="flex items-center w-full h-[200px] my-3 bg-white drop-shadow-md">
          <div className="flex h-full w-[200px] justify-center items-center">
            <img className="h-[180px] w-auto cursor-pointer" src={"/images/" + ele.image} alt="/" onClick={handleClick} id={ele.id} />
          </div>
          <div className="flex w-full flex-col gap-5">
            <div className="cursor-pointer">
              <h3 style={{ fontSize: "24px" }} onClick={handleClick} id={ele.id}>{ele.title}</h3>
            </div>
            <div className="">
              <p>${ele.price}</p>
            </div>
            <div className="flex w-9/10 justify-between">
              <div className="flex gap-3 items-center">
                <label htmlFor="qty" style={{ fontSize: "14px" }}>
                  Qty.
                </label>
                <select className="w-[50px] border-b-[1px] border-solid border-[#6B240C] cursor-pointer" name="qty">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="flex gap-3 items-center text-black">
                <div className="">
                  <p>Total: ${ele.price}</p>
                </div>
                <div className="flex gap-3 bg-[rgb(225,225,225)] py-2 px-5 rounded transition-colors ease-in-out duration-100 cursor-pointer hover:bg-red-600 hover:text-white">
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
      <div className="flex flex-col w-1/2">
        {mapper()}
        <div className="flex w-full justify-between">
          <p>Bundle Total:</p>
          <p>${props.costTotal}</p>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
