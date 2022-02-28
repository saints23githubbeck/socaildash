import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SideBar.css";

const SideBarMenu = ({ data }) => {
  const location = useLocation();
  const pathName = location?.pathname;
  return (
    <>
      <NavLink to={data.path} className={data.cName} style={{textDecoration:'none', cursor:'default', color:'#fff', fontSize: '20px', justifyContent: 'center', }}>
        <div>
          {data.icon}
          <span>{data.title}</span>
        </div>
      </NavLink>
      <div className="sideBarSubMenu">
        {data.children &&
          data.children.map((item, i) => {
            return (
              <NavLink key={i} className={item.cName}
                style={(isActive) => ({
                  textDecoration:'none', fontSize:'16px', margin:'3px 0px',
                  color: isActive && pathName === item.path ? "black" : "#fff",
                  borderRadius: isActive && pathName === item.path ? "5px" : "",
                  width: isActive && pathName === item.path ? "200px" : "",
                  

                })}
                to={item.path}
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default SideBarMenu;
