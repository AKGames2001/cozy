import React from "react";
import RecProd from "./RecProd";

function RecRow(props) {
  return (
    <>
      <div className="flex w-full justify-center">
        {props.data.map((ele) => {
            return <RecProd data={ele}/>
        })}
      </div>
    </>
  );
}

export default RecRow;
