import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";


const AdminModal = (props) => {
    const { open, onclose, addUser, addAdmin, managePassword, editProfile, logOut } = props;

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
<Dialog open={open} onClose={onclose}>
      {addAdmin ==="addAdmin" && (
        <div className="addAdminModal">
          <div className="modalHead">
            <h3>Admin Form</h3>
            <p>Add admin with permissions</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <div className="formInput">
              <input type="text" name="name" placeholder="Full Name" />
            </div>
            <div className="formInput">
              <select>
                <option selected value="Designation">
                  Designation
                </option>
                <option value="Designationone">Designation1</option>
                <option value="Designationtwo">Designation2</option>
              </select>
            </div>
            <div
              className="formInput"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "462px",
                margin: " 0px 62px",
              }}
            >
              <select className="smallInput">
                <option selected value="Qualification">
                  Qualification
                </option>
                <option value="Qualificationone">Qualification1</option>
                <option value="Qualificationtwo">Qualification2</option>
              </select>
              <select className="smallInput">
                <option selected value="Permission">
                  Permission
                </option>
                <option value="Permissionone">Permission1</option>
                <option value="Permissiontwo">Permission2</option>
              </select>
            </div>
            <div className="formInput">
              <input type="text" name="name" placeholder="Ref. Number" />
            </div>
            <div className="formInput">
              <input
                type="password"
                name="password"
                placeholder="Create Password"
              />
            </div>
            <div className="formInput">
              <input
                type="password"
                name="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="formInput">
              <input type="submit" value="Confirm" />
            </div>
          </Form>
        </div>
      )}
           
</Dialog>
  )
}

export default AdminModal