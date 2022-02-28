import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import { fbAdsGenderData, fbAdsLikesData, fbAdsViewerByDeviceData } from "./components/adsData";
import AdsChart from "./components/AdsChart";

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

      <div style={{ display:'flex' , marginLeft: "-15px" }}>{chartName}
      <div>{sideContent}</div>
      </div>
    </div>
  );
};

const FacebookAds = () => {
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
          <BsIcons.BsFacebook
            style={{ fontSize: "25px", marginRight: "10px" }}
          />
          <h1>Facebook Ads</h1>
        </div>

        <div className="headerList">
          {" "}
          <p
            style={{ borderBottom: step === 1 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(1)}
          >
            Campaign
          </p>
          <p
            style={{ borderBottom: step === 2 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(2)}
          >
            Ad Sets
          </p>
          <p
            style={{ borderBottom: step === 3 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(3)}
          >
            Ads
          </p>
          <p
            style={{ borderBottom: step === 4 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(4)}
          >
            Demographics
          </p>
          <p
            style={{ borderBottom: step === 5 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(5)}
          >
            Custom conversion
          </p>
        </div>

      </div>
      <div className="componentBody">
        {step === 1 && (
          <div>
            <div className="chartContainer">
              <ChartCard
                width="425px"
                topChartNumber="800"
                topChartName="Likes"
                chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}
              />
              <ChartCard
              sideContent={<ul>
                <li>iofgi</li>
                <li>iofgi</li>
                <li>iofgi</li>
                <li>iofgi</li>
              </ul>}
                width="425px"
                topChartName="Viewers by device"
                chartName={<AdsChart fbAdsViewerByDevice={true} data={fbAdsViewerByDeviceData} />}
              />
            
            </div>
            <div className="cardContainer">
            <AdsCard name="Clicks" number="4,756" />
            <AdsCard name="Impression" number="214K" />
            <AdsCard name="CTR" number="4.9%" />
            <AdsCard name="Average CPC" number="409" />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="chartContainer">
              <ChartCard
                width="425px"
                topChartNumber="3,200"
                topChartName="Event"
                chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}

              />
              <ChartCard
                width="425px"
                topChartName="Conversion"
                topChartNumber='2,100'
                chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}

              />
            
            </div>
            <div>Table</div>
          </div>
        )}
        {step === 3 && (
          <div>
          <div className="chartContainer">
            <ChartCard
              width="425px"
              topChartNumber="800"
              topChartName="Likes"
              chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}
                         />
            <ChartCard
            sideContent={<ul>
              <li>iofgi</li>
              <li>iofgi</li>
              <li>iofgi</li>
              <li>iofgi</li>
            </ul>}
              width="425px"
              topChartName="Viewers by device"
              chartName={<AdsChart fbAdsViewerByDevice={true} data={fbAdsViewerByDeviceData} />}

            />
          
          </div>
          <div className="cardContainer">
          <AdsCard name="Clicks" number="4,756" />
          <AdsCard name="Impression" number="214K" />
          <AdsCard name="CTR" number="4.9%" />
          <AdsCard name="Average CPC" number="409" />
          </div>
        </div>
        )}
        {step === 4 && (
         <div>
         <div className="chartContainer">
           <ChartCard
             width="450px"
             topChartName="Clicks"
             chartName={''}
           />
           <ChartCard
             width="200px"
             topChartName="Gender"
             chartName={<AdsChart fbAdsGender={true} data={fbAdsGenderData} />}
           />
         
         </div>
         <div className="cardContainer">
         <AdsCard name="Clicks" number="4,756" />
         <AdsCard name="Impression" number="214K" />
         <AdsCard name="CTR" number="4.9%" />
         <AdsCard name="Average CPC" number="409" />
         </div>
       </div>
        )}
        {step === 5 && (
         <div>
            <div className="chartContainer">
              <ChartCard
                width="425px"
                topChartNumber="800"
                topChartName="Likes"
                chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}

              />
              <ChartCard
            
                width="425px"
                topChartName="Viewers by device"
                chartName={<AdsChart fbAdsLikes={true} data={fbAdsLikesData} />}

              />
            
            </div>
            <div>
            Table
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default FacebookAds;
