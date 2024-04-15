import React from "react";
import Footer from "../components/layout/Footer.jsx";
import HomePage from "../containers/Home/HomePage.jsx";
import { Routes, Route } from "react-router-dom";

function HomeRoutes(props) {
  return (
    <>
      <Routes>
        {/* Route: / */}
        <Route path="/" element={<HomePage userStatus={props.userStatus} auth={props.auth} />} />

        {/* Route: /abx */}
        <Route path="/abx" element={<HomePage userStatus={props.userStatus} auth={props.auth}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default HomeRoutes;
