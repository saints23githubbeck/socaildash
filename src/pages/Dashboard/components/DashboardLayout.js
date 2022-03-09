import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css'
import Header from './Header';

const DashboardLayout = ({children}) => {
  return (
    <div className='dashboardLayout'>
     <Sidebar />
     <div className='children'>
       <div className='Header'>
         <Header />
         </div>
         <div className='mainChild'>
           {children}
         </div>
       </div>
    </div>
  )
}

export default DashboardLayout