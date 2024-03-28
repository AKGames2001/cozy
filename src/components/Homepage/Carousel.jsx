import React, { useEffect, useState } from "react";
import Featured_1 from "../../resources/images/featured-1.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../../resources/css/Homepage/carousel.css";

function Carousel() {
  const [curr, setCurr] = useState(0);
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchAPI = () => {
    fetch("http://localhost:5000/carousel")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.carousel);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    fetchAPI();
  },[]);

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
            className="featured-carousel-item"
            style={{ left: i * 100 + "%" }}
          >
            <div className="carousel-item-left">
              <h3 style={{ fontSize: "35px" }}>{ele.title}</h3>
              <p style={{ fontSize: "16px" }}>{ele.description}</p>
              <button>Start Free Trial</button>
            </div>
            <div className="carousel-item-right">
              <img src={Featured_1} alt="/" />
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
      <div className="featured-carousel">
        <div
          className="featured-carousel-shift-btn"
          style={{ right: "50px" }}
          onClick={movePrev}
        >
          <IoIosArrowBack />
        </div>
        <div
          className="featured-carousel-slider"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {carouselMapper(apiData)}
        </div>
        <div
          className="featured-carousel-shift-btn"
          style={{ left: "50px" }}
          onClick={moveNext}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
}

export default Carousel;
