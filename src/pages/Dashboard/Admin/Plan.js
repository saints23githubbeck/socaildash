import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardLayout from "../components/DashboardLayout";
import DashboardModal from "../components/DashboardModal";

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
  const [addPlan, setAddPlan] = useState('')
 
  const handleOpen = (item) => {
    setShowModal(true);
    setAddPlan(item)
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
      <div style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
        <PlanCard price={0} planName={'Free Plan'} time={'1 User per hour'} user={5} client={'5 Clients'} project={5} bgColor={'blue'} />
        <PlanCard price={100} planName={'Mini Plan'} time={'5 User per hour'} user={5} client={'5 Clients'} project={5} bgColor={'red'} />
        <PlanCard price={200} planName={'Pro Plan'} time={'10 Days Trail'} user={10} client={'10 User per hour'} project={10} bgColor={'gray'} />
        <PlanCard price={200} planName={'Unlimited Plan'} time={'10 Days Trail'} user={10} client={'10 User per hour'} project={10} bgColor={'green'} />
      </div>
      <DashboardModal
     open={showModal}
     onclose={handleClose} 
     addPlan={addPlan}
     />
    </DashboardLayout>
  );
};

export default Plan;
