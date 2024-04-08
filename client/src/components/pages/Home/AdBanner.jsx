import React from "react";
// import "../../../styles/Homepage/adBanner.css";

function AdBanner() {
  return <>
    <div className="flex h-[400px] w-full justify-center object-cover bg-adBanner">
        <div className="flex flex-col items-center justify-center w-1/2 bg-[rgba(139,164,98,0.75)] text-white gap-10">
            <h1 className="text-4xl">Your Best Value Proposition</h1>
            <h2>15% OFF</h2>
            <button className="bg-[#6B240C] text-white font-normal py-3 px-12 rounded">View More</button>
        </div>
    </div>
  </>;
}

export default AdBanner;
