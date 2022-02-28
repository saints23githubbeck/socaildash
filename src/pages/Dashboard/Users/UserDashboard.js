import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import DashboardSvg from "../components/DashboardSvg";

const UserDashboard = () => {
 

  return (
    <DashboardLayout>
      
      <div style={{alignItems:'center', textAlign:'center', marginTop:'80px', justifyContent:'center'}}>
        <createCampaignIcon />
        <createCampaignText />
      </div>
      <DashboardSvg createCampaignIcon={true} createCampaignText={true} />
    </DashboardLayout>
  );
};

export default UserDashboard;
