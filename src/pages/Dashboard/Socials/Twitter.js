import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import {
  twFollowerData,
  twLikesData,
  twRetweetData,
  twTweetData,
} from "./components/socialData";
import AdminChart from "../components/AdminChart";
import { Avatar } from "@mui/material";

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

const Twitter = () => {
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
          <h1>Twitter</h1>
        </div>

        <div className="headerList">
          <p
            style={{ borderBottom: step === 1 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(1)}
          >
            Insight
          </p>
          <p
            style={{ borderBottom: step === 2 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(2)}
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
                <h1 style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>2,000</h1>
              </div>
              <ChartCard
                width={650}
                topChartName={"Followers"}
                topChartNumber={""}
                chartName={
                  <AdminChart twFollower={true} data={twFollowerData} />
                }
                sideContent={""}
              />
            </div>

            <div style={{ display: "flex" }}>
              <ChartCard
                width={350}
                topChartName={"Likes"}
                topChartNumber={"200"}
                chartName={<AdminChart twLikes={true} data={twLikesData} />}
                sideContent={""}
              />

              <ChartCard
                width={250}
                topChartName={"Retweet"}
                topChartNumber={"200"}
                chartName={<AdminChart twRetweet={true} data={twRetweetData} />}
                sideContent={""}
              />
              <ChartCard
                width={250}
                topChartName={"Tweet"}
                topChartNumber={"200"}
                chartName={<AdminChart twTweet={true} data={twTweetData} />}
                sideContent={""}
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <div className="twitterFeed">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: "15px 25px",
                }}
              >
                <Avatar />
                <h5>Anthony Abigail</h5>
                <p>12h..</p>
                <h6>...</h6>
              </div>
              <div className="feedText">
                Dont bring people down because you want to be heard
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <BiIcons.BiMessageRounded style={{ width: 20, height: 20 }} />{" "}
                  102
                </div>
                <div style={{ display: "flex" }}>
                  {" "}
                  <FaIcons.FaRetweet style={{ width: 20, height: 20 }} /> 867
                </div>
                <div style={{ display: "flex" }}>
                  {" "}
                  <BiIcons.BiHeart style={{ width: 20, height: 20 }} /> 4,986
                </div>
              </div>
            </div>
            <div className="twitterFeed">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: "15px 25px",
                }}
              >
                <Avatar />
                <h5>Anthony Abigail</h5>
                <p>12h..</p>
                <h6>...</h6>
              </div>
              <div className="feedText">
                Dont bring people down because you want to be heard
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <BiIcons.BiMessageRounded style={{ width: 20, height: 20 }} />{" "}
                  102
                </div>
                <div style={{ display: "flex" }}>
                  {" "}
                  <FaIcons.FaRetweet style={{ width: 20, height: 20 }} /> 867
                </div>
                <div style={{ display: "flex" }}>
                  {" "}
                  <BiIcons.BiHeart style={{ width: 20, height: 20 }} /> 4,986
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Twitter;
