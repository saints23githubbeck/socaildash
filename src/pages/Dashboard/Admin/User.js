import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardLayout from "../components/DashboardLayout";
import DashboardModal from "../components/DashboardModal";

const UserCard = (props) => {
  const { name, email, avaterImage, plan, workspace, user, client, project } =
    props;

  return (
    <div className="userCard">
      <div className="userCardHeader">
        <h5>{plan}</h5>
        <p>...</p>
      </div>
      <div className="cardTitle">
        <Avatar
          src={avaterImage}
          sx={{
            height: "50px",
            width: "50px",
            margin: " 20px auto 10px auto",
          }}
        />
        <h4> {name}</h4>
        <p>{email}</p>
      </div>
      <hr />
      <div>
        <div className="cardSplit">
          <div>
            <h2>{workspace}</h2>
            <p>Workspaces</p>
          </div>
          <div>
            <h2>{user}</h2>
            <p>User</p>
          </div>
        </div>
        <div className="cardSplit">
          <div>
            <h2>{client}</h2>
            <p>Clients</p>
          </div>
          <div>
            <h2>{project}</h2>
            <p>Projects</p>
          </div>
        </div>
        <div className="cardBottom">
          <h5>Unilimited</h5>
        </div>
      </div>
    </div>
  );
};

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [addUser, setAddUser] = useState("");

  const handleOpen = (item) => {
    setShowModal(true);
    setAddUser(item);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <DashboardLayout>
      <h1>User</h1>
      <div
        onClick={() => handleOpen("addUser")}
        style={{
          display: "flex",
          backgroundColor: "blue",
          width: "80px",
          fontSize: "16px",
          borderRadius: "8px",
          color: "#fff",
          padding: "5px",
          margin: "20px 80px 20px auto",
          cursor: "pointer",
        }}
      >
        <FaPlus />
        <p>Add User</p>
      </div>
      <div className="userAddedList">
        <UserCard
          name={"Kamraj"}
          plan={"Free"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Exp 2025"}
          avaterImage={
            "https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4="
          }
        />
        <UserCard
          name={"Kamraj"}
          plan={"Free"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Exp 2024"}
          avaterImage={
            "https://media.istockphoto.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?k=20&m=1309405076&s=612x612&w=0&h=R86OvuWQKHr1gns8f0vqsLDcGEQhL8s5ZL-pN_LNpDs="
          }
        />
        <UserCard
          name={"Kamraj"}
          plan={"Basic"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Unlimited"}
          avaterImage={
            "https://media.istockphoto.com/photos/her-beauty-makes-it-hard-not-to-stare-picture-id1297633362?k=20&m=1297633362&s=612x612&w=0&h=Id4ItFbXXPaF6JsqwhBQZOGrbjK4fCM3VdGHr2ccLQY="
          }
        />
        <UserCard
          name={"Kamraj"}
          plan={"Basic"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Unlimited"}
          avaterImage={
            "https://media.istockphoto.com/photos/gorgeous-senior-older-woman-with-closed-eyes-touching-her-perfect-picture-id1314903236?k=20&m=1314903236&s=612x612&w=0&h=0IQNltLj1WmqxfQJr9EKyoBDEkR-ifjXKF9j1LXLpdI="
          }
        />
        <UserCard
          name={"Kamraj"}
          plan={"Basic"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Unlimited"}
          avaterImage={""}
        />
        <UserCard
          name={"Kamraj"}
          plan={"Basic"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Unlimited"}
          avaterImage={
            "https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1219162946?k=20&m=1219162946&s=612x612&w=0&h=kfm_7tpKqDfcgxRSONCfPIVhmQ5jHyZEBZ7EDcbm1MU="
          }
        />
        <UserCard
          name={"Kamraj"}
          plan={"Free"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Exp 2022"}
          avaterImage={
            "https://media.istockphoto.com/photos/portrait-of-a-young-adult-asian-woman-in-venice-picture-id1157741177?k=20&m=1157741177&s=612x612&w=0&h=gp_dPgVEMhzGrTO1gOwnDwawsrTvgGDIeRwetEwyk14="
          }
        />
        <UserCard
          name={"Kamraj"}
          plan={"Basic"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Unlimited"}
          avaterImage={
            "https://media.istockphoto.com/photos/fitness-woman-listening-to-music-on-wireless-headphones-picture-id1194087257?k=20&m=1194087257&s=612x612&w=0&h=PX2bs4SrvurD71WIeRbu2jSIeNl9Z4HMciocPKFR3T0="
          }
        />
        <UserCard
          name={"Kamraj"}
          plan={"Basic"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Unlimited"}
          avaterImage={
            "https://media.istockphoto.com/photos/closeup-portrait-of-confident-woman-at-home-picture-id1271666501?k=20&m=1271666501&s=612x612&w=0&h=ZpSlhydIp8iJeLxxlrAI8BtjKoac1n0BycagxohQfpU="
          }
        />
        <UserCard
          name={"Kamraj"}
          plan={"Basic"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Unlimited"}
          avaterImage={
            "https://media.istockphoto.com/photos/happy-young-woman-studio-portrait-picture-id1277996375?k=20&m=1277996375&s=612x612&w=0&h=A9EAP7p8h1N0tXwHGkczkgxu8J_1hUo-zwrhXPXxJb4="
          }
        />
        <UserCard
          name={"Kamraj"}
          plan={"Free"}
          email={"Info.kamsquare@gmail.com"}
          workspace={1}
          user={2}
          client={3}
          project={4}
          expairation={"Exp 2025"}
          avaterImage={""}
        />
      </div>
      <DashboardModal
        open={showModal}
        onclose={handleClose}
        addUser={addUser}
      />
    </DashboardLayout>
  );
};

export default User;
