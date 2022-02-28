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

const Youtube = () => {
  const [step, setStep] = useState(1);
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
                <p>Subscriber</p>
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
                <p>Gained & Lost User</p>
                <AdminChart youGainLostUser={true} data={youGainLostUserData} />
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
            <div style={{ display: "flex" }}>
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
                <h1>100</h1>
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
                <h1>-40</h1>
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
                <h1>50</h1>
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
                <p>Gained & Lost User</p>
                <AdminChart youEngGainLostUser={true} data={youEngGainLostUserData} />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Comments</p>
                  <p>1000</p>
                </div>
                <AdminChart youAvgViewDuration={true} data={youAvgViewDurationData} />
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Share</p>
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
        {step === 3 && (
          <div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "650px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Age</p>
                <AdminChart
                  youAge={true}
                  data={youAgeData}
                />
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
                <p>Gender</p>
                <AdminChart
                  youGender={true}
                  data={youGenderData}
                />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "400px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Views</p>
                <img src="" alt="display map" />
              </div>
              <div
                style={{
                  width: "400px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>Viewer by device</p>
                <AdminChart
                  youEstimatedMinWatched={true}
                  data={youEstimatedMinWatchedData}
                />
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div
              style={{
                background: "#fff",
                width: "350px",
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
                width="325"
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
                width: "350px",
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
                width="325"
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
                width: "350px",
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
                width="325"
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
    </DashboardLayout>
  );
};

export default Youtube;
