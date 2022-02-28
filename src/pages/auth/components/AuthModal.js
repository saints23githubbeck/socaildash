import { Dialog } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const AuthModal = (props) => {
      const { open, onclose, modalItem, resetPassword } = props;
console.log({open})
return (
  <Dialog open={open} onClose={onclose}>
      {modalItem === "thanks" && (
        <div className="thanks">
          <div className="modalHead">
            <h1>Thank you!</h1>
            <p>Please Check your email</p>
          </div>
        </div>
      )}
      {resetPassword && (
         <div className="resetPassword">
          <div className="modalHead">
            <h1>Password Changed!</h1>
            <p>
            <Link to='/'>Click Here</Link>
            <span>to Login</span>
            </p>
          </div>
        </div>
      )}
    </Dialog>
  )
}

export default AuthModal;