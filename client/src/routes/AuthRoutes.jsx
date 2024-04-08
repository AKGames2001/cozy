import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../components/pages/Auth/Auth";
import Login from "../components/pages/Auth/Login";
import Register from "../components/pages/Auth/Register";
import cozyImage from "../assets/images/logo.png";

function AuthRoutes({ authLogin }) {
  console.log(authLogin);
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col items-center justify-center md:justify-normal md:h-full">
        <div className="flex flex-col items-center w-full gap-6 md:w-1/2">
          <img className="w-auto h-[100px] md:h-auto" src={cozyImage} alt="/" />
          <div className="flex flex-col items-center w-4/5 md:w-1/2">
            <h3 className="text-2xl p-5">Sign in or create your account</h3>
            <p className="text-sm p-[2px]">Not sure if you have an account?</p>
            <p className="text-sm p-[2px]">
              Enter your email and we’ll check for you
            </p>
          </div>

          <div className="flex flex-col items-center w-1/2 gap-6">
            <Routes>
              
              {/* Route: /auth */}
              <Route index element={<Auth />}></Route>

              {/* Route: /auth/login */}
              <Route path="/login" element={<Login auth={authLogin} />}></Route>

              {/* Route: /auth/register */}
              <Route
                path="/register"
                element={<Register auth={authLogin} />}
              ></Route>

            </Routes>
          </div>

          <div className="text-xs">
            <p>
              By continuing, you agree to Cozy's Terms of Use and Privacy
              Policy.
            </p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default AuthRoutes;
