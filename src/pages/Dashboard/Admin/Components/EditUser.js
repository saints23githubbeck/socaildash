import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {  Link, useLocation,} from "react-router-dom";


const EditUser = () => {
  const {state} = useLocation()
  let name = state.name.split(' ')

  return (
    <DashboardLayout>
     
      <div className="detailsTop">
        <div className="textBox">
        <h2>Edit User</h2>
        <Link to={-1}>
            {" "}
            <p>Back</p>
          </Link>
          
        </div>
      </div>
      <div>
        <div style={{display:'flex'}} className="" >
          <p className="h3Space">User ID :</p>
          <h3 className="">{state.id}</h3>
        </div>
        <div style={{display:'flex'}}  className="">
          <p className="h3Space">User Role :</p>
          <h3 className="">{state.role}</h3>
        </div>
        <div className="formInput">
        <p className="h3Space">First Name</p>
          <input type="text" name="name" placeholder={name[0]} />
        </div>
        <div className="formInput">
          <p className="h3Space">Last Name</p>
          <input type="text" name="name" placeholder={name[1]} />
        </div>
        <div className="formInput">
        <p className="h3Space">Email</p>
              <input type="email" name="name" placeholder={state.email} />
            </div>
            <div className="formInput">
              <p className="h3Space">Password</p>
              <input
                type="password"
                name="password"
                placeholder="enter Password to comfirm changes"
              />
              </div>
              <div className="formInput">
              <p className="h3Space">Confirm Password</p>
              <input
                type="password"
                name="password"
                placeholder="Re-enter Password to comfirm changes"
              />
      </div>
      <div>
        <button >Update</button>
        <Link to={-1}><button>Cancel</button></Link>
      </div>
      </div>
    </DashboardLayout>
  );
};

export default EditUser;
