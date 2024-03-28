import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Authpage/Login";
import Register from "../Authpage/Register";

function AuthRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
      </Routes>
    </>
  );
}

export default AuthRoutes;
