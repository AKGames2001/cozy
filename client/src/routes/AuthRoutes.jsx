import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../components/pages/Auth/Auth";
import Login from "../components/pages/Auth/Login";
import Register from "../components/pages/Auth/Register";

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