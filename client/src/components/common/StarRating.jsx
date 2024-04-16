import React from "react";
import { IoStarOutline } from "react-icons/io5";
// import { IoStarHalf } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

function StarRating(props) {
  let maxRating = 5;

  function mapRating() {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        props.rating >= i + 1 ? <IoStar key={i} /> : <IoStarOutline key={i} />
      );
    }
    return stars;
  }
  return <div className="flex text-[#757575] text-lg gap-[2px]">{mapRating()}</div>;
}

export default StarRating;
