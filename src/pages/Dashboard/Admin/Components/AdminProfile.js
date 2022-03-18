import DashboardLayout from '../../components/DashboardLayout'
import { Avatar, IconButton } from "@material-ui/core";
import { FaUsers, FaUsersSlash } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import LegendToggleOutlinedIcon from "@mui/icons-material/LegendToggleOutlined";
import { IoTime } from "react-icons/io5";
import moment from "moment";
import { Link } from "react-router-dom";
import DashboardModal from '../../components/DashboardModal';

const AdminProfile = () => {
    const [managePassword, setManagePassword] = useState("");
    const [editProfile, setEditProfile] = useState("");
    const [logOut, setLogOut] = useState("");
    const [showModal, setShowModal] = useState(false);
   
    const handleOpen = (item) => {
      setShowModal(true);
      setManagePassword(item);
      setEditProfile(item);
      setLogOut(item);
    };
  
    const handleClose = () => {
      setShowModal(false);
    };
  return (
    <DashboardLayout>
        <div>
      <div className="users_heading">
        <h1>User Details</h1>
        <p>
          <IoTime size={20} /> {moment().format("LLL")}{" "}
        </p>
      </div>

      <div className="profile_Page">
        <div className="admin_details">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Avatar src="https://media.istockphoto.com/photos/headshot-portrait-of-successful-indian-businesswoman-smile-looks-at-picture-id1256907186?k=20&m=1256907186&s=612x612&w=0&h=g_JbCvSmyWZcGqHjDy_Z3naJh0XEPgILu9i1m_GBqco="
              style={{
                width: "200px",
                height: "200px",
                margin: "15px auto",
              }}
            />
            <h2>John Jasper</h2>
            <p>Administrator</p>
          </div>
          <div>
            <h5
              style={{
                textAlign: "left",
                justifyContent: "end",
                color: "blue",
                margin: "30px 5px 10px 500px",
                cursor:'pointer',
              }} onClick={() => handleOpen("editProfile")}
            >
              Edit
            </h5>
          </div>
          <div>
            <p>Name: <span>John Jasper</span></p>
            <p>Email: <span>JohnJasper@gmail.com</span></p>
            <p>Phone: <span>+233 864 6146</span></p>
          </div>
        </div>
        <div>
          <div className="adminQuicklink">
            <div className="quicklink" onClick={() => handleOpen("managePassword")}>
              <IconButton className="buttonIcon">
                <AddIcon />
              </IconButton>
              <p>Edit Password</p>
            </div>
            <div className="quicklink" onClick={() => handleOpen("logOut")}>
              <IconButton className="buttonIcon" >
                <AddIcon />
              </IconButton>
              <p>Log Out</p>
            </div>
            <Link to="/admin/dashboard">
              <div className="quicklinks">
                <IconButton className="buttonIcon">
                  <LegendToggleOutlinedIcon />
                </IconButton>
                <p>View Analysis</p>
              </div>
            </Link>
            <Link to="/admin/users">
          
              <div className="quicklinks">
                <IconButton className="buttonIcon">
                  <FaUsers />
                </IconButton>
                <p>View All Users</p>
              </div>
            </Link>
            <Link to="/admin/plans">
              <div className="quicklinks">
                <IconButton className="buttonIcon">
                  <FaUsers />
                </IconButton>
                <p>View All plan</p>
              </div>
            </Link>
            <Link to="/admin/order">
              <div className="quicklinks">
                <IconButton className="buttonIcon">
                  <FaUsersSlash />
                </IconButton>
                <p>View all Order</p>
              </div>
            </Link>
            <Link to="/admin/coupons">
              <div className="quicklinks">
                <IconButton className="buttonIcon">
                  <FaUsers />
                </IconButton>
                <p>View Coupons</p>
              </div>
            </Link>
            <div className="quicklinks" onClick={() => handleOpen("managePassword")}>
              <IconButton className="buttonIcon" >
                <AiFillLock />
              </IconButton>
              <p>Manage Password</p>
            </div>
          </div>
          <div>
            <div className="quickAlert">
              <h5>Alert</h5>
            </div>
          </div>
        </div>
      </div>
      <DashboardModal
        open={showModal}
        onclose={handleClose}
        managePassword={managePassword}
        editProfile={editProfile}
        logOut={logOut}
      />
    </div>
    </DashboardLayout>
  )
}

export default AdminProfile