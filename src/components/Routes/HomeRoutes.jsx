import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomePage from "../Homepage/HomePage";
import { Routes, Route } from "react-router-dom";

function HomeRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/abx" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default HomeRoutes;
