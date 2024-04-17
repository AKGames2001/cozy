import React from "react";
// import "../../../styles/Homepage/adBanner.css";

function AdBanner() {
  return <>
    <div className="flex h-[400px] w-full justify-center object-cover bg-adBanner">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-[rgba(139,164,98,0.75)] text-white gap-10">
            <h1 className="text-3xl md:text-6xl w-full flex flex-col justify-center items-center">Your Best Value<span>Proposition</span></h1>
            <h2 className="text-2xl md:text-4xl font-bold">15% OFF</h2>
            <button className="bg-[#90133b] text-white font-normal py-3 px-6 md:px-12 w-2/5 rounded">View More</button>
        </div>
    </div>
  </>;
}

export default AdBanner;
