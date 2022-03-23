import { Avatar, Drawer } from "@material-ui/core";
import React from "react";
import DashboardLayout from '../../components/DashboardLayout'
import {  Link, useLocation,} from "react-router-dom";

const UserView = () => {
  const {state} = useLocation()

  return (
<DashboardLayout>
      <div>
        <h2>User Administration</h2>
        <div className="detailsTop">
          <div className="textBox">
            <p>View User</p>
            <Link to={-1}> <p>Back</p></Link>
          </div>
          <div>
            <div className="textDetails">
              <p>ID</p>
              <p className="textIndex">{state.id}</p>
            </div>
            <div className="textDetails">
              <p>Type</p>
              <p className="textIndex">{state.role}</p>
            </div>
            <div className="textDetails">
              <p>Type</p>
              <p><Avatar 
                    alt="img"
                    src={state.img}
                    className="user_image"
                    width="80"
                      height="80"
                  /></p>
            </div>
            <div className="textDetails">
              <p>Name</p>
              <p className="textIndex">{state.name}</p>
            </div>
            <div className="textDetails">
              <p>E-mail</p>
              <p className="textIndex">{state.email}</p>
            </div>
            <div className="textDetails">
              <p>Status</p>
              <p className="textIndex">{state.status}</p>
            </div>
            <div className="textDetails">
              <p>Verified</p>
              <p className="textIndex">{state.verified}</p>
            </div>
            <div className="textDetails">
              <p>2FA</p>
              <p className="textIndex">NO</p>
            </div>
            <div className="textDetails">
              <p>Timezone</p>
              <p className="textIndex">Africa/Lagos</p>
            </div>
            <div className="textDetails">
              <p>Last Login</p>
              <p className="textIndex">{state.date}  7:42 AM</p>
            </div>
            <div className="textDetails">
              <p>Last Known IP Address</p>
              <p className="textIndex">102.89.33.162</p>
            </div>
            <div className="textDetails">
              <p>Roles</p>
              <p className="textIndex">All</p>
            </div>
            <div className="textDetails">
              <p>Additional Permissions</p>
              <p className="textIndex">All</p>
            </div>	
	
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserView;
