import React, { useState } from "react";
// import "../../../styles/Authpage/auth.css";
import cozyImage from "../../../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";

function Login(props) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function submitHandler(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: location.state.email, password: password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.statusCode === "200") {
          props.auth(location.state.email);
          navigate("/");
        } else {
          setPassword("");
          alert("Password incorrect");
        }
      });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center w-1/2 gap-6">
        <img src={cozyImage} alt="/" />
        <div className="flex flex-col items-center w-1/2">
          <h3 className="text-2xl p-5">
            Welcome Back! {capitalizeFirstLetter(location.state.username)}
          </h3>
          <p className="text-sm p-[2px]">Login to your account to enjoy our service</p>
        </div>
        <div className="flex flex-col items-center w-1/2 gap-6">
          <form className="flex flex-col w-full gap-1" method="post" onSubmit={submitHandler}>
            <label
              htmlFor="email"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="h-8 border-[1px] border-gray-300 border-solid rounded"
              value={location.state.email}
              disabled
            />
            <label
              htmlFor="password"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="h-8 border-[1px] border-gray-300 border-solid rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="flex justify-center w-auto bg-[#6B240C] text-white mt-3 py-3 px-1 rounded cursor-pointer">
              Continue
            </button>
          </form>
          <div className="flex w-full bg-[#88665a7c] rounded-2xl">
            <div className="flex flex-col justify-center items-start w-full rounded-xl m-3 p-3 gap-3 bg-[#ebebeb]">
              <div className="flex gap-1 text-sm">
                <TiTick />
                <p>Min. 8 Characters</p>
              </div>
              <div className="flex gap-1 text-sm">
                <TiTick />
                <p>Contains alphabets & numbers</p>
              </div>
              <div className="flex gap-1 text-sm">
                <TiTick />
                <p>Contains special character</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs">
          <p>
            By continuing, you agree to Cozy's Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
      <div className="auth-footer"></div>
    </div>
  );
}

export default Login;
