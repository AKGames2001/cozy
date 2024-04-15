import React, { useEffect, useState } from "react";
import ProductCard from "../../common/ProductCard";

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
      <div className="flex w-9/12">
        <div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-3 h-full gap-8">
          {mapper(apiData)}
        </div>
      </div>
    </>
  );
}

export default Listing;
