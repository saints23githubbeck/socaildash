import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import Search from "../../../components/Search";
import { BiFilterAlt, BiGridAlt } from "react-icons/bi";
import DashboardModal from '../components/DashboardModal';
import { coupon } from './Components/adminData';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
 
const Coupons = () => {
  const [showModal, setShowModal] = useState(false);
  const [viewCalender, setViewCalender] = useState("");
  const [addCoupon, setAddCoupon] = useState("");
  const [share, setShare] = useState("");
  const navigate = useNavigate();

 


  const handleOpen = (item) => {
    setShowModal(true);
    setViewCalender(item);
    setAddCoupon(item);
    setShare(item);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <DashboardLayout>
        <h1>Coupons</h1>
        <div
        onClick={() => handleOpen("addCoupon")}
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
        <p>Add coupon</p>
      </div>
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
      <div style={{overflowX:'auto'}}>
      <table className="">
          <tr>				
            <th className="thead ">Name</th>
            <th className="thead">
            Percent off
            </th>
            <th className="thead">
            Coupon Code
              <BiFilterAlt className="" onClick={() => ("")}/>
            </th>
            <th className="thead">Duration</th>
            <th className="thead">
            Date
              <BiFilterAlt className="" onClick={() => ("")}/>
            </th>
            <th className="thead tcenter">Actions</th>
          </tr>
          {coupon.map((item, index) => {
            return (
              <tr key={index} className="">
                <td className="tdata">
                  {item.name}
                </td>
                <td className="tdata">{item.percent} </td>
                <td className="tdata">{item.code}</td>
                <td className="tdata">{item.duration}</td>
                <td className="tdata">{item.date}</td>
                <td className="tdata buttonEdit">
                  <p
                    className="detailsButton"
                    onClick={() =>
                      navigate("/admin/coupon/edit", { state: item })
                    } style={{backgroundColor:'blue'}}
                  >
                    <EditIcon />
                  </p>
                  <p
                    className="detailsButton" style={{backgroundColor:'red'}}

                  >
                    <DeleteIcon />
                  </p>

                </td>
              </tr>
            );
          })}
        </table>
        </div>
      
    
      <DashboardModal
        open={showModal}
        onclose={handleClose}
        viewCalender={viewCalender}
        addCoupon={addCoupon}
        share={share}
      />
    </DashboardLayout>
  )
}

export default Coupons