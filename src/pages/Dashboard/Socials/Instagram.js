import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import AdminChart from "../components/AdminChart";
import Image2 from "../../../assets/images/img2.png";
import * as BiIcons from "react-icons/bi";
import { Avatar } from "@mui/material";
import { insAudienceAgeData, insAudienceGenderData, insImpressionData, insNewFollowerData, insProfileVisitData, insReachData, insWebsiteClickData } from "./components/socialData";

const Instagram = () => {
  const [step, setStep] = useState(1);
  const [down, setDown] = useState(6);

  return (
    <DashboardLayout>
      <div className="headerFrame">
        <div
          style={{
            color: "#DF1D10",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <BsIcons.BsInstagram
            style={{ fontSize: "25px", marginRight: "10px" }}
          />
          <h1>Instagram</h1>
        </div>

        <div className="headerList">
          {" "}
          <p
            style={{ borderBottom: step === 1 ? "5px solid #DF1D10" : null }}
            onClick={() => setStep(1)}
          >
            Discovery
          </p>
          <p
            style={{ borderBottom: step === 2 ? "5px solid #DF1D10" : null }}
            onClick={() => setStep(2)}
          >
            Intaraction
          </p>
          <p
            style={{ borderBottom: step === 3 ? "5px solid #DF1D10" : null }}
            onClick={() => setStep(3)}
          >
            Audience
          </p>
          <p
            style={{ borderBottom: step === 4 ? "5px solid #DF1D10" : null }}
            onClick={() => setStep(4)}
          >
            Post
          </p>
          <p
            style={{ borderBottom: step === 5 ? "5px solid #DF1D10" : null }}
            onClick={() => setStep(5)}
          >
            Stories
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
                <h1>900</h1>
              </div>

              <div
                style={{
                  width: "600px",
                  height: "200px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <p>New Followers</p>
                <AdminChart insNewFollower={true} data={insNewFollowerData} />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Reach</p>
                  <p>200</p>
                </div>

                <div>
                <AdminChart insReach={true} data={insReachData} />

                </div>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  border: "1px solid gray",
                  margin: "20px",
                  padding: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Impression</p>
                  <p>200</p>
                </div>

                <div>
                <AdminChart insImpression={true} data={insImpressionData} />
              
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
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
                <p>Emails</p>
                <h1>200</h1>
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
                <p>Get Direction</p>
                <h1>15</h1>
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
                <p>Calls</p>
                <h1>12</h1>
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
                  <p>Profile Visit</p>
                  <p>608</p>
                </div>
                <AdminChart insProfileVisit={true} data={insProfileVisitData} />
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
                  <p>Website Click</p>
                  <p>650</p>
                </div>
               <AdminChart insWebsiteClick={true} data={insWebsiteClickData} />
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
                <AdminChart insAudienceAge={true} data={insAudienceAgeData} />
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
               <AdminChart insAudienceGender={true} data={insAudienceGenderData} />
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
              <img src={Image2} alt="post" />
              <p>The world can be a better Place</p>
              <hr />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <BiIcons.BiMessageRounded style={{ width: 20, height: 20 }} />{" "}
                  <p>102</p>
                </div>

                <div style={{ textAlign: "center" }}>
                  {" "}
                  <BiIcons.BiHeart style={{ width: 20, height: 20 }} />{" "}
                  <p>4,986</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-around",  }}>
              <Avatar
                src=""
                style={{border: down === 6 ? "1px solid #DF1D10" : null }}
                onClick={() => setDown(6)}
              />
              <Avatar
                src=""
                style={{ border: down === 7 ? "1px solid #DF1D10" : null }}
                onClick={() => setDown(7)}
              />
              <Avatar
                src=""
                style={{ border: down === 8 ? "1px solid #DF1D10" : null }}
                onClick={() => setDown(8)}
              />
              <Avatar
                src=""
                style={{ border: down === 9 ? "1px solid #DF1D10" : null }}
                onClick={() => setDown(9)}
              />
              <Avatar
                src=""
                style={{ border: down === 10 ? "1px solid #DF1D10" : null }}
                onClick={() => setDown(10)}
              />
            </div>
            <div >
              {down === 6 && (
                <div style={{background: 'red', width: '250px', margin:'auto', height:'500px', textAlign:'center', display:'flex', justifyContent:'center' }}>
                  
                </div>
              )}
              {down === 7 && (
                <div style={{background: 'green', width: '250px', margin:'auto', height:'500px', textAlign:'center', display:'flex', justifyContent:'center' }}>
                  
                </div>
              )}
              {down === 8 && (
                <div style={{background: 'red', width: '250px', margin:'auto', height:'500px', textAlign:'center', display:'flex', justifyContent:'center' }}>
                  down8
                  <Avatar src="" />
                </div>
              )}
              {down === 9 && (
                <div style={{background: 'red', width: '250px', margin:'auto', height:'500px', textAlign:'center', display:'flex', justifyContent:'center' }}>
                  down9
                  <Avatar src="" />
                </div>
              )}
              {down === 10 && (
                <div style={{background: 'red', width: '250px', margin:'auto', height:'500px', textAlign:'center', display:'flex', justifyContent:'center' }}>
                  down110
                  <Avatar src="" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Instagram;
