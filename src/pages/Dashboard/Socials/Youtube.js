import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import AdminChart from "../components/AdminChart";
import {
  youAgeData,
  youAvgViewDurationData,
  youEngGainLostUserData,
  youEstimatedMinWatchedData,
  youGainLostUserData,
  youGenderData,
  youViewData,
} from "./components/socialData";
import { Avatar } from "@mui/material";
import Continent from '../../../assets/images/continent.png';
import DashboardModal from "../components/DashboardModal";


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


const Youtube = () => {
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
          <h1>Youtube</h1>
        </div>

        <div className="headerList">
          {" "}
          <p
            style={{ borderBottom: step === 1 ? "5px solid #D80A0A" : null }}
            onClick={() => setStep(1)}
          >
            Overview
          </p>
          <p
            style={{ borderBottom: step === 2 ? "5px solid #D80A0A" : null }}
            onClick={() => setStep(2)}
          >
            Engagements
          </p>
          <p
            style={{ borderBottom: step === 3 ? "5px solid #D80A0A" : null }}
            onClick={() => setStep(3)}
          >
            Demographics
          </p>
          <p
            style={{ borderBottom: step === 4 ? "5px solid #D80A0A" : null }}
            onClick={() => setStep(4)}
          >
            Video
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
                <p>Subscriber</p>
                <h1 style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>2,000</h1>
              </div>

              <div
                style={{
                  width: "650px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Gained & Lost User</p>
                <AdminChart youGainLostUser={true} data={youGainLostUserData} />
              </div>
            </div>

            <div  className="chartContainer">
              <div
                style={{
                  width: "350px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>view</p>
                  <p>1000</p>
                </div>
                <AdminChart youView={true} data={youViewData} />
              </div>
              <div
                style={{
                  width: "250px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Avg. view duration</p>
                  <p>00:00:34</p>
                </div>
                <AdminChart
                  youAvgViewDuration={true}
                  data={youAvgViewDurationData}
                />
              </div>
              <div
                style={{
                  width: "250px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Estimated minute watched</p>
                  <p>1,950</p>
                </div>
                <AdminChart
                  youEstimatedMinWatched={true}
                  data={youEstimatedMinWatchedData}
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div  className="chartContainer">
              <div
                style={{
                  width: "130px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Likes</p>
                <h1  style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>100</h1>
              </div>
              
              <div
                style={{
                  width: "130px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Dislikes</p>
                <h1  style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>-40</h1>
              </div>
              <div
                style={{
                  width: "130px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Views</p>
                <h1  style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>50</h1>
              </div>
              <ChartCard
                width={350}
                topChartName={"Gained & Lost User"}
                topChartNumber={""}
                chartName={<AdminChart youEngGainLostUser={true} data={youEngGainLostUserData} />}
                sideContent={""}
              />
            </div>
            <div  className="chartContainer">
            <ChartCard
                width={300}
                topChartName={"Comments"}
                topChartNumber={"1000"}
                chartName={<AdminChart youAvgViewDuration={true} data={youAvgViewDurationData} />}
                sideContent={""}
              />
                            <ChartCard
                width={300}
                topChartName={"Share"}
                topChartNumber={"1,950"}
                chartName={ <AdminChart
                  youEstimatedMinWatched={true}
                  data={youEstimatedMinWatchedData}
                />}
                sideContent={""} />
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div  className="chartContainer">
            <ChartCard
                width={650}
                topChartName={"Age"}
                topChartNumber={""}
                chartName={<AdminChart
                  youAge={true}
                  data={youAgeData}
                />}
                sideContent={""}
              />
              <ChartCard
                width={200}
                topChartName={"Gender"}
                topChartNumber={""}
                chartName={ <AdminChart
                  youGender={true}
                  data={youGenderData}
                />}
                sideContent={""}
              />
    </div>
            <div  className="chartContainer">
            <ChartCard
                width={400}
                topChartName={"Views"}
                topChartNumber={""}
             chartName={<img src={Continent} alt=" " width={450} height={180} />}

                sideContent={""}
              />
              <ChartCard
                width={400}
                topChartName={"Viewer by device"}
                topChartNumber={""}
                chartName={ <AdminChart
                  youEstimatedMinWatched={true}
                  data={youEstimatedMinWatchedData}
                />}
                sideContent={""}
              />
            </div>
          </div>
        )}
        {step === 4 && (
          <div  className="post">
            <div
              style={{
                background: "#fff",
                width: "280px",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <div style={{ display: "flex" }}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>@Abigail</p>
                </div>
              </div>
              <iframe
                width="270"
                height="150"
                src="https://www.youtube.com/embed/1v32Op5Uwdc"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <p>The world can be a better Place</p>
              <hr />

              <p>10 comment</p>
            </div>
            <div
              style={{
                background: "#fff",
                width: "280px",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <div style={{ display: "flex" }}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>@Abigail</p>
                </div>
              </div>
              <iframe
                width="270"
                height="150"
                src="https://www.youtube.com/embed/7cWy7a8pxVo?start=3721"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <p>The world can be a better Place</p>
              <hr />

              <p>10 comment</p>
            </div>
            <div
              style={{
                background: "#fff",
                width: "280px",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <div style={{ display: "flex" }}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>@Abigail</p>
                </div>
              </div>
              <iframe
                width="270"
                height="150"
                src="https://www.youtube.com/embed/xcIlp9y9Ml8?start=3010"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
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

export default Youtube;
