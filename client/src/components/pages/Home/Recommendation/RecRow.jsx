import React from "react";
import RecProd from "./RecProd";

function RecRow(props) {
  return (
    <>
      <div className="tab-row">
        {props.data.map((ele) => {
            return <RecProd data={ele}/>
        })}
      </div>
    </>
  );
}

export default RecRow;
