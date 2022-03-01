import { Dialog } from "@mui/material";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { Form } from "react-bootstrap";

const DashboardModal = (props) => {
  const { open, onclose, addPlan, addUser, createCampaign, viewCalender  } = props;

  const [value, setValue] = useState([null, null]);

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
      {addPlan === "addPlan" && (
        <div className="addNewUser">
                <Form >
            <div className="formInput">
              <p>Name</p>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div style={{display: 'flex'}}>
              <div className="formInput">
                <p>Monthly Price</p>
                <input type="number" name="name" placeholder="Name" />
              </div>
              <div className="formInput">
                <p>Annual Price</p>
                <input type="number" name="name" placeholder="Name" />
              </div>
            </div>
            <div style={{display: 'flex'}}>
              <div className="formInput">
                <p>Trail Days</p>
                <input type="number" name="name" placeholder="Name" />
              </div>
              <div className="formInput">
                <p>Trail Days</p>
                <input type="number" name="name" placeholder="Name" />
              </div>
            </div>
            <div className="formInput">
          <p>Desscription</p>
          <textarea rows={5}/>
          </div>
                <button className="createBtn"> Save</button>
                <button className="createBtn"> Cancel</button>
         </Form>
         </div>
        
      )}
      {createCampaign === "createCampaign" && (
        <div className="createCampaign">
          <div >
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
      <button>fjkfhfhhjkd</button>
      <button>fjkfhfhhjkd</button>
      <button>fjkfhfhhjkd</button>
    </div>
        </div>
      )}
    </Dialog>
  );
};

export default DashboardModal;
