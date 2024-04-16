import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();

  function redirectProduct(e) {
    e.preventDefault();
    console.log(e.target.parentNode.parentNode.id);
    navigate("/product/custom", {
      state: { id: e.target.parentNode.parentNode.id },
    });
  }

  return (
    <>
      <div
        className="flex flex-col w-full cursor-pointer"
        key={props.data.id}
        onClick={redirectProduct}
        id={props.data.id}
      >
        <div className="flex items-center justify-center relative border-[1px] border-solid border-black w-full overflow-hidden image-hover">
          {/* <img src={"https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_props.datactronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg"} alt="/" /> */}
          <img
            className="h-[250px] transition-transform ease-in-out duration-100"
            src={"/images/" + props.data.image}
            alt="/"
          />
          <div className="absolute bottom-4 right-4 bg-[#c4c4c4] rounded-full p-2">
            <FaRegHeart className="text-[#555555]" />
          </div>
          <div className="absolute flex w-full h-14 item-hover bg-white text-white gap-[2px]">
            <MdOutlineShoppingCart className="bg-[#90133b] w-1/2 h-full p-4 hover:bg-[#90133be3]" />
            <FaRegHeart className="bg-[#90133b] w-1/2 h-full p-4 hover:bg-[#90133be3]" />
          </div>

          {/* <FaRegHeart className="absolute bottom-4 right-4 bg-gray-500 rounded-full w-6 h-6 p-1 " /> */}
        </div>
        <div className="flex flex-col gap-1 my-3">
          <p style={{ fontWeight: "bold" }}>{props.data.title}</p>
          <p style={{ fontSize: "12px" }}>
            {props.data.description.substring(0, 80)}
          </p>
          <div>
            <StarRating rating={4}/>
          </div>
          <p>${props.data.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
