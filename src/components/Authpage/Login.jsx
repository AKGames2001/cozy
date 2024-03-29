import React, { useState } from "react";
import "../../resources/css/Authpage/auth.css";
import cozyImage from "../../resources/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Login(props) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  //   const urlParams = new URLSearchParams(window.location.search);
  //   if (urlParams !== "") {
  //     setAuth(urlParams.get("auth"));
  //   } else {
  //     setAuth(false);
  //   }

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
          props.auth();
          navigate("/");
        } else {
          setPassword("");
          alert("Password incorrect");
        }
      });
  }

  return (
    <div className="auth">
      <div className="auth-header">
        <img src={cozyImage} alt="/" />
        <div className="auth-title">
          <h3>Sign in or create your account</h3>
          <p>Not sure if you have an account?</p>
          <p>Enter your email and we’ll check for you</p>
        </div>
        <div className="auth-form">
          <form method="post" onSubmit={submitHandler}>
            <label
              htmlFor="email"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-input-field"
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
              className="form-input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="form-submit-btn">
              Continue
            </button>
          </form>
        </div>
        <div className="auth-info">
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
