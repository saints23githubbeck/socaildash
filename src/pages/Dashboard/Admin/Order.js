import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import Search from "../../../components/Search";
import { orderData } from "../components/tableData";
 



const Order = () => {
  return (
    <DashboardLayout>
      <div>
        <h1>Order</h1>
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
      </div>
      <div>
  
      <div className=" table">
          <div className="tableHeader">
            <div className="listName">Order Id</div>
            <div className="listName">Name</div>
            <div className="listName">Plan Name</div>
            <div className="listName">Price</div>
            <div className="listName">Status</div>
            <div className="listName">Payment Type</div>
            <div className="listName">Date</div>
          </div>
          {orderData.map((item, index) => {
            return (
            <div key={index} className="tableBody">
            <div className="listName">{item.id}</div>
            <div className="listName">{item.name}</div>
            <div className="listName">{item.plan}</div>
            <div className="listName">{item.price}</div>
            <div className="listName">{item.status}</div>
            <div className="listName">{item.payment}</div>
            <div className="listName">{item.date}</div>
              </div>
            );
          })}
          <div className="pagination">
          <p className="paginationBtn"><IoIcons.IoIosArrowBack /></p>
          <p className="paginationBtn"><IoIcons.IoIosArrowForward /></p>
          </div>
        </div>
      </div>
     
  </DashboardLayout>
  );
};

export default Order;
