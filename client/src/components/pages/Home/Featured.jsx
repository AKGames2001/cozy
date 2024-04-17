import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  function redirectHandler(e) {
    e.preventDefault();
    console.log(e.target.parentNode.id);
    navigate("/product/custom/:id", {state: {id: e.target.parentNode.id}})
  }

  function mapper() {
    return apiData.map((element) => {
      return (
        <div className="flex flex-row md:flex-col w-full md:w-[calc(100vw/5)] gap-4 cursor-pointer items-center transition-transform ease-in-out duration-200 hover:scale-95" key={element.id} onClick={redirectHandler} id={element.id}>
          <img className="w-2/5 md:w-4/5" src={"images/" + element.image} alt="/" />
          <div className="flex flex-col gap-4 md:gap-0 md:items-center w-full">
            <p className="font-bold text-lg md:text-base">{element.title}</p>
            <p>${element.price}</p>
          </div>
        </div>
      );
    });
  }

  function callingData() {
    fetch(process.env.REACT_APP_BASE_URL + "api/featured")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    callingData();
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="flex flex-col w-full items-center py-8">
        <h3 className="text-2xl">Featured Products</h3>
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-6 py-8">
          {mapper()}
        </div>
      </div>
    </>
  );
}

export default Featured;
