import React from 'react'
import DashboardLayout from "../../components/DashboardLayout";
import {  Link, useLocation,} from "react-router-dom";

const EditPlan = () => {
    const {state} = useLocation()

    function reset(){ 
        window.location.reload(); 
      }
  return (
    
    <DashboardLayout>
     
      <div className="">
        <div className="textBox">
        <h2>Update Plan</h2>
        <Link to={-1}>
            {" "}
            <p>Back</p>
          </Link>
          
        </div>
      </div>
     
        <div className="addUserBody">
        <div className="formInput">
        <p className="h3Space">Plan Name</p>
        <select>
                <option >{state.name}</option>
                <option>Basic Plan</option>
                <option>Pro Plan</option>
                <option>Broz</option>
                <option>yearly Pro</option>
                <option>yearly Bronz</option>
                <option>Basic yearly</option>
            </select> 
        </div>
        <div className="formInput">
          <p className="h3Space">Plan Price</p>
          <input type="number" name="number" placeholder={state.price} />
        </div>
        <div className="formInput">
        <p className="h3Space">Plan Trail</p>
              <input type="text" name="name" placeholder={""} />
            </div>
        <div className="formInput">
        <p className="h3Space">Plan Interval</p>
            <select>
                <option >{state.interval}</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>yearly</option>
            </select> 
            </div>
        <div className="formInput">
        <p className="h3Space">Plan Teams</p>
              <input type="number" name="number" placeholder={state.team} />
            </div>
      <div >
      <Link to={-1}><button  style={{
          marginRight:'50px', backgroundColor:'green', border:"none", borderRadius: '5px', padding:10, color:'#fff', width:"100px", fontSize:16,}}>Edit Plan</button></Link>
        <button style={{
          marginRight:'50px', backgroundColor:'orange',border:"none", borderRadius: '5px', padding:10, color:'#fff', width:"100px", fontSize:16,}} onClick={reset} >Reset</button>
      </div>
      </div>
    </DashboardLayout>
  )
}

export default EditPlan