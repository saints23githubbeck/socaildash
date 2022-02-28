import React from "react";
import "./components/auth.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";


const Signup = () => {

  return (
  <div>
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
        <h1>Sign Up</h1>
        <div>
          
             <div className="row loginContainer">
            <div className="col-sm form">
              <div className="formContainer">
                <div className="nameInput">
                <div className="formName">
                  <p>First Name</p>
                  <input
                  type="text"
                    required
                    autoComplete="name"
                    autoFocus
                    placeholder="First Name"
                  />
                </div>
                <div className="formName">
                  <p>Last Name</p>
                  <input
                   type="text"
                   required
                   autoComplete="name"
                   autoFocus
                   placeholder="First Name"
                  />
                </div>
                </div>
               
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
                <div className="formInput">
                  <p>Confirm Password</p>
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
                  <label className="authLinks">Accept terms and privacy</label>
                </div>
                <Link to='/admin/dashboard'>
                  <button className="loginButton">Sign Up</button>
                </Link>
                <p className="authLinks">
                  Already have an account?
                  <Link to="/" className="authLink">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  );
};

export default Signup;
