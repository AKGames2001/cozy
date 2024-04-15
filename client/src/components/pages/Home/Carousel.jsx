import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Featured_1 from "../../../assets/images/featured-1.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Carousel(props) {
  const [curr, setCurr] = useState(0);
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchAPI = () => {
    fetch("http://192.168.15.223:5000/api/carousel")
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
    // console.log("I am called:")
    return arr.map((ele, i) => {
      return (
        <>
          <div
            className="flex absolute w-full h-full justify-between gap-[10%] inset-0"
            style={{ left: i * 200 + "%" }}
          >
            <div
              className="flex flex-col w-1/2 justify-center items-start gap-10"
              key={ele.id}
            >
              <h3 style={{ fontSize: "42px", fontWeight: "600" }}>
                {ele.title}
              </h3>
              <p style={{ fontSize: "16px" }}>{ele.description}</p>
              {ele.title ? (
                <button className="bg-[#6b240c] text-white font-normal px-[50px] py-[10px] rounded">
                  Start Free Trial
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="flex items-center w-1/2 h-full overflow-hidden">
              {ele.title ? (
                <img
                  className="w-full h-full object-cover"
                  src={Featured_1}
                  alt="/"
                />
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
    return <></>;
  }

  return isLoading ? (
    <></>
  ) : (
    <div className="bg-[#f9e4d4]">
      <Navbar userStatus={props.userStatus} auth={props.auth}/>
      <div className="flex h-[400px] relative justify-center">
        <div
          className="flex relative w-4/5 transition ease-out duration-500"
          style={{ transform: `translateX(-${curr * 200}%)` }}
        >
          {carouselMapper(apiData)}
        </div>
        <div
          className="flex justify-center items-center h-[50px] w-[50px] absolute bottom-3 text-2xl bg-[#6b240c] cursor-pointer md:text-4xl md:top-1/2 md:bg-transparent"
          style={{ left: "50px" }}
          onClick={movePrev}
        >
          <IoIosArrowBack />
        </div>
        <div
          className="flex justify-center items-center h-[50px] w-[50px] absolute bottom-3 text-2xl bg-[#6b240c] cursor-pointer md:text-4xl md:top-1/2 md:bg-transparent"
          style={{ right: "50px" }}
          onClick={moveNext}
        >
          <IoIosArrowForward />
        </div>
        <div className="flex w-full justify-center absolute b-[50px]">
          {carouselNavigator}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
