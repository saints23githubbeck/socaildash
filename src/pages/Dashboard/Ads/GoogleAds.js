import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import AdsChart from "./components/AdsChart";
import { fbAdsLikesData, linkAdsClicksData } from "./components/adsData";
import ProgressingBar from '../components/ProgressingBar';
import DashboardModal from "../components/DashboardModal";


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
  const [showModal, setShowModal] = useState(false);
  const [viewCalender, setViewCalender] = useState("");
  const [share, setShare] = useState("");

  const handleOpen = (item) => {
    setShowModal(true);
    setViewCalender(item);
    setShare(item);
  };

  const handleClose = () => {
    setShowModal(false);
  };
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
        <div className="show">  <p
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
      <div className="componentBody">
      <div className="show1">  <p
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

      <DashboardModal
        open={showModal}
        onclose={handleClose}
        viewCalender={viewCalender}
        share={share}
      />
    </DashboardLayout>
  );
};

export default GoogleAds;
