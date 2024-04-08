import React, { useState } from "react";
import cozyImage from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // function validator() {
    
  // }

  function submitHandler(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.statusCode === "200") {
          navigate("/auth/login", { state: { email: email, username: data.username } });
        } else {
          navigate("/auth/register", { state: { email: email } });
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
              htmlFor="email"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="h-8 border-[1px] border-gray-300 border-solid rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
      <div className=""></div>
    </div>
  );
}

export default Auth;
