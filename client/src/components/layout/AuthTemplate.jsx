import React from "react";
import cozyImage from "../../assets/images/logo.png";

function AuthTemplate(props) {
    console.log(props.form)
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center w-1/2 gap-6">
        <img src={cozyImage} alt="/" />
        <div className="flex flex-col items-center w-1/2">
          <h3 className="text-2xl p-5">Sign in or create your account</h3>
          <p className="text-sm p-[2px]">Not sure if you have an account?</p>
          <p className="text-sm p-[2px]">
            Enter your email and we’ll check for you
          </p>
        </div>
        <div className="flex flex-col items-center w-1/2 gap-6">
          {props.form}
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

export default AuthTemplate;
