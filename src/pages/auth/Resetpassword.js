import React from "react";
import "./components/auth.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";


const Resetpassword = () => {
  return (
    <div className="signinContainer">
    <div className="loginLeft">
      <p className="wee1"></p>
      <p className="wee2"></p>
      <p className="wee5"></p>
      <p className="wee6"></p>
    </div>
    <div className="authForget">
    <div className="forgotHeader">
        <h1>SocialDash</h1>
        <img src={Logo} alt='' />
      </div>
      <h1>Reset Password</h1>
      <div className="formInput">
                  <input
                    type="password"
                    required
                    label="Password"
                    autoComplete="current-password"
                    placeholder=" old Password"
                  />
                </div>
      <div className="formInput">
                  
                  <input
                    type="password"
                    required
                    label="Password"
                    autoComplete="current-password"
                    placeholder="new Password"
                  />
                </div>
                <div className="formInput">
                   <input
                    type="password"
                    required
                    label="Password"
                    autoComplete="current-password"
                    placeholder="Password"
                  />
                </div>
      <Link to="/">
        <button className="loginButton">Submit</button>
      </Link>
    </div>
  </div>
  );
};

export default Resetpassword;
