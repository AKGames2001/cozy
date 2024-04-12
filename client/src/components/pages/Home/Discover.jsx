import React from "react";
// import "../../../styles/Homepage/discover.css";

function Discover() {
  return (
    <>
      <div className="flex flex-col w-full items-center py-8">
        <h3 className="text-2xl">Discover More</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center">
          <div className="bg-discover-1 bg-center bg-no-repeat bg-cover w-[350px] h-[350px] m-3">
            <div className="flex justify-center items-center h-full w-full cursor-pointer transition-colors ease-in-out duration-100 hover:bg-[rgba(139,164,98,0.6)]">
              <p className="hidden text-base text-white hover:block">
                Latest Rose Deals
              </p>
            </div>
          </div>
          <div className="bg-discover-2 bg-center bg-no-repeat bg-cover w-[350px] h-[350px] m-3">
            <div className="flex justify-center items-center h-full w-full cursor-pointer transition-colors ease-in-out duration-100 hover:bg-[rgba(139,164,98,0.6)] image-hover">
              <p className="hidden text-base text-white hover:block text-hover">
                Latest Rose Deals
              </p>
            </div>
          </div>
          <div className="bg-discover-3 bg-center bg-no-repeat bg-cover w-[350px] h-[350px] m-3">
            <div className="flex justify-center items-center h-full w-full cursor-pointer transition-colors ease-in-out duration-100 hover:bg-[rgba(139,164,98,0.6)]">
              <p className="hidden text-base text-white hover:block">
                Latest Rose Deals
              </p>
            </div>
          </div>
          <div className="bg-discover-4 bg-center bg-no-repeat bg-cover w-[350px] h-[350px] m-3">
            <div className="flex justify-center items-center h-full w-full cursor-pointer transition-colors ease-in-out duration-100 hover:bg-[rgba(139,164,98,0.6)]">
              <p className="hidden text-base text-white hover:block">
                Latest Rose Deals
              </p>
            </div>
          </div>
          <div className="bg-discover-5 bg-center bg-no-repeat bg-cover w-[350px] h-[350px] m-3">
            <div className="flex justify-center items-center h-full w-full cursor-pointer transition-colors ease-in-out duration-100 hover:bg-[rgba(139,164,98,0.6)]">
              <p className="hidden text-base text-white hover:block">
                Latest Rose Deals
              </p>
            </div>
          </div>
          <div className="bg-discover-6 bg-center bg-no-repeat bg-cover w-[350px] h-[350px] m-3">
            <div className="flex justify-center items-center h-full w-full cursor-pointer transition-colors ease-in-out duration-100 hover:bg-[rgba(139,164,98,0.6)]">
              <p className="hidden text-base text-white hover:block">
                Latest Rose Deals
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
