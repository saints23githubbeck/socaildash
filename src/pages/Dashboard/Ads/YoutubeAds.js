import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";

const YoutubeAds = () => {
  const [step, setStep] = useState(1);
  return (
    <DashboardLayout>
      <div className="headerFrame">
        <div
          style={{
            color: "#D80A0A",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <BsIcons.BsYoutube
            style={{ fontSize: "25px", marginRight: "10px" }}
          />
          <h1>Youtube Ads</h1>
        </div>

        <div className="headerList">
          {" "}
          <p style={{borderBottom: step === 1? '5px solid #D80A0A': null}} onClick={() => setStep(1)}>Overview</p>
          <p style={{borderBottom: step === 2? '5px solid #D80A0A': null}} onClick={() => setStep(2)}>Engagements</p>
          <p style={{borderBottom: step === 3? '5px solid #D80A0A': null}} onClick={() => setStep(3)}>Demographics</p>
          <p style={{borderBottom: step === 4? '5px solid #D80A0A': null}} onClick={() => setStep(4)}>Video</p>
        </div>

      </div>
      <div className="componentBody">
        {step === 1 && (<div >
          <h1>Overview</h1></div>)}
       
        {step === 2 && (
          <div>
            <h1>Demographics</h1>
          </div>
        )}
        {step === 3 && (
          <div>
            <h1>Demographics</h1>
          </div>
        )}
        {step === 4 && (
          <div>
            <h1>Video</h1>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default YoutubeAds;
