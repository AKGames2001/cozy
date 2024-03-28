import React, { useEffect, useState } from "react";
import RecRow from "./Recommendation/RecRow";
import "../../resources/css/Homepage/recommendation.css";

function Recommendation() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState();

  function mapper(arr) {
    return arr.map((ele) => {
      return <RecRow data={ele} />;
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
    fetch("http://localhost:5000/api/winery")
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
      <div className="recommendation">
        <h3>Recommended for you</h3>
        <div className="recommendation-tab-headers">
          <button>ALL WINE</button>
          <button>FINE WINE</button>
          <button>MIXED CASE</button>
        </div>
        <div className="recommendation-tab-display">{splitData()}</div>
      </div>
    </>
  );
}

export default Recommendation;
