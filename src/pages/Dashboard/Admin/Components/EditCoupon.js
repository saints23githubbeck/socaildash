import React from 'react'
import DashboardLayout from "../../components/DashboardLayout";
import {  Link, useLocation,} from "react-router-dom";


const EditCoupon = () => {
    const {state} = useLocation()

    function reset(){ 
        window.location.reload(); 
    }
  return (
    <DashboardLayout>
     
    <div className="">
      <div className="textBox">
      <h2>Coupon Edit</h2>
      <Link to={-1}>
          {" "}
          <p>Back</p>
        </Link>
        
      </div>
    </div>

    
   
      <div className="addUserBody">
      <div className="formInput">
      <p className="h3Space">Name</p>
      <input type="text" name="name" placeholder={state.name} />

      </div>
      <div className="formInput">
        <p className="h3Space">Percent Off</p>
        <input type="number" name="number" placeholder={state.percent} />
      </div>
      <div className="formInput">
      <p className="h3Space">Coupon Code</p>
            <input type="text" name="name" placeholder={state.code} />
          </div>
      <div className="formInput">
      <p className="h3Space">Duration in months</p>
            <input type="number" name="number" placeholder={state.duration} />
          </div>
    <div >
    <Link to={-1}><button  style={{
        marginRight:'50px', backgroundColor:'green', border:"none", borderRadius: '5px', padding:10, color:'#fff', width:"100px", fontSize:16,}}>Create</button></Link>
      <button style={{
        marginRight:'50px', backgroundColor:'orange',border:"none", borderRadius: '5px', padding:10, color:'#fff', width:"100px", fontSize:16,}} onClick={reset} >Reset</button>
    </div>
    </div>
  </DashboardLayout>
  )
}

export default EditCoupon