import { Dialog } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const IntegrationModal = (props) => {
  const {
    modalLinks,
    open,
    onclose,
  } = props;
  
  return (
    <Dialog open={open} onClose={onclose} >
       {modalLinks === "fblinks" && (
        <div className="integrationmodal">
          <p>
            Link your Facebook account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "fbadslinks" && (
        <div className="integrationmodal">
          <p>
            Link your Facebook Ads account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "instlinks" && (
        <div className="integrationmodal">
          <p>
            Link your Instagram account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "instadslinks" && (
        <div className="integrationmodal">
          <p>
            Link your Instagram Ads account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "linklinks" && (
        <div className="integrationmodal">
          <p>
            Link your LinkedIn  account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "linkadslinks" && (
        <div className="integrationmodal">
          <p>
            Link your LinkedIn Ads account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "twlinks" && (
        <div className="integrationmodal">
          <p>
            Link your Twitter account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "twadslinks" && (
        <div className="integrationmodal">
          <p>
            Link your Twitter Ads account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "youlinks" && (
        <div className="integrationmodal">
          <p>
            Link your YouTube account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "youadslinks" && (
        <div className="integrationmodal">
          <p>
            Link your YouTube Ads account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
       {modalLinks === "gooadslinks" && (
        <div className="integrationmodal">
          <p>
            Link your Google Ads account to your Social Dashboard </p>
        
          <div  style={{
              display:"flex", justifyContent:'space-around'}}>
          <Link to="#">
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
            >
              Proceed
            </button></Link>

            <button
            onClick={onclose}
              style={{
                color: "white",
                backgroundColor: "red",
                width: "70px",
                height: 25,
                padding: "5px auto",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                marginTop: "20px",
              }}
          >
            Cancel
          </button></div>
        </div>
      )}
      
    </Dialog> 
  );
};

export default IntegrationModal;
