import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../../layout/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Carousel({
  userStatus,
  auth,
  autoSlides = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAPI = useCallback(() => {
    fetch(process.env.REACT_APP_BASE_URL + "api/carousel")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.carousel);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  function movePrev() {
    setCurr((curr) => (curr === 0 ? apiData.length - 1 : curr - 1));
  }

  const moveNext = useCallback(() => {
    setCurr((curr) => (curr === apiData.length - 1 ? 0 : curr + 1));
  }, [apiData]);

  useEffect(() => {
    if (!autoSlides) return;
    const slideInterval = setInterval(moveNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlideInterval, autoSlides, moveNext]);

  function carouselMapper(arr) {
    // console.log("I am called:")
    return arr.map((ele, i) => {
      return (
        <>
          <div
            className="flex absolute top-0 left-0 w-full h-full justify-between md:gap-[10%] inset-0 bg-carousel md:bg-none"
            style={{ left: i * 100 + "%" }}
          >
            <div
              className="flex flex-col w-full text-white justify-center items-center gap-10 bg-[rgba(82,82,82,0.53)]  md:items-start md:text-black md:bg-transparent md:w-1/2"
              key={ele.id}
            >
              <h3 className="text-3xl font-semibold md:text-5xl ">
                {ele.title}
              </h3>
              <p className="text-sm mx-10 md:mx-0">{ele.description}</p>
              {ele.title ? (
                <button className="bg-[#6b240c] text-white font-normal px-[50px] py-[10px] rounded">
                  Start Free Trial
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="flex left-0 items-center md:w-1/2 h-full overflow-hidden">
              {ele.title ? (
                <div className="w-full h-full object-cover md:bg-carousel"></div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      );
    });
  }

  function carouselNavigator(arr) {
    // add navigator buttons under carousel
    return (
      <>
        <div className="flex items-center justify-center gap-2">
          {arr.map((s, i) => {
            return (
              <div
                key={s.id}
                className={`transition-all w-1.5 h-1.5 bg-white md:bg-[#8ba462] rounded-full ${
                  curr === i ? "p-1" : "bg-opacity-50"
                }`}
              ></div>
            );
          })}
        </div>
      </>
    );
  }

  return isLoading ? (
    <></>
  ) : (
    <div className="bg-[#f9e4d4]">
      <Navbar userStatus={userStatus} auth={auth} />
      <div className="flex h-[400px] justify-center relative">
        <div className="w-full md:w-4/5 md:mx-20 overflow-hidden">
          <div
            className="flex transition ease-out duration-500 h-full"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {carouselMapper(apiData)}
          </div>
        </div>
        <div
          className="hidden md:flex justify-center items-center h-[50px] w-[50px] absolute bottom-3 text-2xl bg-[#6b240c] cursor-pointer md:text-4xl md:top-1/2 md:bg-transparent"
          style={{ left: "50px" }}
          onClick={movePrev}
        >
          <IoIosArrowBack />
        </div>
        <div
          className="hidden md:flex justify-center items-center h-[50px] w-[50px] absolute bottom-3 text-2xl bg-[#6b240c] cursor-pointer md:text-4xl md:top-1/2 md:bg-transparent"
          style={{ right: "50px" }}
          onClick={moveNext}
        >
          <IoIosArrowForward />
        </div>
        <div className="absolute bottom-5 right-0 left-0">
          {carouselNavigator(apiData)}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
