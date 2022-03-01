import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import AdsChart from "./components/AdsChart";
import { fbAdsLikesData, linkAdsClicksData } from "./components/adsData";
import ProgressingBar from '../components/ProgressingBar';


const AdsCard = (props) => {
  const { name, number } = props;

  return (
    <div className="adsCard">
      <p>{name}</p>
      <h2>{number}</h2>
    </div>
  );
};
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
const GoogleAds = () => {
  const [step, setStep] = useState(1);
  return (
    <DashboardLayout>
      <div className="headerFrame">
        <div
          style={{
            color: "#7C90F8",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <BsIcons.BsGoogle style={{ fontSize: "25px", marginRight: "10px" }} />
          <h1>Google Ads</h1>
        </div>

        <div className="headerList">
          {" "}
          <p
            style={{ borderBottom: step === 1 ? "5px solid #7C90F8" : null }}
            onClick={() => setStep(1)}
          >
            Campaign
          </p>
          <p
            style={{ borderBottom: step === 2 ? "5px solid #7C90F8" : null }}
            onClick={() => setStep(2)}
          >
            Ad groups
          </p>
          <p
            style={{ borderBottom: step === 3 ? "5px solid #7C90F8" : null }}
            onClick={() => setStep(3)}
          >
            Key Words
          </p>
          <p
            style={{ borderBottom: step === 4 ? "5px solid #7C90F8" : null }}
            onClick={() => setStep(4)}
          >
            Shopping
          </p>
          <p
            style={{ borderBottom: step === 5 ? "5px solid #7C90F8" : null }}
            onClick={() => setStep(5)}
          >
            Ads
          </p>
        </div>
        <div style={{ color: "#fff", display: "flex", textAlign: "center" }}>
          <p
            style={{ background: "#3578e5", fontSize: "12px", padding: "2px" }}
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
      <div className="componentBody">
        {step === 1 && (
          <div>
            <div className="chartContainer">
              <ChartCard width="425px" topChartName="Clicks" chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />} />
              <ChartCard
                width="425px"
                topChartName="Clicks"
                chartName={<AdsChart linkAdsClicks={true} data={linkAdsClicksData} />}

              />
            </div>
            <div className="cardContainer">
              <AdsCard name="View through Conv" number="4,764" />
              <AdsCard name="Avg CPC" number="214" />
              <AdsCard name="Clicks" number="124" />
              <AdsCard name="Conversion Rate" number="409%" />
              <AdsCard name="Conversion " number="4,575" />
              <AdsCard name="Cost / conversion" number="$10,000" />
              <AdsCard name="Cost" number="$3,000" />
              <AdsCard name="Impression" number="$3,000" />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="chartContainer">
              <ChartCard width="425px" topChartName="Clicks" chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />} />
              <ChartCard
                width="425px"
                topChartName="Clicks"
                chartName={<AdsChart linkAdsClicks={true} data={linkAdsClicksData} />}

              />
            </div>
            <div className="cardContainer">
              <AdsCard name="View through Conv" number="4,764" />
              <AdsCard name="Avg CPC" number="214" />
              <AdsCard name="Clicks" number="124" />
              <AdsCard name="Conversion Rate" number="409%" />
              <AdsCard name="Conversion " number="4,575" />
              <AdsCard name="Cost / conversion" number="$10,000" />
              <AdsCard name="Cost" number="$3,000" />
              <AdsCard name="Impression" number="$3,000" />
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className="chartContainer">
              <ChartCard width="425px" topChartName="Clicks" chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />} />
              <ChartCard
                width="425px"
                topChartName="Clicks"
                chartName={<ProgressingBar />}

              />
            </div>
            <div className="cardContainer">
              <AdsCard name="View through Conv" number="4,764" />
              <AdsCard name="Avg CPC" number="214" />
              <AdsCard name="Clicks" number="124" />
              <AdsCard name="Conversion Rate" number="409%" />
              <AdsCard name="Conversion " number="4,575" />
              <AdsCard name="Cost / conversion" number="$10,000" />
              <AdsCard name="Cost" number="$3,000" />
              <AdsCard name="Impression" number="$3,000" />
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <div className="chartContainer">
              <ChartCard width="425px" topChartName="Clicks" chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />} />
              <ChartCard
                width="425px"
                topChartName="Clicks"
                chartName={<AdsChart linkAdsClicks={true} data={linkAdsClicksData} />}

              />
            </div>
            <div className="cardContainer">
              <AdsCard name="View through Conv" number="4,764" />
              <AdsCard name="Avg CPC" number="214" />
              <AdsCard name="Clicks" number="124" />
              <AdsCard name="Conversion Rate" number="409%" />
              <AdsCard name="Conversion " number="4,575" />
              <AdsCard name="Cost / conversion" number="$10,000" />
              <AdsCard name="Cost" number="$3,000" />
              <AdsCard name="Impression" number="$3,000" />
            </div>
          </div>
        )}
        {step === 5 && (
           <div>
           <div className="chartContainer">
             <ChartCard width="425px" topChartName="Clicks" chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />} />
             <ChartCard
               width="425px"
               topChartName="Clicks"
               chartName={<ProgressingBar />}

             />
           </div>
           <div className="cardContainer">
             <AdsCard name="View through Conv" number="4,764" />
             <AdsCard name="Avg CPC" number="214" />
             <AdsCard name="Clicks" number="124" />
             <AdsCard name="Conversion Rate" number="409%" />
             <AdsCard name="Conversion " number="4,575" />
             <AdsCard name="Cost / conversion" number="$10,000" />
             <AdsCard name="Cost" number="$3,000" />
             <AdsCard name="Impression" number="$3,000" />
           </div>
         </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default GoogleAds;