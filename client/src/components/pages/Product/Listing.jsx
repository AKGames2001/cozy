import React, { useEffect, useState } from "react";
import ProductCard from "../../common/ProductCard";
import { BiX } from "react-icons/bi";

function Listing() {
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

  useEffect(() => {
    fetch("http://192.168.15.223:5000/api/winery")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
      });
  });

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="flex flex-col w-9/12">
        <div className="flex justify-start gap-4">
          <div className="flex items-center justify-between border-[1px] border-[#90133b] border-solid rounded px-2 py-2 mt-10 mb-2">
            <p>Australia</p>
            <BiX className="text-[#90133b] text-2xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-between border-[1px] border-[#90133b] border-solid rounded px-2 py-2 mt-10 mb-2">
            <p>Australia</p>
            <BiX className="text-[#90133b] text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-3 py-6 h-full gap-8 border-[1px] border-gray-200">
          {mapper(apiData)}
        </div>
      </div>
    </>
  );
}

export default Listing;
