import React from "react";
import "./Admin.css";
import DashboardLayout from "../components/DashboardLayout";
import Celebrating from "../../../assets/images/celebrating.png";
import Component from "../../../assets/images/component.png";
import AdminChart from "../components/AdminChart";
import { dashboardChart } from "./Components/adminData";
import { Avatar } from "@mui/material";
import "./Admin.css";


const MainCard = (props) => {
  const { name, number, bgColor, avaterImage, avaterColor } = props;
  return (
    <div
      className="mainCard"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div>
        <Avatar
          src={avaterImage}
          sx={{
            height: "60px",
            width: "60px",
            margin: " 20px auto 10px auto",
            background: avaterColor,
          }}
        />
        <p>
          {name} :<span>{number}</span>{" "}
        </p>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <div className="dashboardTop">
        <div style={{ margin: "auto auto auto 50px" }}>
          <h2>Good Afternoon, John</h2>
          <p>Check out your recent activities.</p>
        </div>
        <img className="img" src={Celebrating} alt="" />
        <img className="img1" src={Component} alt="" />
      </div>
      <div className="dashboardCount">
          <MainCard
          avaterImage={''}
          avaterColor={"#2E34B6"}
          bgColor={"rgba(228, 237, 252, 0.47)"}
          name={"Total User"}
          number={5}
        />

        <MainCard
          avaterImage={''}
          avaterColor={"#5FD736"}
          bgColor={"rgba(179, 255, 152, 0.47)"}
          name={"Total Plans"}
          number={3}
        />
      
        <MainCard
          avaterImage={''}
          avaterColor={"#D529E4"}
          bgColor={"rgba(255, 195, 253, 0.47)"}
          name={"Total User"}
          number={5}
        />
      </div>
      <div className="dashboardOrderChart">
      <AdminChart orderDays={true} data={dashboardChart} />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
