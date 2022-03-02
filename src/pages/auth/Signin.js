import React, { useEffect, useState } from "react";
import "./components/auth.css";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const Signin = () => {
  const navigation = useNavigate()
  const [data, setData] = useState({
   email: '', password: ''
  });
  const [validationFired, setValidationFired] = useState(false);
  const [errors, setErrors] = useState({});
  
  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }
  
  function validate() {
    setValidationFired(true);
    let validated = true;
    let errors = {};
    Object.keys(data).forEach((field) => {
      if (data[field] === "") {
        errors[field] = `${field} is required`;
        validated = false;
      }
      if (field === "email") {
        const test =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email);
      if (!test) {
          errors["email"] = "Email Doesn't match";
          validated = false;
        }
      }
    });
    setErrors(errors);
    return validated;
  }

  useEffect(() => {
    if (validationFired) {
      validate();
    }
  }, [validationFired, data]);

  function handleSubmit(e) {
    e.preventDefault();
    let test = validate();
    if (test) {
      navigation('/admin/dashboard')
      console.log(data);
    }
  }

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
        <Form>
          <div className="row loginContainer">
            <div className="col-sm form">
              <div className="formContainer">
                <div className="formInput">
                  <p>Email</p>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    autoFocus
                    placeholder="test@testing.com"
                    name="email"
          value={data?.email}
          onChange={handleChange}
        />
        {errors?.email && <p className="error">{errors.email}</p>}
        
                    
                </div>
                <div className="formInput">
                  <p>Password</p>
                  <input
                    type="password"
                    required
                    label="Password"
                    autoComplete="current-password"
                    placeholder="Password"
                    name="password"
                    value={data?.password}
                    onChange={handleChange}
                  />
                  {errors?.password && <p className="error">{errors.password}</p>}
          
                </div>
                <div className="formCheck authLinks">
                  <input type="checkbox" />
                  <label className="authLinks">Remember me</label>
                </div>
                {/* <Link to='/admin/dashboard'> */}
                  <button onClick={handleSubmit} className="loginButton">Login</button>
                {/* </Link> */}
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
        </Form>
      </div>
    </div>
  );
};

export default Signin;
