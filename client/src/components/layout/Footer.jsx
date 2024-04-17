import React from "react";
import { IoMdCard } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-left bg-[#8ba462] w-full h-full py-3 md:h-[100px]  md:flex-row md:justify-evenly md:items-center">
        <div className="flex items-center gap-2 px-2 text-white md:px-0">
          <IoMdCard className="text-2xl" />
          <div className="flex text-sm gap-3 md:block md:gap-0">
            <p className="font-roboto">Free Delivery</p>
            <p className="font-roboto">From $50 & Up</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 text-white md:px-0">
          <IoMdCard className="text-2xl" />
          <div className="flex text-sm gap-3 md:block md:gap-0">
            <p className="font-roboto">Free Delivery</p>
            <p className="font-roboto">From $50 & Up</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 text-white md:px-0">
          <IoMdCard className="text-2xl" />
          <div className="flex text-sm gap-3 md:block md:gap-0">
            <p className="font-roboto">Free Delivery</p>
            <p className="font-roboto">From $50 & Up</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 text-white md:px-0">
          <IoMdCard className="text-2xl" />
          <div className="flex text-sm gap-3 md:block md:gap-0">
            <p className="font-roboto">Free Delivery</p>
            <p className="font-roboto">From $50 & Up</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 text-white md:px-0">
          <IoMdCard className="text-2xl" />
          <div className="flex text-sm gap-3 md:block md:gap-0">
            <p className="font-roboto">Free Delivery</p>
            <p className="font-roboto">From $50 & Up</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 text-white md:px-0">
          <IoMdCard className="text-2xl" />
          <div className="flex text-sm gap-3 md:block md:gap-0">
            <p className="font-roboto">Free Delivery</p>
            <p className="font-roboto">From $50 & Up</p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-cols-4 w-full py-2 px-4">
        <div className="flex flex-col w-full justify-center py-10 md:col-span-1 md:pl-[25%]">
          <h3 className="font-bold text-3xl pb-2">COZY</h3>
          <p className="font-roboto">+91-1234567890</p>
          <p className="font-roboto">221B Baker Street</p>
        </div>
        <div className="grid grid-rows-3 grid-cols-2 text-sm gap-8 md:col-span-3 md:grid-cols-5 md:grid-rows-1 md:py-8">
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-roboto font-bold">About Us</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="font-roboto cursor-pointer hover:font-semibold">Company</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">News</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Investors</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Careers</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Government Relations</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Policies</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="footer-section-header">
              <p className="font-roboto font-bold">Shop By Category</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="font-roboto cursor-pointer hover:font-semibold">Today's Deal</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Best Seller</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">New Arrivals</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Top Rated</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Popular</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Featured</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="footer-section-header">
              <p className="font-roboto font-bold">Support & Service</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="font-roboto cursor-pointer hover:font-semibold">Customer Service</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Protection Plan</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Schedule a Service</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Track-in Program</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Product Recalls</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">FAQ</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="footer-section-header">
              <p className="font-roboto font-bold">Partnership</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="font-roboto cursor-pointer hover:font-semibold">Affliate Program</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Developers</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Mediamarket Ignite</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Media Market for Education</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Media Market Direct</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Advertise with Us</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="footer-section-header">
              <p className="font-roboto font-bold">Customer Care</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="font-roboto cursor-pointer hover:font-semibold">My Accounts</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Track Orders</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Shop</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Wishlist</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Compare</p>
              <p className="font-roboto cursor-pointer hover:font-semibold">Returns/Exchange</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full pt-[30px] pb-[50px]">
        <div className="flex flex-col md:flex-row gap-3">
          <input className="border-2 border-solid rounded p-2 w-[80vw] md:w-auto font-roboto" placeholder="Email"/>
          <button className="font-roboto bg-[rgb(82,82,82)] hover:bg-[rgb(59,59,59)] text-white px-3 py-1 md:px-6 md:py-2 text-3 rounded cursor-pointer">Subscribe</button>
        </div>
        <p className="font-roboto p-3 flex cursor-none text-xs font-semibold">
          Copyright<FaRegCopyright /> Aditya Kore 2024
        </p>
      </div>
    </>
  );
}

export default Footer;
