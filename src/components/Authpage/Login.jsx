import React, { useState } from "react";
import "../../resources/css/Authpage/auth.css";
import cozyImage from "../../resources/images/logo.png";
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
    <div className="auth">
      <div className="auth-header">
        <img src={cozyImage} alt="/" />
        <div className="auth-title">
          <h3>
            Welcome Back! {capitalizeFirstLetter(location.state.username)}
          </h3>
          <p>Login to your account to enjoy our service</p>
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
          <div className="password-checker">
            <div className="password-checker-bg">
              <div className="password-checker-item">
                <TiTick />
                <p>Min. 8 Characters</p>
              </div>
              <div className="password-checker-item">
                <TiTick />
                <p>Contains alphabets & numbers</p>
              </div>
              <div className="password-checker-item">
                <TiTick />
                <p>Contains special character</p>
              </div>
            </div>
          </div>
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
