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
              width: "150px",
              height: "25px",
              border: "1px solid #3578E5",
              boxSizing: "border-box",
              borderRadius: "50px",
              textAlign: "center",
              padding: "2px 10px",
              color: "#3578E5",
            }}
          >
            Show Entries
          </div>
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

      <div className=" table">
        <table>
          <tr className="tableHeader">
            <th className="listName">Order Id</th>
            <th className="listName">Name</th>
            <th className="listName">Plan Name</th>
            <th className="listName">Price</th>
            <th className="listName">Status</th>
            <th className="listName">Payment Type</th>
            <th className="listName">Date</th>
          </tr>
          {orderData.map((item, index) => {
            return (
              <tr key={index} className="tableBody">
                <th className="listName">{item.id}</th>
                <th className="listName">{item.name}</th>
                <th className="listName">{item.plan}</th>
                <th className="listName">{item.price}</th>
                <th className="listName">{item.status}</th>
                <th className="listName">{item.payment}</th>
                <th className="listName">{item.date}</th>
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
