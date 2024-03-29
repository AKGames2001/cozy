import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../Authpage/Auth";
import Login from "../Authpage/Login";
import Register from "../Authpage/Register";

function AuthRoutes({authLogin}) { 
  console.log(authLogin)
  return (
    <>
      <Routes>
        <Route index element={<Auth />}></Route>
        <Route path="/login" element={<Login auth={authLogin}/>}></Route>
        <Route path="/register" element={<Register auth={authLogin}/>}></Route>
      </Routes>
    </>
  );
}

export default AuthRoutes;
