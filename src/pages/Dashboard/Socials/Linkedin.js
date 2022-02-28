import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import AdminChart from "../components/AdminChart";
import { Avatar } from "@mui/material";
import Image1 from "../../../assets/images/img1.png";
import Image2 from "../../../assets/images/img2.png";
import ProgressingBar from '../components/ProgressingBar';
import { linkAudienceGrowthData, linkByJobFunctionData, linkClicksData, linkImpressionData, linkOrganicLikesData, linkSocialActionData } from "./components/socialData";

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

const Linkedin = () => {
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
          <h1>Linkedin</h1>
        </div>

        <div className="headerList">
          {" "}
          <p
            style={{ borderBottom: step === 1 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(1)}
          >
            Engagements
          </p>
          <p
            style={{ borderBottom: step === 2 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(2)}
          >
            Demographics
          </p>
          <p
            style={{ borderBottom: step === 3 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(3)}
          >
            Feeds
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
            <div>
              {/* <ChartCard /> */}
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Followers</p>
                <h1>900</h1>
              </div>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Organic VS likes</p>
                <AdminChart linkOrganicLikes={true} data={linkOrganicLikesData}/>
              </div>

              <div
                style={{
                  width: "450px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Audience Growth</p>
                <AdminChart linkAudienceGrowth={true} data={linkAudienceGrowthData}/>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "280px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Clicks</p>
                  <p>200</p>
                </div>
                <AdminChart linkClicks={true} data={linkClicksData} />
              </div>
              <div
                style={{
                  width: "285px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Impression</p>
                  <p>195</p>
                </div>
                <AdminChart linkImpression={true} data={linkImpressionData} />
              </div>
              <div
                style={{
                  width: "280px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Social Action</p>
                  <p>50</p>
                </div>
                <AdminChart linkSocialAction={true} data={linkSocialActionData} />
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "350px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Top followers by country</p>
               <ProgressingBar />
              </div>
              <div
                style={{
                  width: "350px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Top followers by company</p>
                <ProgressingBar />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  width: "500px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Followers by job function </p>
                <AdminChart linkByJobFunction={true} data={linkByJobFunctionData} />
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div
              style={{ background: "#fff", width: "350px", padding: "15px", marginBottom: '15px' }}
            >
              <div style={{ display: "flex" }}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>@Abigail</p>
                </div>
              </div>
              <img src={Image1} alt="post" />
              <p>The world can be a better Place</p>
              <hr />

              <p>10 comment</p>
            </div>
            <div
              style={{ background: "#fff", width: "350px", padding: "15px", marginBottom: '15px' }}
            >
              <div style={{ display: "flex" }}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>@Abigail</p>
                </div>
              </div>
              <img src={Image2} alt="post" />
              <p>The world can be a better Place</p>
              <hr />

              <p>10 comment</p>
            </div>
            <div
              style={{ background: "#fff", width: "350px", padding: "15px", marginBottom: '15px' }}
            >
              <div style={{ display: "flex" }}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>@Abigail</p>
                </div>
              </div>
              <img src={Image1} alt="post" />
              <p>The world can be a better Place</p>
              <hr />

              <p>10 comment</p>
            </div>

          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Linkedin;
