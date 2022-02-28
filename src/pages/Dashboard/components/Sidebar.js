import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import SideBarMenu from "./SideBarMenu";
import "./SideBar.css";
import Logo from "../../../assets/images/logo.png";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(true);
  const showSidebar =   () => setSidebar(!sidebar);

  return (
    <div className="sideBar">
      {/* <IconContext.Provider
        value={{
          color: "white",
          width: "50px",
          margin: "50px",
          position: "fixed",
          left: "-100%",
        }}
      > */}
<nav className={sidebar ? "navMenu active" : "navMenu"}>
          <div className='sidebarHeader'>
            <div className='sidebarLogo'>
      <h1>SocialDash</h1>
        <img src={Logo} alt='logo' />
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
                return <SideBarMenu data={item} key={index} />;
              })}
            </ul>
          </nav>
      {/* </IconContext.Provider> */}
    </div>
  );
}

export default Sidebar;
