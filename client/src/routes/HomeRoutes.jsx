import React from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import HomePage from "../containers/Home/HomePage.jsx";
import { Routes, Route } from "react-router-dom";

function HomeRoutes(props) {
  return (
    <>
      <Navbar  userStatus={props.userStatus} auth={props.auth}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/abx" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default HomeRoutes;
