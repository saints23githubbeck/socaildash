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
          {" "}
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
                <h1>2,000</h1>
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
                <p>Followers</p>
                <AdminChart twFollower={true} data={twFollowerData} />
              </div>
            </div>

            <div style={{ display: "flex" }}>
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
                  <p>Likes</p>
                  <p>200</p>
                </div>
                <AdminChart twLikes={true} data={twLikesData} />
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
                  <p>Retweet</p>
                  <p>200</p>
                </div>
                <AdminChart twRetweet={true} data={twRetweetData} />
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
                  <p>Tweet</p>
                  <p>200</p>
                </div>
                <AdminChart twTweet={true} data={twTweetData} />
              </div>
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
