import React, { useDebugValue, useEffect } from "react";
import { GrSearch } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import LogoImg from "../../assets/images/logo.png";
import { useNavigate, Link } from "react-router-dom";

function Navbar(props) {
  const naviagte = useNavigate();
  console.log("user", props.userStatus);

  return (
    <>
      <div className="flex w-full justify-between items-center h-6 p-4 bg-[#8ba462] text-white font-roboto">
        <div className="flex gap-6">
          <div className="flex gap-1 items-center cursor-pointer"><MdOutlineLocalPhone />Phone Number</div>
          <div className="flex gap-1 items-center cursor-pointer"><MdOutlineEmail />Email ID</div>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-1 cursor-pointer">Deals from Down Under</div>
          <div className="flex gap-1 cursor-pointer">Welcome Offer</div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-[#f9e4d4] py-[10px] gap-3">
        <div className="flex w-4/5 justify-between items-center">
          <img className="h-[50px] w-auto" src={LogoImg} alt="/"></img>
          <IoMenu
            className="text-3xl cursor-pointer md:hidden text-[#9c6d65]"
            id="burger"
            onClick={() => {
              const menu = document.querySelector("#mobile-menu");
              if (menu.classList.contains("hidden")) {
                menu.classList.remove("hidden");
              } else {
                menu.classList.add("hidden");
              }
            }}
          />
          <div className="hidden gap-5 md:flex">
            <div className="flex flex-col gap-1 justify-center items-center text-lg cursor-pointer">
              <GrSearch />
              <p className="text-xs">Search</p>
            </div>
            {props.userStatus ? (
              <>
                <div className="flex flex-col gap-1 justify-center items-center text-lg cursor-pointer">
                  <CgProfile />
                  <p className="text-xs">Profile</p>
                </div>
                <div
                  className="flex flex-col gap-1 justify-center items-center text-lg cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    props.auth(false);
                    naviagte("/");
                  }}
                >
                  <LuLogOut />
                  <p className="text-xs">Logout</p>
                </div>
              </>
            ) : (
              <>
                <div
                  className="flex flex-col gap-1 justify-center items-center text-lg cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    naviagte("/auth");
                  }}
                >
                  <LuLogIn />
                  <p className="text-xs">Login</p>
                </div>
              </>
            )}
            <div
              className="flex flex-col gap-1 justify-center items-center text-lg cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                props.userStatus ? naviagte("/cart") : naviagte("/auth");
              }}
            >
              <MdOutlineShoppingCart />
              <p className="text-xs">Cart</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center text-lg cursor-pointer">
              <FaRegHeart />
              <p className="text-xs">Wishlist</p>
            </div>
          </div>
        </div>
        <div
          className="hidden flex-col w-4/5 md:hidden border-b-4 border-dotted border-[#fabed4]"
          id="mobile-menu"
        >
          <div className="flex py-3 gap-4 justify-left items-center text-xl cursor-pointer border-b-[1px] border-solid border-[rgb(250,190,212)]">
            <GrSearch />
            <p>Search</p>
          </div>
          {props.userStatus ? (
            <>
              <div className="flex py-3 gap-4 justify-left items-center text-xl cursor-pointer border-b-[1px] border-solid border-[rgb(250,190,212)]">
                <CgProfile />
                <p>Profile</p>
              </div>
              <div
                className="flex py-3 gap-4 justify-left items-center text-xl cursor-pointer border-b-[1px] border-solid border-[rgb(250,190,212)]"
                onClick={(e) => {
                  e.preventDefault();
                  props.auth(false);
                  naviagte("/");
                }}
              >
                <LuLogOut />
                <p>Logout</p>
              </div>
            </>
          ) : (
            <>
              <div
                className="flex py-3 gap-4 justify-left items-center text-xl cursor-pointer border-b-[1px] border-solid border-[rgb(250,190,212)]"
                onClick={(e) => {
                  e.preventDefault();
                  naviagte("/auth");
                }}
              >
                <LuLogIn />
                <p>Login</p>
              </div>
            </>
          )}
          <div
            className="flex py-3 gap-4 justify-left items-center text-xl cursor-pointer border-b-[1px] border-solid border-[rgb(250,190,212)]"
            onClick={(e) => {
              e.preventDefault();
              props.userStatus ? naviagte("/cart") : naviagte("/auth");
            }}
          >
            <MdOutlineShoppingCart />
            <p>Cart</p>
          </div>
          <div className="flex py-3 gap-4 justify-left items-center text-xl cursor-pointer border-b-[1px] border-solid border-[rgb(250,190,212)]">
            <FaRegHeart />
            <p>Wishlist</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-3 py-5">
            <Link
              className="no-underline text-[#000000] flex text-base bg-white py-2 px-2 drop-shadow-md"
              to="/"
            >
              Home
            </Link>
            <Link
              className="no-underline text-[#000000] flex text-base bg-white py-2 px-2 drop-shadow-md"
              to="/"
            >
              Offers
            </Link>
            <Link
              className="no-underline text-[#000000] flex text-base bg-white py-2 px-2 drop-shadow-md"
              to="/"
            >
              Mixed Cases
            </Link>
            <Link
              className="no-underline text-[#000000] flex text-base bg-white py-2 px-2 drop-shadow-md"
              to="/"
            >
              Wine Club
            </Link>
            <Link
              className="no-underline text-[#000000] flex text-base bg-white py-2 px-2 drop-shadow-md"
              to="/"
            >
              Gifts
            </Link>
            <Link
              className="no-underline text-[#000000] flex text-base bg-white py-2 px-2 drop-shadow-md"
              to="/"
            >
              Events and Services
            </Link>
            <Link
              className="no-underline text-[#000000] flex text-base bg-white py-2 px-2 drop-shadow-md"
              to="/"
            >
              Advice
            </Link>
          </div>
        </div>
        <div className="hidden md:flex w-4/5 justify-center gap-8">
          <Link className="no-underline text-lg text-[#000000]" to="/">
            Home
          </Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">
            Offers
          </Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">
            Mixed Cases
          </Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">
            Wine Club
          </Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">
            Gifts
          </Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">
            Events and Services
          </Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">
            Advice
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
