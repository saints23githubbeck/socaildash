import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardLayout from "../components/DashboardLayout";
import DashboardModal from "../components/DashboardModal";
import { FaListUl } from "react-icons/fa";
import { BiFilterAlt, BiGridAlt } from "react-icons/bi";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import { messageData } from "./Components/adminData";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [addUser, setAddUser] = useState("");
  const [view, setView] = useState(true);
  const [activeItemKey, setActiveItemKey] = useState(1);
  const [openDetails, setOpenDetails] = useState(false);
  const [viewUser, setViewUser] = useState({});
  const [editUser, setEditUser] = useState({});
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [managePassword, setManagePassword] = useState("");

  const  status = (status) =>{
    switch (status) {
      case "Active":
        return "green";
        break;
      case "Inactive":
        return "red";
        break;
      default:
        return "grey";
    }}
  const  verified = (verified) =>{
    switch (verified) {
      case "Verified":
        return "green";
        break;
      case "Unverified":
        return "red";
        break;
      default:
        return "grey";
    }}



  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloses = () => {
    setAnchorEl(null);
  };

  const handleOpen = (item) => {
    setShowModal(true);
    setManagePassword(item);
    setAddUser(item);

  };

  const handleView = (key) => {
    setActiveItemKey(key);
    setView(true);
  };


  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <DashboardLayout>
      <h1>User</h1>
      <div
        onClick={() => handleOpen("addUser")}
        style={{
          display: "flex",
          backgroundColor: "blue",
          width: "80px",
          fontSize: "16px",
          borderRadius: "8px",
          color: "#fff",
          padding: "5px",
          margin: "20px 80px 20px auto",
          cursor: "pointer",
        }}
      >
        <FaPlus />
        <p>Add User</p>
      </div>

      {activeItemKey === 1 ? (
        <button className="display_button mx-2" onClick={() => handleView(2)}>
          <BiGridAlt />
        </button>
      ) : (
        <button className="display_button mx-2" onClick={() => handleView(1)}>
          <FaListUl />
        </button>
      )}

      {/* table and grid section */}
      {activeItemKey === 1 ? (
         <div style={{overflowX:'auto'}}>
        <table className="">
          <tr>
            <th className="thead tcenter">Name</th>
            <th className="thead">
              Email
              <BiFilterAlt className="thead" />
            </th>
            <th className="thead">
              Verified
              <BiFilterAlt className="" />
            </th>
            <th className="thead">Status</th>
            <th className="thead">
              Role
              <BiFilterAlt className="" />
            </th>
            <th className="thead">Date</th>
            <th className="thead tcenter">Actions</th>
          </tr>
          {messageData.map((item, index) => {
            return (
              <tr key={index} className="">
                <td className="tdata userList">
                  <Avatar src={item.img} width="40" height="40" className="" />
                  <p className="">{item.name}</p>
                </td>
                <td className="tdata">{item.email} </td>
                <td className="tdata" style={{color: verified(item.verified)}}>{item.verified}</td>
                <td className="tdata" style={{color: status(item.status)}}>{item.status}</td>
                <td className="tdata">{item.role}</td>
                <td className="tdata">{item.date}</td>
                <td className="tdata buttonEdit">
                  <p
                    className="detailsButton"
                    onClick={() =>
                      navigate("/admin/user/view", { state: item })
                    } style={{backgroundColor:'green'}}
                  >
                    <SearchIcon /> View
                  </p>

                  <p
                    className="detailsButton"
                    onClick={() =>
                      navigate("/admin/user/edit", { state: item })
                    } style={{backgroundColor:'blue'}}
                  >
                    <EditIcon /> Edit
                  </p>
                  <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="detailsButton" style={{backgroundColor:'red'}}> 
              More <ArrowDropDownIcon />
         
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
              <MenuItem
                onClick={() => { handleCloses();
                  handleOpen("managePassword");
                }}
              >
                Change Password
              </MenuItem> 
              </Menu>

                </td>
              </tr>
            );
          })}
        </table>
        </div>
      ) : (
        <div className="switchContainer">
          {messageData.map((item, index) => {
            return (
              <div key={index} className="boxes ">
                <div
                  className={`grid_status ${
                    item.status === "Delivered" ? "Delivered" : "Inprogress"
                  }`}
                >
                  {item.status}{" "}
                </div>
                <div className="">
                  <Avatar
                    alt="img"
                    src={item.img}
                    className="user_image"
                    width="80"
                    height="80"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px",
                    }}
                  >
                    <div className="">{item.name} </div>
                    <p>{item.email} </p>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <div>{item.verified} </div>
                  <div>{item.role} </div>
                  <div>{item.date} </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <DashboardModal
        open={showModal}
        onclose={handleClose}
        addUser={addUser}
        managePassword={managePassword}
      />
    </DashboardLayout>
  );
};

export default User;
