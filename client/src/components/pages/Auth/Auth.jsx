import React, { useState } from "react";
// import cozyImage from "../../../assets/images/logo.png";
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
          navigate("/auth/login", {
            state: { email: email, username: data.username },
          });
        } else {
          navigate("/auth/register", { state: { email: email } });
        }
      });
  }

  return (
    <form
      className="flex flex-col w-full gap-1"
      method="post"
      onSubmit={submitHandler}
    >
      <label htmlFor="email" style={{ fontSize: "12px", fontWeight: "600" }}>
        Email Address
      </label>
      <input
        type="email"
        name="email"
        className="h-8 border-[1px] border-gray-300 border-solid rounded px-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="flex justify-center w-auto bg-[#6B240C] text-white mt-3 py-3 px-1 rounded cursor-pointer"
      >
        Continue
      </button>
    </form>
  );
}

export default Auth;
