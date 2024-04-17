import React, { useEffect, useState } from "react";
import "../../../styles/Homepage/recommendation.css";
import ProductCard from "../../common/ProductCard";

function Recommendation() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState();

  function mapper(arr) {
    return arr.map((ele) => {
      return (
        <ProductCard
          data={{
            id: ele.id,
            image: ele.image,
            title: ele.title,
            description: ele.description,
            price: ele.price,
          }}
        />
      );
    });
  }

  function callingData() {
    fetch(process.env.REACT_APP_BASE_URL + "api/winery")
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
        <div className="flex w-full justify-evenly md:justify-center text-[#8e8e8e]">
          <button
            className="text-base md:text-lg font-medium cursor-pointer font-roboto md:px-10 md:py-3 active"
            onClick={clickHandler}
          >
            ALL WINE
          </button>
          <button
            className="text-base md:text-lg font-medium cursor-pointer font-roboto md:px-10 md:py-3"
            onClick={clickHandler}
          >
            FINE WINE
          </button>
          <button
            className="text-base md:text-lg font-medium cursor-pointer font-roboto md:px-10 md:py-3"
            onClick={clickHandler}
          >
            MIXED CASE
          </button>
        </div>
        <div className="w-[80%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 py-3 h-full gap-8">
            {mapper(apiData)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommendation;
