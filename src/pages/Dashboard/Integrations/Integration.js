import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import { FaPlug } from "react-icons/fa";
import Search from "../../../components/Search";
import DashboardLayout from "../components/DashboardLayout";
import IntegrationModal from "./IntegrationModal";

const SocialCard = (props) => {
  const { name, icon, iconColor, onClick } = props;

  return (

      <div className="socialCard" onClick={onClick} >
        <div
          style={{
            fontSize: "30px",
            color: iconColor,
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
  const [modalLinks, setModalLinks] =useState('')
  const [showModal, setShowModal] = useState(false);


  const handleOpen = (item) => {
    setShowModal(true);
setModalLinks(item);
console.log(item)

  };
  console.log(modalLinks);

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
          <FaPlug style={{ fontSize: "25px", marginRight: "10px" }} />
          <h1>Integration</h1>
        </div>

        <div className="headerList">
          {" "}
          <p
            style={{ borderBottom: step === 1 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(1)}
          >
            All
          </p>
          <p
            style={{ borderBottom: step === 2 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(2)}
          >
            Ads
          </p>
          <p
            style={{ borderBottom: step === 3 ? "5px solid #3578e5" : null }}
            onClick={() => setStep(3)}
          >
            Socials
          </p>
        </div>
        <Search />
      </div>
      <div className="componentBody">
        {step === 1 && (
          <div className="integrationCard">
            <SocialCard
              name={"Facebook"}
              icon={<BsIcons.BsFacebook />}
              iconColor={"#3578E5"}
              onClick={() => handleOpen("fblinks")}
            />
            <SocialCard
              name={"Facebook Ads"}
              icon={<BsIcons.BsFacebook />}
              iconColor={" #3578E5"}
              onClick={() => handleOpen("fbadslinks")}
            />
            <SocialCard
              name={"Instagram"}
              icon={<BsIcons.BsInstagram />}
              onClick={() => handleOpen("instlinks")} 
              iconColor={"#DF1D10"}
            />
            <SocialCard
              name={"Instagram Ads"}
              icon={<BsIcons.BsInstagram />}
              onClick={() => handleOpen("instadslinks")}
              iconColor={"#DF1D10"}
            />
            <SocialCard
              name={"Linkedin"}
              onClick={() => handleOpen("linklinks")}
              icon={<BsIcons.BsFacebook />}
              iconColor={"#3578E5"}
            />
            <SocialCard
              name={"Linkedin Ads"}
              onClick={() => handleOpen("linkadslinks")}
              icon={<BsIcons.BsLinkedin />}
              iconColor={"#3578E5"}
            />
            <SocialCard
              name={"Twitter"}
              icon={<BsIcons.BsTwitter />}
              onClick={() => handleOpen("twlinks")}
              iconColor={"#3578E5"}
            />
            <SocialCard
              name={"Twitter Ads"}
              onClick={() => handleOpen("twadslinks")}
              icon={<BsIcons.BsTwitter />}
              iconColor={"#3578E5"}
            />
            <SocialCard
              name={"Youtube"}
              icon={<BsIcons.BsYoutube />}
              onClick={() => handleOpen("youlinks")}
              iconColor={"#D80A0A"}
            />
            <SocialCard
              name={"Youtube Ads"}
              icon={<BsIcons.BsYoutube />}
              onClick={() => handleOpen("youadslinks")}
              iconColor={"#D80A0A"}
            />
            <SocialCard
              name={"Google Ads"}
              icon={<BsIcons.BsGoogle />}
              onClick={() => handleOpen("gooadslinks")}
              iconColor={"#7B9828 "}
            />
          </div>
        )}
        {step === 2 && (
          <div className="integrationCard">
            <SocialCard
              name={"Facebook Ads"}
              icon={<BsIcons.BsFacebook />}
              iconColor={" #3578E5"}
              onClick={() => handleOpen("fbadslinks")}
            />

            <SocialCard
              name={"Instagram Ads"}
              icon={<BsIcons.BsInstagram />}
              onClick={() => handleOpen("instadslinks")}
              iconColor={"#DF1D10"}
            />

            <SocialCard
              name={"Linkedin Ads"}
              onClick={() => handleOpen("linkadslinks")}
              icon={<BsIcons.BsLinkedin />}
              iconColor={"#3578E5"}
            />

            <SocialCard
              name={"Twitter Ads"}
              onClick={() => handleOpen("twadslinks")}
              icon={<BsIcons.BsTwitter />}
              iconColor={"#3578E5"}
            />

            <SocialCard
              name={"Youtube Ads"}
              icon={<BsIcons.BsYoutube />}
              onClick={() => handleOpen("youadslinks")}
              iconColor={"#D80A0A"}
            />
            <SocialCard
              name={"Google Ads"}
              icon={<BsIcons.BsGoogle />}
              onClick={() => handleOpen("gooadslinks")}
              iconColor={"#7B9828 "}
            />
          </div>
        )}
        {step === 3 && (
          <div className="integrationCard">
            <SocialCard
              name={"Facebook"}
              icon={<BsIcons.BsFacebook />}
              iconColor={"#3578E5"}
              onClick={() => handleOpen("fblinks")}
            />
            <SocialCard
              name={"Instagram"}
              icon={<BsIcons.BsInstagram />}
              onClick={() => handleOpen("instlinks")}
              iconColor={"#DF1D10"}
            />

            <SocialCard
              name={"Linkedin"}
              onClick={() => handleOpen("linklinks")}
              icon={<BsIcons.BsFacebook />}
              iconColor={"#3578E5"}
            />

            <SocialCard
              name={"Twitter"}
              icon={<BsIcons.BsTwitter />}
              onClick={() => handleOpen("twlinks")}
              iconColor={"#3578E5"}
            />

            <SocialCard
              name={"Youtube"}
              icon={<BsIcons.BsYoutube />}
              onClick={() => handleOpen("youlinks")}
              iconColor={"#D80A0A"}
            />
          </div>
        )}
      </div>
      <IntegrationModal
        open={showModal}
        onclose={handleClose}
        modalLinks={modalLinks}
      />
    </DashboardLayout>
  );
};

export default Integration;
