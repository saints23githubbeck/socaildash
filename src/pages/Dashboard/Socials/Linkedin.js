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
import DashboardModal from "../components/DashboardModal";
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        {chartName}
        <div>{sideContent}</div>
      </div>
    </div>
  );
};

const Linkedin = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [viewCalender, setViewCalender] = useState("");

  const handleOpen = (item) => {
    setShowModal(true);
    setViewCalender(item);
  };

  const handleClose = () => {
    setShowModal(false);
  };
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
        <div className="show"
          onClick={() => handleOpen("viewCalender")}
         
        >
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
      <div className="show1"
          onClick={() => handleOpen("viewCalender")}
         
        >
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
        {step === 1 && (
          <div>
            <div>
            </div>
            <div  className="chartContainer">
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
                <h1  style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>900</h1>
              </div>
              <ChartCard
                width={200}
                topChartName={"Organic VS likes"}
                topChartNumber={""}
                chartName={<AdminChart linkOrganicLikes={true} data={linkOrganicLikesData}/>}
                sideContent={""}
              />
              <ChartCard
                width={450}
                topChartName={"Audience Growth"}
                topChartNumber={""}
                chartName={<AdminChart linkAudienceGrowth={true} data={linkAudienceGrowthData}/>}
                sideContent={""}
              />
            </div>

            <div  className="chartContainer">
            <ChartCard
                width={280}
                topChartName={"Clicks"}
                topChartNumber={"200"}
                chartName={<AdminChart linkClicks={true} data={linkClicksData} />}
                sideContent={""}
              />
                          <ChartCard
                width={285}
                topChartName={"Impression"}
                topChartNumber={"195"}
                chartName={<AdminChart linkImpression={true} data={linkImpressionData} />}
                sideContent={""}
              />
              <ChartCard
                width={280}
                topChartName={"Social Action"}
                topChartNumber={"50"}
                chartName={<AdminChart linkSocialAction={true} data={linkSocialActionData} />}
                sideContent={""}
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="chartContainer">
            <ChartCard
                width={350}
                topChartName={"Top followers by country"}
                topChartNumber={""}
                chartName={ <ProgressingBar />}
                sideContent={""}
              />
            <ChartCard
                width={350}
                topChartName={"Top followers by company"}
                topChartNumber={""}
                chartName={ <ProgressingBar />}
                sideContent={""}
              />
            </div>
            <div >
            <ChartCard
                width={500}
                topChartName={"Followers by job function"}
                topChartNumber={""}
                chartName={<AdminChart linkByJobFunction={true} data={linkByJobFunctionData} />}
                sideContent={""}
              />
            </div>
          </div>
        )}
        {step === 3 && (
          <div  className="post">
            <div
              style={{ background: "#fff", width: "280px", padding: "15px", marginBottom: '15px' }}
            >
              <div style={{ display: "flex" }}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>@Abigail</p>
                </div>
              </div>
              <img src={Image1} alt="post" width={270}/>
              <p>The world can be a better Place</p>
              <hr />

              <p>10 comment</p>
            </div>
            <div
              style={{ background: "#fff", width: "280px", padding: "15px", marginBottom: '15px' }}
            >
              <div style={{ display: "flex" }}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>@Abigail</p>
                </div>
              </div>
              <img src={Image2} alt="post" width={270} />
              <p>The world can be a better Place</p>
              <hr />

              <p>10 comment</p>
            </div>
            <div
              style={{ background: "#fff", width: "280px", padding: "15px", marginBottom: '15px' }}
            >
              <div style={{ display: "flex" }}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>@Abigail</p>
                </div>
              </div>
              <img src={Image1} alt="post" width={270} />
              <p>The world can be a better Place</p>
              <hr />

              <p>10 comment</p>
            </div>

          </div>
        )}
      </div>

      <DashboardModal
        open={showModal}
        onclose={handleClose}
        viewCalender={viewCalender}
      />
    </DashboardLayout>
  );
};

export default Linkedin;
