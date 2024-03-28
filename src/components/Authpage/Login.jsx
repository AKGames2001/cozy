import React, { useState } from "react";
import "../../resources/css/Authpage/auth.css";
import cozyImage from "../../resources/images/logo.png";

function Login() {
  const [auth, setAuth] = useState(false);
//   const urlParams = new URLSearchParams(window.location.search);
//   if (urlParams !== "") {
//     setAuth(urlParams.get("auth"));
//   } else {
//     setAuth(false);
//   }

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
          {auth ? (
            <form method="post" action="http://localhost:5000/api/auth/login">
              <label
                htmlFor="password"
                style={{ fontSize: "12px", fontWeight: "600" }}
              >
                Password
              </label>
              <input name="password" className="form-input-field" />
              <button type="submit" className="form-submit-btn">
                Continue
              </button>
            </form>
          ) : (
            <form method="post" action="http://localhost:5000/api/auth/login">
              <label
                htmlFor="email"
                style={{ fontSize: "12px", fontWeight: "600" }}
              >
                Email Address
              </label>
              <input name="email" className="form-input-field" />
              <button type="submit" className="form-submit-btn" onClick={() => setAuth(true)}>
                Continue
              </button>
            </form>
          )}
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
