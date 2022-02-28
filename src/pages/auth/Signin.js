import React from "react";
import "./components/auth.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="signinContainer">
      <div className="loginLeft">
        <p className="wee1"></p>
        <p className="wee2"></p>
        <p className="wee3"></p>
        <p className="wee4"></p>
      </div>
      <div className="loginRight">
        <div className="formHeader">
          <h1>SocialDash</h1>
          <img src={Logo} alt="" />
        </div>
        <h1>Login</h1>
        <div>
          <div className="row loginContainer">
            <div className="col-sm form">
              <div className="formContainer">
                <div className="formInput">
                  <p>Email</p>
                  <input
                    type="email"
                    required
                    id="email"
                    autoComplete="email"
                    autoFocus
                    placeholder="test@testing.com"
                  />
                </div>
                <div className="formInput">
                  <p>Password</p>
                  <input
                    type="password"
                    required
                    label="Password"
                    autoComplete="current-password"
                    placeholder="Password"
                  />
                </div>
                <div className="formCheck authLinks">
                  <input type="checkbox" />
                  <label className="authLinks">Remember me</label>
                </div>
                <Link to='/admin/dashboard'>
                  <button className="loginButton">Login</button>
                </Link>
                <p className="authLinks">
                  <Link to="/forgot" className="authLink  ">
                    Forgot Password?
                  </Link>
                </p>
                <p className="authLinks">
                  Dont have an account?
                  <Link to="/signup" className="authLink">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
