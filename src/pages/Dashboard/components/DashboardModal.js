import { Dialog } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import AddIcon from "@mui/icons-material/Add";
import SlideshowIcon from "@mui/icons-material/Slideshow";

const DashboardModal = (props) => {
  const {
    addCoupon,
    open,
    onclose,
    addPlan,
    addUser,
    createCampaign,
    viewCalender,
    logOut,
    managePassword,
    editProfile,
    share,
  } = props;

  const [value, setValue] = useState([null, null]);
  const [name, setName] = useState("");
  const [upload, setUpload] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };
  const handleUpload = (e) => {
    const imageUrl = URL.createObjectURL(file);
    const file = e.target.files;
    setUpload(file);
    console.log(imageUrl);
  };

  return (
    <Dialog open={open} onClose={onclose}>
      {addUser === "addUser" && (
        <div className="addNewUser">
          <div className="addUserTop">
            <h4>Add User</h4>
            <div className="addUserBody">
              <div className="formContainer">
                <div className="formInput">
                  <p>Full Name</p>
                  <input
                    type="text"
                    required
                    id="name"
                    autoComplete="name"
                    autoFocus
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="formInput">
                  <p>Email Address</p>
                  <input
                    type="email"
                    required
                    id="email"
                    autoComplete="email"
                    autoFocus
                    placeholder="Enter email"
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
                <button className="createBtn"> Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {addCoupon === "addCoupon" && (
        <div className="addNewPlan">
          <Form onSubmit={handleSubmit}>
            <div className="addUserTop">
              <h4>Add New Coupon</h4>
              <div className="addUserBody"></div>
            </div>
            <div className="addUserBody">
      <div className="formInput">
      <p className="h3Space">Name</p>
      <input type="text" name="name" placeholder='coupon name' />

      </div>
      <div className="formInput">
        <p className="h3Space">Percent Off</p>
        <input type="number" name="number" placeholder="number in percentage" />
      </div>
      <div className="formInput">
      <p className="h3Space">Coupon Code</p>
            <input type="text" name="name" placeholder='enter coupon serect code' />
          </div>
      <div className="formInput">
      <p className="h3Space">Duration in months</p>
            <input type="number" name="number" placeholder='Duration'/>
          </div>
    <div >
    <Link to={-1}><button  style={{
        marginRight:'50px', backgroundColor:'green', border:"none", borderRadius: '5px', padding:10, color:'#fff', width:"100px", fontSize:16,}}>Create</button></Link>
      <button style={{
        marginRight:'50px', backgroundColor:'orange',border:"none", borderRadius: '5px', padding:10, color:'#fff', width:"100px", fontSize:16,}} onClick={onclose} >Cancel</button>
    </div>
    </div>
          </Form>
        </div>
      )}
      {addPlan === "addPlan" && (
        <div className="addNewPlan">
          <Form onSubmit={handleSubmit}>
            <div className="addUserTop">
              <h4>Add New Plan</h4>
              <div className="addUserBody">
                <div className="formInput">
                  <p>Plan Name</p>
                  <select>
                    <option>select plan</option>
                    <option>Basic Plan</option>
                    <option>Pro Plan</option>
                    <option>Broz</option>
                    <option>yearly Pro</option>
                    <option>yearly Bronz</option>
                    <option>Basic yearly</option>
                  </select>
                </div>
                <div className="formInput">
                  <p>Plan Price</p>
                  <input
                    type="number"
                    name="number"
                    placeholder="enter price"
                  />
                </div>
                <div className="formInput">
                  <p>Plan Trail</p>
                  <input type="text" name="name" placeholder="plan trail" />
                </div>
                <div className="formInput">
                  <p>Plan Interval</p>
                  <select>
                    <option>select plan interval</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>yearly</option>
                  </select>
                </div>
                <div className="formInput">
                  <p>Plan Teams</p>
                  <input
                    type="number"
                    name="number"
                    placeholder="input number of team "
                  />
                </div>

                <button className="createBtn"> Save</button>
                <button className="createBtn"> Cancel</button>
              </div>
            </div>
          </Form>
        </div>
      )}
      {createCampaign === "createCampaign" && (
        <div className="createCampaign">
          <div>
            <h3>Create Your Campaign</h3>
            <p>
              Specify your client's website to begin connecting their marketing
              channels and creating reports
            </p>
          </div>
          <div>
            <div className="createCampaignForm">
              <div className="createFormInput">
                <p>Campaign Title</p>
                <input
                  type="text"
                  required
                  label="Campaign Title"
                  autoComplete="name"
                  placeholder="Enter Company Name"
                />
              </div>
              <div className="createFormInput">
                <p>Website Address</p>
                <input
                  type="text"
                  required
                  label="Website Address"
                  autoComplete="name"
                  placeholder="Enter your web address"
                />
              </div>
              <div className="createFormInput">
                <p>Report Delivery Timezone</p>
                <input
                  type="text"
                  required
                  label="Report Delivery Timezone"
                  autoComplete="name"
                  placeholder="country"
                />
              </div>
            </div>
            <button className="createBtn">Create</button>
          </div>
        </div>
      )}
      {viewCalender === "viewCalender" && (
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateRangePicker
              displayStaticWrapperAs="desktop"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </>
              )}
            />
          </LocalizationProvider>
          <div>
            <button
              style={{
                height: "50px",
                border: "none",
                borderRadius: "8px",
                margin: "5px",
                width: "100px",
                color: "#fff",
              }}
            >
              Last 30 Days
            </button>
            <button
              style={{
                height: "50px",
                border: "none",
                borderRadius: "8px",
                margin: "5px",
                width: "200px",
                color: "#fff",
              }}
            >
              <span>Time Zone</span>
              <input type="text" placeholder="Africa" />
            </button>
            <button
              style={{
                height: "50px",
                border: "none",
                borderRadius: "8px",
                margin: "5px",
                width: "120px",
                backgroundColor: "blue",
                color: "#fff",
              }}
            >
              Apply
            </button>
            <button
              style={{
                height: "50px",
                border: "none",
                borderRadius: "8px",
                margin: "5px",
                width: "100px",
                color: "#fff",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {editProfile === "editProfile" && (
        <div className="kami">
          <div className="modalHead">
            <h3>Edit Profile</h3>
            <p>Edit admin profile</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="col-lg-3">
              <label htmlFor="logoUpload">
                <img src="" alt="socaildash" />
                <input
                  type="file"
                  id="logoUpload"
                  accept="image/*"
                  onChange={handleUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <div className="formInput">
              <input type="text" name="name" placeholder="First Name" />
              <input type="text" name="name" placeholder="Last Name" />
            </div>
            <div className="formInput">
              <input type="email" name="name" placeholder="email@mail.com" />
            </div>
            <div className="formInput">
              <input
                type="password"
                name="password"
                placeholder="enter Password to comfirm changes"
              />
            </div>
            <div className="formInput">
              <input type="submit" value="Save" />
            </div>
          </Form>
        </div>
      )}

      {share === "share" && (
        <div>
          <p
            style={{
              margin: "20px",
              alignIten: "center",
              width: "150px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <DownloadIcon /> Download PDF
          </p>
          <p
            style={{
              margin: "20px",
              alignIten: "center",
              width: "150px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <SendIcon /> Send Via Email
          </p>
          <p
            style={{
              margin: "20px",
              alignIten: "center",
              width: "150px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <SwapCallsIcon /> Share Link
          </p>
          <p
            style={{
              margin: "20px",
              alignIten: "center",
              width: "150px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <AddIcon /> Add to Report
          </p>
          <p
            style={{
              margin: "20px",
              alignIten: "center",
              width: "150px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <SlideshowIcon /> Present
          </p>
        </div>
      )}

      {managePassword === "managePassword" && (
        <div className="kami">
          <div className="modalHead">
            <h3>Manage Password</h3>
            <p>Create a strong password and always remember it</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="formInput">
              <input
                type="password"
                name="password"
                placeholder="Old Password"
              />
            </div>
            <div className="formInput">
              <input
                type="password"
                name="password"
                placeholder="New Password"
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

      {logOut === "logOut" && (
        <div className="kami">
          <h1>
            Are you sure you want to
            <Link to="/">
              <span style={{ color: "red", cursor: "pointer" }}> LogOut</span>
            </Link>
          </h1>
          <button
            onClick={onclose}
            style={{
              color: "white",
              backgroundColor: "green",
              width: 50,
              height: 25,
              padding: "5px auto",
              marginRight: "20px",
              borderRadius: "8px",
              cursor: "pointer",
              border: "none",
              marginTop: "20px",
            }}
          >
            NO
          </button>
          <Link to="/">
            <button
              style={{
                color: "white",
                backgroundColor: "red",
                width: 50,
                height: 25,
                padding: "5px auto",
                marginLeft: "20px",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              YES
            </button>
          </Link>
        </div>
      )}
    </Dialog>
  );
};

export default DashboardModal;
