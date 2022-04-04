import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardLayout from "../components/DashboardLayout";
import DashboardModal from "../components/DashboardModal";
import { plan } from "./Components/adminData";
import { FaListUl } from "react-icons/fa";
import { BiFilterAlt, BiGridAlt } from "react-icons/bi";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

const PlanCard = (props) => {
  const { planName, time, user, client, project, price, bgColor  } =
    props;
  
   
  return (
    <div className="planCard" style={{
    backgroundColor : bgColor,
    }}>
    <div className="planCardHeader">
      <h5>{planName}</h5>
      <p>${price} Monthly price</p>
    </div>
    <div className="planCardContent">
      <ul>
      <li>&#10004; {time}</li>
      <li>&#10004; {user} Users</li>
      <li>&#10004; {client}</li>
      <li>&#10004; {project} Projects</li>
      </ul>
    </div>
    </div>
  );
  };

const Plan = () => {
  const [showModal, setShowModal] = useState(false);
  const [addPlan, setAddPlan] = useState('');
  const [view, setView] = useState(true);
  const [activeItemKey, setActiveItemKey] = useState(1);
  const navigate = useNavigate();

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

  const handleOpen = (item) => {
    setShowModal(true);
    setAddPlan(item)
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
      <h1>Plan</h1>
      <div  onClick={() => handleOpen("addPlan")}
        style={{
          display: "flex",
          backgroundColor: "blue",
          width: "80px",
          fontSize: "16px",
          borderRadius: "50px",
          color: "#fff",
          padding: "5px",
          margin: "20px 50px 20px auto",
          cursor:'pointer',
        }}
      >
        <FaPlus />
        <p>Add Plan</p>
      </div>
     {activeItemKey === 1 ? (
        <button className="display_button mx-2" onClick={() => handleView(2)}>
          <BiGridAlt /> View Plans
        </button>
      ) : (
        <button className="display_button mx-2" onClick={() => handleView(1)}>
          <FaListUl /> View User Plan
        </button>
      )}

      {/* table and grid section */}
      {activeItemKey === 1 ? (
         <div style={{overflowX:'auto'}}>
        <table className="">
          <tr>
            <th className="thead ">Name</th>
            <th className="thead">
              Interval
              <BiFilterAlt className="thead" />
            </th>
            <th className="thead">
              Price
              <BiFilterAlt className="" />
            </th>
            <th className="thead">Teams</th>
            <th className="thead">
            Date
              <BiFilterAlt className="" />
            </th>
            <th className="thead">Status</th>
            <th className="thead tcenter">Actions</th>
          </tr>
          {plan.map((item, index) => {
            return (
              <tr key={index} className="">
                <td className="tdata">
                  {item.name}
                </td>
                <td className="tdata">{item.interval} </td>
                <td className="tdata">{item.price}</td>
                <td className="tdata">{item.team}</td>
                <td className="tdata">{item.date}</td>
                <td className="tdata" style={{color:status(item.status)}}>{item.status}</td>
                <td className="tdata buttonEdit">
                  <p
                    className="detailsButton"
                    onClick={() =>
                      navigate("/admin/plan/edit", { state: item })
                    } style={{backgroundColor:'blue'}}
                  >
                    <EditIcon />
                  </p>
                  <p
                    className="detailsButton"
                    style={{backgroundColor:'red'}}
                  >
                    <DeleteIcon />
                  </p>

                </td>
              </tr>
            );
          })}
        </table>
        </div>
      ) : (
        <div className="planCardList">
	  <PlanCard price={0} planName={'Free Plan'} time={'1 User per hour'} user={5} client={'5 Clients'} project={5} bgColor={'blue'} />
	  <PlanCard price={100} planName={'Mini Plan'} time={'5 User per hour'} user={5} client={'5 Clients'} project={5} bgColor={'red'} />
	  <PlanCard price={200} planName={'Pro Plan'} time={'10 Days Trail'} user={10} client={'10 User per hour'} project={10} bgColor={'gray'} />
	  <PlanCard price={200} planName={'Unlimited Plan'} time={'10 Days Trail'} user={10} client={'10 User per hour'} project={10} bgColor={'green'} />
	</div>
      )}
      <DashboardModal
     open={showModal}
     onclose={handleClose} 
     addPlan={addPlan}
     />
    </DashboardLayout>
  );
};

export default Plan;
