import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../../../assets/images/logo.png";
import Search from "../../../components/Search";
import DashboardModal from "./DashboardModal";
import { FaPlus } from "react-icons/fa";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [createCampaign, setCreateCampaign] = useState("");
  const [managePassword, setManagePassword] = useState("");
  const [editProfile, setEditProfile] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [logOut, setLogOut] = useState("");
  const location = useLocation();
  const pathName = location?.pathname;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloses = () => {
    setAnchorEl(null);
  };

  const handleOpen = (item) => {
    setShowModal(true);
    setCreateCampaign(item);
    setManagePassword(item);
    setEditProfile(item);
    setLogOut(item);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {(pathName === "/admin/dashboard" ||
        pathName === "/admin/plans" ||
        pathName === "/admin/adminprofile" ||
        pathName === "/admin/user/edit" ||
        pathName === "/admin/plan/edit" ||
        pathName === "/admin/user/view" ||
        pathName === "/admin/users") && (
        <div className="headerStyle">
          <div className="search">
            <Search />
          </div>
          <div className="headerTag">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar
                alt="AD"
                src="https://media.istockphoto.com/photos/headshot-portrait-of-successful-indian-businesswoman-smile-looks-at-picture-id1256907186?k=20&m=1256907186&s=612x612&w=0&h=g_JbCvSmyWZcGqHjDy_Z3naJh0XEPgILu9i1m_GBqco="
                style={{ width: 25, height: 25, marginRight: "10px", }}
              />
              <p>Admin</p>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloses}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link
                to="/admin/adminprofile"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <MenuItem onClick={handleCloses}>Profile</MenuItem>
              </Link>
              <MenuItem
                onClick={() => { handleCloses();
                  handleOpen("editProfile");
                }}
              >
                My account
              </MenuItem> 
              <MenuItem
                onClick={() => {
                  handleCloses();
                  handleOpen("managePassword");
                }}
              >
                Manage Password
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloses();
                  handleOpen("logOut");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
          </div>
      )}
      {(pathName === "/admin/coupons" ||
      pathName === "/admin/coupon/edit" ||
        pathName === "/admin/orders" ||
        pathName === "/admin/settings") && (
        <div className="headerStyle">
          <div className="headerLogo">
            <h1>SocialDash</h1>
            <img src={Logo} alt="logo" />
          </div>

          <div className="headerTag">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar
                alt="AD"
                src="https://media.istockphoto.com/photos/headshot-portrait-of-successful-indian-businesswoman-smile-looks-at-picture-id1256907186?k=20&m=1256907186&s=612x612&w=0&h=g_JbCvSmyWZcGqHjDy_Z3naJh0XEPgILu9i1m_GBqco="
                sx={{ width: 24, height: 24, marginRight: "10px" }}
              />
              <p>Admin</p>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloses}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link
                to="/admin/adminprofile"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <MenuItem onClick={handleCloses}>Profile</MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  handleCloses();
                  handleOpen("editProfile");
                }}
              >
                My account
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloses();
                  handleOpen("managePassword");
                }}
              >
                Manage Password
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloses();
                  handleOpen("logOut");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
          
        </div>
      )}
      {pathName === "/user/Dashboard" && (
        <div>
          <hr />
          <div className="headerStyle">
            <div>
              <h1>Campaigns</h1>
            </div>
            <Search />
            <div
              onClick={() => handleOpen("createCampaign")}
              style={{
                width: "150px",
                borderRadius: "10px",
                padding: "10px",
                background: "#3578e5",
                color: "#fff",
                marginRight: "20px",
              }}
            >
              <p>
                <FaPlus /> Create Campaign
              </p>
            </div>
          </div>
        </div>
      )}

      <DashboardModal
        open={showModal}
        onclose={handleClose}
        createCampaign={createCampaign}
        managePassword={managePassword}
        editProfile={editProfile}
        logOut={logOut}
      />
    </>
  );
};

export default Header;
