import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import "../../../styles/Homepage/recommendation.css";

function Recommendation() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState();
  const navigate = useNavigate();

  function redirectProduct(e) {
    e.preventDefault();
    console.log(e.target.parentNode.parentNode.id);
    navigate("/product/custom", {
      state: { id: e.target.parentNode.parentNode.id },
    });
  }

  function mapper(arr) {
    return arr.map((innerArr) => {
      console.log(innerArr);
      return innerArr.map((ele) => {
        return (
          <div
            className="flex flex-col w-full cursor-pointer"
            key={ele.id}
            onClick={redirectProduct}
            id={ele.id}
          >
            <div className="flex items-center justify-center relative border-[1px] border-solid border-black w-full overflow-hidden image-hover">
              {/* <img src={"https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg"} alt="/" /> */}
              <img
                className="h-[250px] transition-transform ease-in-out duration-100"
                src={"/images/" + ele.image}
                alt="/"
              />
              <div className="absolute bottom-4 right-4 bg-[#c4c4c4] rounded-full p-2">
                <FaRegHeart className="text-[#555555]" />
              </div>
              <div className="absolute flex w-full h-14 item-hover bg-white text-white gap-[2px]">
                <MdOutlineShoppingCart className="bg-[#90133b] w-1/2 h-full p-4 hover:bg-[#90133be3]" />
                <FaRegHeart className="bg-[#90133b] w-1/2 h-full p-4 hover:bg-[#90133be3]" />
              </div>

              {/* <FaRegHeart className="absolute bottom-4 right-4 bg-gray-500 rounded-full w-6 h-6 p-1 " /> */}
            </div>
            <div className="flex flex-col gap-1 my-3">
              <p style={{ fontWeight: "bold" }}>{ele.title}</p>
              <p style={{ fontSize: "12px" }}>{ele.description}</p>
              <p>${ele.price}</p>
            </div>
          </div>
        );
      });
    });
  }

  function splitData() {
    let counter = 0;
    let slicedData = [];
    apiData.forEach(() => {
      // Counter to seprate the data into Rows
      if (counter % 4 === 0 && counter < 5) {
        if (counter + 4 < apiData.length) {
          slicedData.push(apiData.slice(counter, counter + 4));
        } else if (counter !== 0) {
          slicedData.push(apiData.slice(counter));
        } else {
          console.log("Data is Empty");
        }
        counter++;
      } else {
        counter++;
      }
    });
    return mapper(slicedData);
  }

  function callingData() {
    fetch("http://192.168.15.223:5000/api/winery")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
      });
  }

  function clickHandler(e) {
    document.getElementsByClassName("active")[0].classList.toggle("active");
    e.target.classList.toggle("active");
  }

  useEffect(() => {
    callingData();
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="w-full flex flex-col items-center py-8 gap-6">
        <h3 className="text-2xl">Recommendation for you</h3>
        <div className="flex text-[#8e8e8e]">
          <button
            className="text-lg font-medium cursor-pointer font-roboto px-10 py-3 active"
            onClick={clickHandler}
          >
            ALL WINE
          </button>
          <button
            className="text-lg font-medium cursor-pointer font-roboto px-10 py-3"
            onClick={clickHandler}
          >
            FINE WINE
          </button>
          <button
            className="text-lg font-medium cursor-pointer font-roboto px-10 py-3"
            onClick={clickHandler}
          >
            MIXED CASE
          </button>
        </div>
        <div className="w-[80%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center py-3 h-full gap-8">
            {splitData()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommendation;
