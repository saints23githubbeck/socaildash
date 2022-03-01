import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";

const ChartCard = (props) => {
  const { width, topChartName, topChartNumber, chartName, sideContent } = props;
  
  return (
    <div
      className="chartCard"
      style={{
        width: width,
        height: "200px",
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <p>{topChartName}</p>
        <p>{topChartNumber}</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {chartName}
        <div>{sideContent}</div>
      </div>
    </div>
  );
};

const InstagramAds = () => {
  const [step, setStep] = useState(1);
  return (
    <DashboardLayout>
      <div className="headerFrame">
        <div
          style={{
            color: "#DF1D10",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <BsIcons.BsInstagram
            style={{ fontSize: "25px", marginRight: "10px" }}
          />
          <h1>Instagram Ads</h1>
        </div>

        <div className="headerList">
          {" "}
          <p style={{borderBottom: step === 1? '5px solid #DF1D10': null}} onClick={() => setStep(1)}>Discovery</p>
          <p style={{borderBottom: step === 2? '5px solid #DF1D10': null}} onClick={() => setStep(2)}>Intaraction</p>
          <p style={{borderBottom: step === 3? '5px solid #DF1D10': null}} onClick={() => setStep(3)}>Audience</p>
          <p style={{borderBottom: step === 4? '5px solid #DF1D10': null}} onClick={() => setStep(4)}>Post</p>
          <p style={{borderBottom: step === 5? '5px solid #DF1D10': null}} onClick={() => setStep(5)}>Stories</p>
        </div>
      </div>
      <div className="componentBody">
        {step === 1 && <div >
          <h1>Discovery</h1></div>}
        {step === 2 && <div >
          <h1>Intaraction</h1></div>}
        {step === 3 && <div >
          <h1>Audience</h1></div>}
        {step === 4 && (
          <div>
            <h1>Post</h1>
          </div>
        )}
        {step === 5 && (
          <div>
            <h1>Stories</h1>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InstagramAds;
