import React from "react";

import {
  AiFillGoogleCircle,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";

const Login = () => {
  const google = () => {
    window.open(`https://oauth-passport-cookie-backend.vercel.app/google`, "_self");
  };
  const github = () => {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/github`, "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton">
            <div className="loginIndividual facebook ">
              <AiFillFacebook className="icon" /> Facebook
            </div>
            <div className="loginIndividual google " onClick={google}>
              <AiFillGoogleCircle className="icon" /> Google
            </div>
            <div className="loginIndividual github " onClick={github}>
              <AiFillGithub className="icon" /> Github
            </div>
          </div>
        </div>
        <div className="center">
          <div className="line"></div>
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            className="input"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Password"
            className="input"
          />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
