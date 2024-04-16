import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../common/Breadcrumbs";
import StarRating from "../../common/StarRating";

import { IoMdCheckmark } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Detail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.state.id);
    fetch("http://192.168.15.223:5000/api/product", {
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
        setApiData(data);
        setIsLoading(false);
      });
  }, [location.state.id, props.userData]);

  function handleAddToCart() {
    console.log(props.userData);
    if (props.userStatus) {
      fetch("http://192.168.15.223:5000/api/cart/add", {
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
    } else {
      navigate("/auth");
    }
  }

  function handleAddToWishlist() {
    if (props.userStatus) {
      fetch("http://192.168.15.223:5000/api/cart/wishlist/add", {
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
    } else {
      navigate("/auth");
    }
  }

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="flex flex-col items-center">
        <div className="w-4/5 border-t-[1px] border-black border-solid">
          <Breadcrumbs />
          <div className="flex">
            <div className="p-8">
              <img
                className="w-auto h-[400px]"
                src={"/images" + apiData.image}
                alt="/"
              />
            </div>
            <div className="flex flex-col w-3/6 p-5 gap-2">
              <div className="flex justify-between">
                <h3 className="text-3xl font-bold">{apiData.title}</h3>
                <div>
                  <StarRating rating={3}/>
                  <p className="text-sm font-roboto mt-1">3.5/700 reviews</p>
                </div>
              </div>
              <div>
                <p className="text-xl">${apiData.price}</p>
              </div>
              <div>
                <p className="">{apiData.description}</p>
              </div>
              <div>
                <div className="grid items-center w-auto py-3 grid-cols-3">
                  <p className="w-[100px]">Size:</p>
                  <div className="w-full flex gap-1">
                    <p className="text-sm flex justify-center items-center w-20 h-8 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-100">
                      XS
                    </p>
                    <p className="text-sm flex justify-center items-center w-20 h-8 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-100">
                      S
                    </p>
                    <p className="text-sm flex justify-center items-center w-20 h-8 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-100">
                      M
                    </p>
                    <p className="text-sm flex justify-center items-center w-20 h-8 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-100">
                      L
                    </p>
                    <p className="text-sm flex justify-center items-center w-20 h-8 border-[1px] border-solid border-black rounded cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-100">
                      XL
                    </p>
                  </div>
                  <p className="flex justify-center items-center p-2 cursor-pointer text-[#90133b] border-b-[1px] border-[#90133b] border-solid mx-6 font-bold text-sm hover:bg-[#90133b] hover:text-white transition ease-in-out duration-100">
                    SIZE GUIDE
                  </p>
                </div>
                <div className="grid items-center w-auto py-3 grid-cols-3">
                  <p className="w-[100px]">Origin:</p>
                  <div>
                    <p className="text-sm">Australia</p>
                  </div>
                </div>
                <div className="grid items-center w-auto py-3 grid-cols-3">
                  <p className="w-[100px]">Quanitity:</p>
                  <select className="w-1/5 border-b-[1px] border-solid border-[#90133b]">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="flex gap-2 text-sm items-center">
                  <IoMdCheckmark className="text-lg text-gray-700" /> Free
                  shipping available
                </p>
                <p className="flex gap-2 text-sm">
                  <TbTruckDelivery className="text-lg text-gray-700" /> Expected
                  Delivery By: Thursday, May 6
                </p>
              </div>
              <div className="flex gap-5 my-4">
                <button className="bg-[#90133b] text-sm py-3 px-8 text-white rounded cursor-pointer hover:bg-[#770f30] transition ease-in-out duration-100">
                  Buy Now
                </button>
                <button
                  className=" border-[1px] border-[#90133b] text-sm py-3 px-8 text-gray-700 rounded cursor-pointer hover:bg-[#90133b] hover:text-white transition ease-in-out duration-100"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  className="flex items-center gap-2 font-semibold text-[#90133b] ml-5 cursor-pointer hover:border-b-[1px] hover:border-[#90133b] transition ease-in-out duration-100"
                  onClick={handleAddToWishlist}
                >
                  <FaPlus />
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-4/5 justify-center">
          <div className="">
            <ul className="flex gap-4">
              <li className="p-2 border-[1px] border-[#90133b] border-solid cursor-pointer hover:bg-[#90133b] hover:text-white transition ease-in-out duration-100 bg-[#90133b] text-white">Description</li>
              <li className="p-2 border-[1px] border-[#90133b] border-solid cursor-pointer hover:bg-[#90133b] hover:text-white transition ease-in-out duration-100">Header</li>
              <li className="p-2 border-[1px] border-[#90133b] border-solid cursor-pointer hover:bg-[#90133b] hover:text-white transition ease-in-out duration-100">Header</li>
            </ul>
          </div>
          <div className="">
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              fuga tempora optio in saepe eos dolore est. Quasi magnam
              exercitationem eligendi, nemo molestiae beatae neque, sed ullam
              officia, obcaecati porro.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
