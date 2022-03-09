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


const Instagram = () => {
  const [step, setStep] = useState(1);
  const [down, setDown] = useState(6);
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
                <p>Followers</p>
                <h1  style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>900</h1>
              </div>
              <ChartCard width={600} topChartName={'New Followers'} topChartNumber={''} chartName={<AdminChart insNewFollower={true} data={insNewFollowerData} />} sideContent={''} /> 
            </div>

            <div  className="chartContainer">
            <ChartCard width={300} topChartName={'Reach'} topChartNumber={'200'} chartName={<AdminChart insReach={true} data={insReachData} />} sideContent={''} /> 
            <ChartCard width={300} topChartName={'Impression'} topChartNumber={'200'} chartName={<AdminChart insImpression={true} data={insImpressionData} />} sideContent={''} /> 
            </div>
          </div>
        )}
        {step === 2 && (
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
                <p>Emails</p>
                <h1  style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>200</h1>
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
                <h1  style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>15</h1>
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
                <h1  style={{
                    textAlign: "center",
                    padding: "80px 0px",
                  }}>12</h1>
              </div>
            </div>

            <div className="chartContainer">
            <ChartCard width={300} topChartName={'Profile Visit'} topChartNumber={'608'} chartName={<AdminChart insProfileVisit={true} data={insProfileVisitData} />} sideContent={''} /> 
            <ChartCard width={300} topChartName={'Website Click'} topChartNumber={'650'} chartName={ <AdminChart insWebsiteClick={true} data={insWebsiteClickData} />} sideContent={''} /> 
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div  className="chartContainer">
            <ChartCard width={650} topChartName={'Age'} topChartNumber={''} chartName={<AdminChart insAudienceAge={true} data={insAudienceAgeData} />} sideContent={''} /> 
            <ChartCard width={200} topChartName={'Gender'} topChartNumber={''} chartName={<AdminChart insAudienceGender={true} data={insAudienceGenderData} />} sideContent={''} /> 
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
              <div  className="chartContainer">
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

      <DashboardModal
        open={showModal}
        onclose={handleClose}
        viewCalender={viewCalender}
      />
    </DashboardLayout>
  );
};

export default Instagram;
