import React, { useState } from "react";
// import cozyImage from "../../../assets/images/logo.png";
import { authCheck } from "../../../services/authService";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // function validator() {

  // }

  async function submitHandler(e) {
    e.preventDefault();
    const userData = { email: email };
    const authData = await authCheck(userData);
    console.log(authData);
    console.log(userData);

    if (authData.statusCode === "200") {
      console.log("mai yaha hooon!!");
      navigate("/auth/login", {
        state: { email: email, username: authData.username },
      });
    } else {
      navigate("/auth/register", { state: { email: email } });
    }
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
