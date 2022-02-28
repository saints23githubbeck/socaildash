import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import ProgressingBar from '../components/ProgressingBar';
import AdsChart from "./components/AdsChart";
import { fbAdsLikesData } from "./components/adsData";


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

      <div style={{ display: "flex", marginLeft: "-15px" }}>
        {chartName}
        <div>{sideContent}</div>
      </div>
    </div>
  );
};

const LinkedinAds = () => {
  const [step, setStep] = useState(1);
  return (
    <DashboardLayout>
      <div className="headerFrame">
        <div
          style={{
            color: "#3578e5",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <BsIcons.BsLinkedin
            style={{ fontSize: "25px", marginRight: "10px" }}
          />
          <h1>Linkedin Ads</h1>
        </div>

        <div className="headerList">
          {" "}
          <p
            style={{ borderBottom: step === 1 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(1)}
          >
            Campaign Groups
          </p>
          <p
            style={{ borderBottom: step === 2 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(2)}
          >
            Campaign
          </p>
          <p
            style={{ borderBottom: step === 3 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(3)}
          >
            Ads
          </p>
        </div>
      
      </div>
      <div className="componentBody">
        {step === 1 && (
          <div>
            <div className="chartContainer">
              <ChartCard
                width="425px"
                topChartNumber="4,756"
                topChartName="Clicks"
                chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}

              />
              <ChartCard
                width="425px"
                topChartName="Clicks"
                chartName={<ProgressingBar />}

              />
            </div>
            <div className="cardContainer">
              <AdsCard name="Clicks" number="4,764" />
              <AdsCard name="Impression" number="214" />
              <AdsCard name="CPC" number="$0.45" />
              <AdsCard name="CTR" number="40%" />
              <AdsCard name="Cost" number="$1,523.00" />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="chartContainer">
              <ChartCard
                width="425px"
                topChartNumber="4,756"
                topChartName="Clicks"
                chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}

              />
              <ChartCard
                width="425px"
                topChartName="Clicks"
                chartName={<ProgressingBar />}

              />
            </div>
            <div className="cardContainer">
              <AdsCard name="Clicks" number="4,764" />
              <AdsCard name="Impression" number="214" />
              <AdsCard name="CPC" number="$0.45" />
              <AdsCard name="CTR" number="40%" />
              <AdsCard name="Cost" number="$1,523.00" />
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h1>Ads</h1>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default LinkedinAds;
