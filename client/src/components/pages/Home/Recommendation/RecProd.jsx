import React from "react";
import { useNavigate } from "react-router-dom";

function RecProd(props) {
  const navigate = useNavigate();

  function redirectHandler(e) {
    e.preventDefault();
    console.log(e.target.parentNode.parentNode.id);
    navigate("/product/custom", {state: {id: e.target.parentNode.parentNode.id}})
  }


  return (
    <>
      <div className="flex flex-col w-1/5 m-4 cursor-pointer" key={props.data.id} onClick={redirectHandler} id={props.data.id}>
        <div className="flex items-center justify-center border-2 border-solid border-black w-full">
          {/* <img src={"https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg"} alt="/" /> */}
          <img className="h-[250px] transition-transform ease-in-out duration-100 hover:scale-95" src={"/images/" + props.data.image} alt="/" />
        </div>
        <div className="flex flex-col gap-1 my-3">
          <p style={{ fontWeight: "bold" }}>{props.data.title}</p>
          <p style={{ fontSize: "12px" }}>{props.data.description}</p>
          <p>${props.data.price}</p>
        </div>
      </div>
    </>
  );
}

export default RecProd;
