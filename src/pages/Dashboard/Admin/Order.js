import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import Search from "../../../components/Search";
import { orderData } from "../components/tableData";
import DashboardModal from "../components/DashboardModal";

const Order = () => {
  const [showModal, setShowModal] = useState(false);
  const [viewCalender, setViewCalender] = useState("");
  const [share, setShare] = useState("");

  const  status = (status) =>{
    switch (status) {
      case "success":
        return "green";
        break;
      case "failed":
        return "red";
        break;
      default:
        return "grey";
    }}
  const handleOpen = (item) => {
    setShowModal(true);
    setViewCalender(item);
    setShare(item);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <DashboardLayout>
      <div>
        <h1>Order</h1>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <div style={{display:'flex', justifyContent:'flex-end'}}>  <p
            onClick={() => handleOpen("viewCalender")}
            style={{
              background: "#3578e5",
              fontSize: "12px",
              padding: "2px",
              cursor: "pointer",
            }}
          >
            <FaIcons.FaCalendarAlt />
            last 30 days
          </p>
          <p
            style={{
              background: "#3578e5",
              width: "30px",
              margin: "0px 10px",
              padding: "2px",
              cursor: "pointer",
            }}
          >
            <VscIcons.VscSettings />
          </p>
          <p
            onClick={() => handleOpen("share")}
            style={{
              background: "#3578e5",
              width: "30px",
              padding: "2px",
              cursor: "pointer",
            }}
          >
            <BsIcons.BsFillShareFill />
          </p>
        </div> 
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
    
            
          
          <div
            style={{
              width: "300px",
              height: "25px",
              color: "#fff",
              display: "flex",
              textAlign: "center",
              margin: "20px 50px",
            }}
          >
            <Search />
          </div>
        </div>
      </div>

      <div style={{overflowX:'auto'}}> 
        <table className=" ">
          <tr>
            <th className="thead">Order Id</th>
            <th className="thead">Name</th>
            <th className="thead">Plan Name</th>
            <th className="thead">Price</th>
            <th className="thead">Status</th>
            <th className="thead">Payment Type</th>
            <th className="thead">Date</th>
          </tr>
          {orderData.map((item, index) => {
            return (
              <tr key={index} className="">
                <td className="tdata">{item.id}</td>
                <td className="tdata">{item.name}</td>
                <td className="tdata">{item.plan}</td>
                <td className="tdata">{item.price}</td>
                <td className="tdata" style={{color: status(item.status)}}>{item.status}</td>
                <td className="tdata" >{item.payment}</td>
                <td className="tdata">{item.date}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="pagination">
        <p className="paginationBtn">
          <IoIcons.IoIosArrowBack />
        </p>
        <p className="paginationBtn">
          <IoIcons.IoIosArrowForward />
        </p>
      </div>

      <DashboardModal
        open={showModal}
        onclose={handleClose}
        viewCalender={viewCalender}
        share={share}
      />
    </DashboardLayout>
  );
};

export default Order;
