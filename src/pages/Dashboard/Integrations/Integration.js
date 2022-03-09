import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import { FaPlug } from "react-icons/fa";
import Search from "../../../components/Search";
import DashboardLayout from "../components/DashboardLayout";

const SocialCard = (props) => {
  const { name, icon, iconColor } = props;
  return (
    <div className="socialCard">
      <div
        style={{
          fontSize: "30px",
          color:iconColor,
        }}
      >
        {icon}
      </div>
      <p>{name}</p>
    </div>
  );
};

const Integration = () => {
  const [step, setStep] = useState(1);
  return (
    <DashboardLayout>
      <div className="headerFrame">
        <div style={{
            color: "#3578e5",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}>
           <FaPlug style={{ fontSize: "25px", marginRight: "10px" }}/>
        <h1>
           Integration
        </h1>
        </div>
       
        <div className="headerList">
          {" "}
          <p style={{borderBottom: step === 1? '5px solid #3578e5': null}} onClick={() => setStep(1)}>All</p>
          <p style={{borderBottom: step === 2? '5px solid #3578e5': null}} onClick={() => setStep(2)}>Ads</p>
          <p style={{borderBottom: step === 3? '5px solid #3578e5': null}} onClick={() => setStep(3)}>Socials</p>
        </div>
        <Search />
      </div>
      <div className="componentBody">
        {step === 1 && (
          <div className="integrationCard">
            <SocialCard name={"Facebook"} icon={<BsIcons.BsFacebook />} iconColor={'#3578E5'} />
            <SocialCard name={"Facebook Ads"} icon={<BsIcons.BsFacebook />} iconColor={' #3578E5'} />
            <SocialCard name={"Instagram"} icon={<BsIcons.BsInstagram />} iconColor={'#DF1D10'} />
            <SocialCard name={"Instagram Ads"} icon={<BsIcons.BsInstagram />} iconColor={'#DF1D10'} />
            <SocialCard name={"Linkedin"} icon={<BsIcons.BsFacebook />} iconColor={'#3578E5'} />
            <SocialCard name={"Linkedin Ads"} icon={<BsIcons.BsLinkedin />} iconColor={'#3578E5'} />
            <SocialCard name={"Twitter"} icon={<BsIcons.BsTwitter />} iconColor={'#3578E5'} />
            <SocialCard name={"Twitter Ads"} icon={<BsIcons.BsTwitter />} iconColor={'#3578E5'} />
            <SocialCard name={"Youtube"} icon={<BsIcons.BsYoutube />} iconColor={'#D80A0A'} />
            <SocialCard name={"Youtube Ads"} icon={<BsIcons.BsYoutube />} iconColor={'#D80A0A'} />
            <SocialCard name={"Google Ads"} icon={<BsIcons.BsGoogle />} iconColor={'#7B9828 '} />
          </div>
        )}
        {step === 2 && (
          <div className="integrationCard">
          
            <SocialCard name={"Facebook Ads"} icon={<BsIcons.BsFacebook />} iconColor={' #3578E5'} />
            
            <SocialCard name={"Instagram Ads"} icon={<BsIcons.BsInstagram />} iconColor={'#DF1D10'} />
            
            <SocialCard name={"Linkedin Ads"} icon={<BsIcons.BsLinkedin />} iconColor={'#3578E5'} />
         
            <SocialCard name={"Twitter Ads"} icon={<BsIcons.BsTwitter />} iconColor={'#3578E5'} />
          
            <SocialCard name={"Youtube Ads"} icon={<BsIcons.BsYoutube />} iconColor={'#D80A0A'} />
            <SocialCard name={"Google Ads"} icon={<BsIcons.BsGoogle />} iconColor={'#7B9828 '} />
          </div>
        )}
        {step === 3 && (
           <div className="integrationCard" >
             <SocialCard name={"Facebook"} icon={<BsIcons.BsFacebook />} iconColor={'#3578E5'} />
             <SocialCard name={"Instagram"} icon={<BsIcons.BsInstagram />} iconColor={'#DF1D10'} />
           
             <SocialCard name={"Linkedin"} icon={<BsIcons.BsFacebook />} iconColor={'#3578E5'} />
           
             <SocialCard name={"Twitter"} icon={<BsIcons.BsTwitter />} iconColor={'#3578E5'} />
                 
             <SocialCard name={"Youtube"} icon={<BsIcons.BsYoutube />} iconColor={'#D80A0A'} />
            
           </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Integration;
