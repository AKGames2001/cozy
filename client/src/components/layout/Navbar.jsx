import React from "react";
import { GrSearch } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import LogoImg from "../../assets/images/logo.png";
import { useNavigate, Link } from "react-router-dom";

function Navbar(props) {
  const naviagte = useNavigate();
  console.log("user", props.userStatus);
  return (
    <>
      <div className="flex flex-col items-center w-full bg-[#f9e4d4] py-[10px] gap-3">
        <div className="flex w-4/5 justify-between items-center">
          <img className="h-[50px] w-auto" src={LogoImg} alt="/"></img>
          <div className="flex gap-5">
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
        <div className="flex w-4/5 justify-center gap-8">
          <Link className="no-underline text-lg text-[#000000]" to="/">Home</Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">Offers</Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">Mixed Cases</Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">Wine Club</Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">Gifts</Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">Events and Services</Link>
          <Link className="no-underline text-lg text-[#000000]" to="/">Advice</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
