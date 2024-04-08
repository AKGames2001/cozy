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
      <div className="flex w-4/5">
        <div className="p-8">
          <img className="w-auto h-[400px]" src={"/images" + apiData.image} alt="/" />
        </div>
        <div className="flex flex-col p-5 gap-2">
          <div>
            <h3 className="text-3xl">{apiData.title}</h3>
          </div>
          <div>
            <p className="text-xl">${apiData.price}</p>
          </div>
          <div>
            <p className="text-sm">{apiData.description}</p>
          </div>
          <div>
            <div className="grid items-center w-1/2 py-3 grid-cols-2">
              <p className="w-[100px] text-sm">Size:</p>
              <div className="w-auto flex gap-1">
                <p className="text-sm flex justify-center items-center w-10 p-2 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white">XS</p>
                <p className="text-sm flex justify-center items-center w-10 p-2 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white">S</p>
                <p className="text-sm flex justify-center items-center w-10 p-2 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white">M</p>
                <p className="text-sm flex justify-center items-center w-10 p-2 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white">L</p>
                <p className="text-sm flex justify-center items-center w-10 p-2 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white">XL</p>
              </div>
            </div>
            <div className="grid items-center w-1/2 py-3 grid-cols-2">
              <p className="w-[100px] text-sm">Origin:</p>
              <div>
                <p className="text-sm">Australia</p>
              </div>
            </div>
            <div className="grid items-center w-1/2 py-3 grid-cols-2">
              <p className="w-[100px] text-sm">Quanitity:</p>
              <select className="w-1/5 border-b-[1px] border-solid border-[#6B240C]">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="flex gap-2 text-xs">
              <IoMdCheckmark /> Free shipping available
            </p>
            <p className="flex gap-2 text-xs">
              <TbTruckDelivery /> Expected Delivery By: Thursday, May 6
            </p>
          </div>
          <div className="flex gap-5">
            <button className="bg-[#6B240C] text-sm py-3 px-8 text-white rounded cursor-pointer">Buy Now</button>
            <button className="bg-[#6B240C] text-sm py-3 px-8 text-white rounded cursor-pointer" onClick={handleAddToCart}>Add to Cart</button>
            <button className="flex items-center gap-2 font-semibold text-[#6B240C] ml-5 cursor-pointer">
              <FaPlus />ADD TO WISHLIST
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
