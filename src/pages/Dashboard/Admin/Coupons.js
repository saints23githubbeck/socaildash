import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import Search from "../../../components/Search";
import { couponData } from "../components/tableData";
 
const Coupons = () => {
  return (
    <DashboardLayout>
        <h1>Coupons</h1>
        <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <div
            style={{
              color: "#fff",
              display: "flex",
              textAlign: "center",
              marginRight: "50px",
            }}
          >
            {" "}
            <p
              style={{
                background: "#3578e5",
                fontSize: "12px",
                padding: "2px",
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
              }}
            >
              <VscIcons.VscSettings />
            </p>
            <p style={{ background: "#3578e5", width: "30px", padding: "2px" }}>
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
  
      <div className=" table">
          <div className="tableHeader">
            <div className="listName">Name</div>
            <div className="listName">Code</div>
            <div className="listName">Discount (%)</div>
            <div className="listName">Unit</div>
            <div className="listName">Used</div>
            <div className="listName">Action</div>
          </div>
          {couponData.map((item, index) => {
            return (
            <div key={index} className="tableBody">
            <div className="listName">{item.name}</div>
            <div className="listName">{item.code}</div>
            <div className="listName">{item.discount}</div>
            <div className="listName">{item.unit}</div>
            <div className="listName">{item.used}</div>
            <div className="listName">
              <button>v</button>
              <button>e</button>
              <button>d</button>
            </div>
              </div>
            );
          })}
          <div className="pagination">
          <p className="paginationBtn"><IoIcons.IoIosArrowBack /></p>
          <p className="paginationBtn"><IoIcons.IoIosArrowForward /></p>
          </div>
        </div>
    

    </DashboardLayout>
  )
}

export default Coupons