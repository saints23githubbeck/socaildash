import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import { Avatar } from "@mui/material";
import Image1  from "../../../assets/images/img1.png";
import Image2  from "../../../assets/images/img2.png";
import AdminChart from "../components/AdminChart";
import { fbAudienceEngagementData, fbAudienceGrowthData, fbEngagementData, fbGenderData, fbLikeAgeData, fbOrganicLikesData } from "./components/socialData";
import DashboardModal from "../components/DashboardModal";

const Facebook = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [viewCalender, setViewCalender] = useState('')
 
  const handleOpen = (item) => {
    setShowModal(true);
    setViewCalender(item)
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
          <BsIcons.BsFacebook
            style={{ fontSize: "25px", marginRight: "10px" }}
          />
          <h1>Facebook</h1>
        </div>

        <div className="headerList">
          {" "}
          <p style={{borderBottom: step === 1? '5px solid #3578e5': null}} onClick={() => setStep(1)}>Likes</p>
          <p style={{borderBottom: step === 2? '5px solid #3578e5': null}} onClick={() => setStep(2)}>Engagements</p>
          <p style={{borderBottom: step === 3? '5px solid #3578e5': null}} onClick={() => setStep(3)}>Reach</p>
          <p style={{borderBottom: step === 4? '5px solid #3578e5': null}} onClick={() => setStep(4)}>Post</p>
        </div>
        <div onClick={() => handleOpen("viewCalender")} style={{  color: "#fff", display: "flex", textAlign: "center" }}>
          <p style={{ background: '#3578e5', fontSize: "12px", padding: "2px" }}>
            <FaIcons.FaCalendarAlt />
            last 30 days
          </p>
          <p
            style={{
              background: '#3578e5',
              width: "30px",
              margin: "0px 10px",
              padding: "2px",
            }}
          >
            <VscIcons.VscSettings />
          </p>
          <p style={{ background: '#3578e5', width: "30px", padding: "2px" }}>
            <BsIcons.BsFillShareFill />
          </p>
        </div>
      </div>
      <div className="componentBody">
        {step === 1 && (
        <div >
          <div style={{display: 'flex',}}>
                <div style={{ width:'200px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}} >
                  <p>Total Likes</p>
                  <h1>2,908</h1>
                </div>
               
                <div style={{ width:'200px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Organic VS paid Likes</p>
                   <AdminChart fbOrganicLikes={true} data={fbOrganicLikesData} />
                </div>
                <div style={{ width:'450px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Audience Growth</p>
                   <AdminChart fbAudienceGrowth={true} data={fbAudienceGrowthData} />           
                </div>
            </div>

            <div style={{display: 'flex',}}>
            <div style={{ width:'650px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Age</p>
                   <AdminChart fbLikeAge={true} data={fbLikeAgeData} />
                </div>
                <div style={{ width:'200px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Gender</p>
                  <AdminChart fbGender={true} data={fbGenderData} />
                </div>
            </div>
          </div>
          )}
        {step === 2 && (
          <div >
          <div style={{display: 'flex',}}>
                <div style={{ width:'425px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}} >
                  <p>Audience Engagement</p>
                  <AdminChart fbAudienceEngagement={true} data={fbAudienceEngagementData} />

                </div>
               
                <div style={{ width:'425px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Engagement</p>
                   <AdminChart fbEngagement={true} data={fbEngagementData} />
                </div>
            </div>

            <div style={{display: 'flex',}}>
            <div style={{ width:'650px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Age</p>
                   <AdminChart fbLikeAge={true} data={fbLikeAgeData} />
                </div>
                <div style={{ width:'200px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Gender</p>
                  <AdminChart fbGender={true} data={fbGenderData} />
                </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div >
          <div style={{display: 'flex',}}>
                <div style={{ width:'450px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}} >
                  <p>Total Reach</p>
                  <AdminChart fbAudienceEngagement={true} data={fbAudienceEngagementData} />
                </div>
               
                <div style={{ width:'200px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Organic VS paid Likes</p>
                   <AdminChart fbOrganicLikes={true} data={fbOrganicLikesData} />
                </div>
                <div style={{ width:'200px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Video Views</p>
                   <AdminChart fbOrganicLikes={true} data={fbOrganicLikesData} />
                </div>
            </div>

            <div style={{display: 'flex',}}>
            <div style={{ width:'650px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Age</p>
                   <AdminChart fbLikeAge={true} data={fbLikeAgeData} />
                </div>
                <div style={{ width:'200px', height:'200px', border:'1px solid gray', margin:'20px', padding:'15px',}}>
                   <p>Gender</p>
                  <AdminChart fbGender={true} data={fbGenderData} />
                </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr'}}>
            <div style={{background:'#fff', width:'350px', padding:'15px'}}>
              <div style={{display:'flex', justifyContent: 'space-around'}}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>1d ..</p>
                </div>
                <p>...</p>
              </div>
              <h5>The world can be a better Place</h5>
              <img src={Image1}  alt='post'/>
              <div style={{display:'flex', justifyContent: 'space-around'}}>
                <h6>20 likes</h6>
                <h6>10 comment</h6>
                <h6>5 share</h6>
              </div>
            </div>
            <div style={{background:'#fff', width:'350px', padding:'15px'}}>
              <div style={{display:'flex', justifyContent: 'space-around'}}>
                <Avatar />
                <div>
                  <h3>Anthony Abigail</h3>
                  <p>1d ..</p>
                </div>
                <p>...</p>
              </div>
              <h5>The world can be a better Place</h5>
              <img src={Image2}  alt='post'/>
              <div style={{display:'flex', justifyContent: 'space-around'}}>
                <h6>20 likes</h6>
                <h6>10 comment</h6>
                <h6>5 share</h6>
              </div>
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

export default Facebook;
