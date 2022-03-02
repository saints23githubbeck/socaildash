import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SideBarMenu from "./SideBarMenu";
import "./SideBar.css";
import Logo from "../../../assets/images/logo.png";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sideBar">
      <nav className={sidebar ? "navMenu active" : "navMenuClose"}>
        <div className="sidebarHeader">
          <div className={!sidebar ? "iconText" : "sidebarLogo"}>
            <h1>SocialDash</h1>
            <img src={Logo} alt="logo" />
          </div>
          <div className="navBar">
            <Link
              to="#"
              className="menuBars"
              onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
              {open ? (
                <FaIcons.FaBars onClick={showSidebar} />
              ) : (
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              )}
            </Link>
          </div>
        </div>

        <ul className="navMenuItems" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return <SideBarMenu sidebar={sidebar} data={item} key={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
