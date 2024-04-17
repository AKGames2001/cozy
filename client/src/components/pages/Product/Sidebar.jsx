import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdSearch } from "react-icons/md";

function Sidebar() {
  return (
    <>
      <div className="w-full md:w-3/12 p-4">
        <div
          className="flex items-center gap-2 p-4 border-[1px] border-solid border-gray-200 md:border-none md:p-0 md:justify-between font-bold"
          onClick={() => {
            const menu = document.querySelector("#mobile-filter");
            if (menu.classList.contains("hidden")) {
              menu.classList.remove("hidden");
            } else {
              menu.classList.add("hidden");
            }
          }}
        >
          <h1 className="text-lg">Filters</h1>
          <IoIosArrowDown className="block md:hidden" />
          <p className="hidden md:block font-bold text-[#90133b] cursor-pointer">
            Clear All
          </p>
        </div>
        <div id="mobile-filter">
          <div className="border-[1px] border-gray-200 border-solid p-2">
            <div className="flex justify-between items-center">
              <p className="font-roboto font-medium">Color</p>
              <MdSearch />
            </div>
            <div>
              <ul className="flex flex-col">
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  White
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Red
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Sparkling
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Rose
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Dessert Wine
                </li>
              </ul>
            </div>
          </div>
          <div className="border-[1px] border-gray-200 border-solid p-2">
            <div className="flex justify-between items-center">
              <input placeholder="Search Origin" type="text" />
              <MdSearch />
            </div>
            <div>
              <ul className="flex flex-col">
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  France
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Italy
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Spain
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Australia
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  New Zealand
                </li>
                <li className="flex items-center gap-2 text-sm">+ 20 More</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
