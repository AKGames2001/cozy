import React from "react";
import { GrSearch } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import LogoImg from "../resources/images/logo.png";
import "../resources/css/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const naviagte = useNavigate();
  console.log("user",props.userStatus);
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-upper">
          <img src={LogoImg} alt="/"></img>
          <div className="nav-icons">
            <div className="nav-icon">
              <GrSearch />
              <p>Search</p>
            </div>
            {props.userStatus ? (
              <>
                <div className="nav-icon">
                  <CgProfile />
                  <p>Profile</p>
                </div>
                <div
                  className="nav-icon"
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
                  className="nav-icon"
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

            <div className="nav-icon">
              <MdOutlineShoppingCart />
              <p>Cart</p>
            </div>
            <div className="nav-icon">
              <FaRegHeart />
              <p>Wishlist</p>
            </div>
          </div>
        </div>
        <div className="nav-bar-lower">
          <a href="example.com">Home</a>
          <a href="example.com">Offers</a>
          <a href="example.com">Mixed Cases</a>
          <a href="example.com">Wine Club</a>
          <a href="example.com">Gifts</a>
          <a href="example.com">Events and Services</a>
          <a href="example.com">Advice</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
