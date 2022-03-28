import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import Search from "../../../components/Search";
import { couponData } from "../components/tableData";
import DashboardModal from '../components/DashboardModal';
 
const Coupons = () => {
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
        <h1>Coupons</h1>
        <div>
        <div style={{ display: "flex", justifyContent: "space-between", color:'white' }}>
          <div style={{display:'flex'}} >  <p
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
  
      <div className="table">
      <table>
          <tr className="tableHeader">
            <th className="listName">Name</th>
            <th className="listName">Code</th>
            <th className="listName">Discount (%)</th>
            <th className="listName">Unit</th>
            <th className="listName">Used</th>
            <th className="listName">Action</th>
          </tr>
          {couponData.map((item, index) => {
            return (
            <tr key={index} className="tableBody">
            <th className="listName">{item.name}</th>
            <th className="listName">{item.code}</th>
            <th className="listName">{item.discount}</th>
            <th className="listName">{item.unit}</th>
            <th className="listName">{item.used}</th>
            <th className="listName">
              <button>v</button>
              <button>e</button>
              <button>d</button>
            </th>
              </tr>
            );
          })}
          <div className="pagination">
          <p className="paginationBtn"><IoIcons.IoIosArrowBack /></p>
          <p className="paginationBtn"><IoIcons.IoIosArrowForward /></p>
          </div>
        </table>
      </div>
    
      <DashboardModal
        open={showModal}
        onclose={handleClose}
        viewCalender={viewCalender}
        share={share}
      />
    </DashboardLayout>
  )
}

export default Coupons