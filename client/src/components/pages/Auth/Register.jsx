import React, { useState } from "react";
import cozyImage from "../../../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function submitHandler(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: location.state.email,
        password: password,
      }),
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
          alert("password incorrect");
        }
      });
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center w-1/2 gap-6">
        <img src={cozyImage} alt="/" />
        <div className="flex flex-col items-center w-1/2">
          <h3 className="text-2xl p-5">Sign in or create your account</h3>
          <p className="text-sm p-[2px]">Not sure if you have an account?</p>
          <p className="text-sm p-[2px]">Enter your email and we’ll check for you</p>
        </div>
        <div className="flex flex-col items-center w-1/2 gap-6">
          <form className="flex flex-col w-full gap-1" method="post" onSubmit={submitHandler}>
            <label
              htmlFor="username"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Username
            </label>
            <input
              name="username"
              className="h-8 border-[1px] border-gray-300 border-solid rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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

export default Register;
