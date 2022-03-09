import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import DashboardSvg from "../components/DashboardSvg";

const UserDashboard = () => {
  return (
    <DashboardLayout>
      <div className="campaignPage" >
        <createCampaignIcon />
        <createCampaignText />
      </div>
      <DashboardSvg createCampaignIcon={true} createCampaignText={true} />
    </DashboardLayout>
  );
};

export default UserDashboard;
