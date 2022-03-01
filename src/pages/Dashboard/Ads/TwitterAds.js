import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import { fbAdsLikesData} from "./components/adsData";
import AdsChart from "./components/AdsChart";
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

const TwitterAds = () => {
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
          <BsIcons.BsTwitter
            style={{ fontSize: "25px", marginRight: "10px" }}
          />
          <h1>Twitter Ads</h1>
        </div>

        <div className="headerList">
          {" "}
          <p style={{borderBottom: step === 1? '5px solid #3578e5': null}} onClick={() => setStep(1)}>Campaign</p>
          <p style={{borderBottom: step === 2? '5px solid #3578e5': null}} onClick={() => setStep(2)}>Ad Groups</p>
          <p style={{borderBottom: step === 3? '5px solid #3578e5': null}} onClick={() => setStep(3)}>Ads</p>
        </div>
   
      </div>
      <div className="componentBody">
        {step === 1 && 
        <div>
        <div className="chartContainer">
          <ChartCard
            width="425px"
            topChartNumber="4,756"
            topChartName="Impression"
            chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}

          />
          <ChartCard
            width="425px"
            topChartName="Impression"
            chartName={<ProgressingBar />}
          />
        
        </div>
        <div className="cardContainer">
        <AdsCard name="Impression" number="4,756" />
        <AdsCard name="Engagement" number="214" />
        <AdsCard name="Clicks" number="4.9%" />
        <AdsCard name="Conversion" number="409" />
        <AdsCard name="Cost" number="$1,523.00" />
        </div>
        <div>
table
        </div>
      </div>}
        {step === 2 && (
          <div>
          <div className="chartContainer">
            <ChartCard
              width="425px"
              topChartNumber="4,756"
              topChartName="Impression"
              chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}

            />
            <ChartCard
              width="425px"
              topChartName="Impression"
              chartName={<ProgressingBar />}
            />
          
          </div>
          <div className="cardContainer">
          <AdsCard name="Impression" number="4,756" />
          <AdsCard name="Engagement" number="214" />
          <AdsCard name="Clicks" number="4.9%" />
          <AdsCard name="Conversion" number="409" />
          <AdsCard name="Cost" number="$1,523.00" />
          </div>
          <div>
  table
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

export default TwitterAds;
