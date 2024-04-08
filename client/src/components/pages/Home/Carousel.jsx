import React, { useEffect, useState } from "react";
import Featured_1 from "../../../assets/images/featured-1.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function  Carousel() {
  const [curr, setCurr] = useState(0);
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchAPI = () => {
    fetch("http://localhost:5000/api/carousel")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.carousel);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  function movePrev() {
    setCurr((curr) => (curr === 0 ? apiData.length - 1 : curr - 1));
  }

  function moveNext() {
    setCurr((curr) => (curr === apiData.length - 1 ? 0 : curr + 1));
  }

  function carouselMapper(arr) {
    return arr.map((ele, i) => {
      return (
        <>
          <div
            className="flex absolute w-full h-full justify-between gap-[10%] inset-0"
            style={{ left: i * 200 + "%" }}
          >
            <div className="flex flex-col justify-center items-start gap-10" key={ele.id}>
              <h3 style={{ fontSize: "35px" }}>{ele.title}</h3>
              <p style={{ fontSize: "16px" }}>{ele.description}</p>
              {ele.title ? <button className="bg-[#f9e4d4] text-white font-normal px-[50px] py-[10px] rounded">Start Free Trial</button> : <></>}
            </div>
            <div className="flex items-center w-1/2 h-full overflow-hidden">
              {ele.title ? <img className="w-full h-full object-cover" src={Featured_1} alt="/" /> : <></>}
            </div>
          </div>
        </>
      );
    });
  }

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="flex h-[400px] justify-center bg-[#f9e4d4]">
        <div
          className="flex relative w-4/5 transition ease-out duration-500"
          style={{ transform: `translateX(-${curr * 200}%)` }}
        >
          {carouselMapper(apiData)}
        </div>
        <div
          className="h-[50px] w-[50px] absolute top-1/2 text-4xl cursor-pointer"
          style={{ left: "50px" }}
          onClick={movePrev}
        >
          <IoIosArrowBack />
        </div>
        <div
          className="h-[50px] w-[50px] absolute top-1/2 text-4xl cursor-pointer"
          style={{ right: "50px" }}
          onClick={moveNext}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
}

export default Carousel;
