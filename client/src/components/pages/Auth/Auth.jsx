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
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default Auth;
