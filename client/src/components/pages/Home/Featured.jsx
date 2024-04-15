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
        <div className="flex flex-col w-[calc(100vw/5)] gap-4 cursor-pointer items-center transition-transform ease-in-out duration-200 hover:scale-95" key={element.id} onClick={redirectHandler} id={element.id}>
          <img className="w-4/5" src={"images/" + element.image} alt="/" />
          <div className="flex flex-col items-center">
            <p style={{ fontWeight: "700" }}>{element.title}</p>
            <p>${element.price}</p>
          </div>
        </div>
      );
    });
  }

  function callingData() {
    fetch("http://192.168.15.223:5000/api/featured")
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
        <div className="flex justify-center gap-6 py-8">
          {mapper()}
        </div>
      </div>
    </>
  );
}

export default Featured;
