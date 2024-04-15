import React, { useEffect, useState } from "react";
import "../../../styles/Homepage/recommendation.css";
import ProductCard from "../../common/ProductCard";

function Recommendation() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState();

  function mapper(arr) {
    return arr.map((innerArr) => {
      console.log(innerArr);
      return innerArr.map((ele) => {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 py-3 h-full gap-8">
            {splitData()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommendation;
