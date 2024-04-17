import React, { useState } from "react";
// import cozyImage from "../../../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function submitHandler(e) {
    e.preventDefault();
    fetch(process.env.REACT_APP_BASE_URL + "api/auth/register", {
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
    <form
      className="flex flex-col w-full gap-1"
      method="post"
      onSubmit={submitHandler}
    >
      <label htmlFor="username" style={{ fontSize: "12px", fontWeight: "600" }}>
        Username
      </label>
      <input
        name="username"
        className="h-8 border-[1px] border-gray-300 border-solid rounded px-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="email" style={{ fontSize: "12px", fontWeight: "600" }}>
        Email
      </label>
      <input
        type="email"
        name="email"
        className="h-8 border-[1px] border-gray-300 border-solid rounded px-2"
        value={location.state.email}
        disabled
      />
      <label htmlFor="password" style={{ fontSize: "12px", fontWeight: "600" }}>
        Password
      </label>
      <input
        type="password"
        name="password"
        className="h-8 border-[1px] border-gray-300 border-solid rounded px-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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

export default Register;
