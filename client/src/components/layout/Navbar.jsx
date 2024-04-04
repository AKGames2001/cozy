import React from "react";
import { GrSearch } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import LogoImg from "../../assets/images/logo.png";
import "../../styles/navbar.css";
import { useNavigate, Link } from "react-router-dom";

function Navbar(props) {
  const naviagte = useNavigate();
  console.log("user", props.userStatus);
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

            <div
              className="nav-icon"
              onClick={(e) => {
                e.preventDefault();
                props.userStatus ? naviagte("/cart") : naviagte("/auth");
              }}
            >
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
          <Link to="/">Home</Link>
          <Link to="/">Offers</Link>
          <Link to="/">Mixed Cases</Link>
          <Link to="/">Wine Club</Link>
          <Link to="/">Gifts</Link>
          <Link to="/">Events and Services</Link>
          <Link to="/">Advice</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
