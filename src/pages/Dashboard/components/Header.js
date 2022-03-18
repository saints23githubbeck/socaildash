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
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [createCampaign, setCreateCampaign] = useState("");
  const [managePassword, setManagePassword] = useState("");
  const [editProfile, setEditProfile] = useState("");
  const [logOut, setLogOut] = useState("");
  const location = useLocation();
  const pathName = location?.pathname;

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
        pathName === "/admin/users") && (
        <div className="headerStyle">
          <div className="search">
            <Search />
          </div>
          <div className="headerTag">
            <PopupState popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <Button {...bindTrigger(popupState)}>
                    <Avatar
                      alt="AD"
                      src="https://media.istockphoto.com/photos/headshot-portrait-of-successful-indian-businesswoman-smile-looks-at-picture-id1256907186?k=20&m=1256907186&s=612x612&w=0&h=g_JbCvSmyWZcGqHjDy_Z3naJh0XEPgILu9i1m_GBqco="
                      sx={{ width: 24, height: 24, marginRight: "10px" }}
                    />
                    <p>Admin</p>
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <Link
                      to="/admin/adminprofile"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        handleOpen("editProfile");
                      }}
                    >
                      My account
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        handleOpen("managePassword");
                      }}
                    >
                      Manage Password
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        handleOpen("logOut");
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </div>
        </div>
      )}
      {(pathName === "/admin/coupons" ||
        pathName === "/admin/orders" ||
        pathName === "/admin/settings") && (
        <div className="headerStyle">
          <div className="headerLogo">
            <h1>SocialDash</h1>
            <img src={Logo} alt="logo" />
          </div>

          <div className="headerTag">
            <PopupState popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <Button {...bindTrigger(popupState)}>
                    <Avatar
                      alt="AD"
                      src="https://media.istockphoto.com/photos/headshot-portrait-of-successful-indian-businesswoman-smile-looks-at-picture-id1256907186?k=20&m=1256907186&s=612x612&w=0&h=g_JbCvSmyWZcGqHjDy_Z3naJh0XEPgILu9i1m_GBqco="
                      sx={{ width: 24, height: 24, marginRight: "10px" }}
                    />
                    <p>Admin</p>
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <Link
                      to="/admin/adminprofile"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        handleOpen("editProfile");
                      }}
                    >
                      My account
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        handleOpen("managePassword");
                      }}
                    >
                      Manage Password
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        handleOpen("logOut");
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
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
