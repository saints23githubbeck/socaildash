import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./components/auth.css";
import AuthModal from "./components/AuthModal";

const Forgot = () => {
   const [showModal, setShowModal] = useState(false);
   const [modalItem, setModalItem] = useState('')
  
  const handleOpen = (item) => {
    setShowModal(true);
  setModalItem(item)
  };
  
  const handleClose = () => {
    setShowModal(false);
       };

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
        <p 
        onClick={() => handleOpen("thanks")}>
          <button className="forgotResetBtn">Reset Password</button>
        </p>
        <div style={{ display: "flex", alignItems: "center", width: "90%", justifyContent:'space-around', }}>
          <hr
            style={{ border: "0.5px solid grey", width: "40%", height: "0.1px" }}
          />
          OR
          <hr
            style={{ border: "1px solid black", width: "40%", height: "0.1px" }}
          />
        </div>
        <Link to="/">
          <button className="forgotLoginBtn">Login</button>
        </Link>
      </div>
      <AuthModal
      open={showModal}
      onclose={handleClose} 
      modalItem={modalItem}
  
      />
    </div>
  );
};

export default Forgot;
