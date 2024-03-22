// import React from 'react'

import { useNavigate } from "react-router-dom"
import { AdminNavbar } from "../../Navbar/AdminNavbar"
import { AdminTopbar } from "../../Navbar/AdminTopbar"
import './AdminHome.css'
import { Footer } from "../../Landing/Footer"
import ChartComponent from "../../UserPages/Home/CharComponent"

export const AdminHome = () => {
  const navigate=useNavigate();
  return (
    <>
    <AdminTopbar/>
    <AdminNavbar/>
    <div className="adminhomebody">
      <div className="homecontent">
        <h1 className="text-2xl font-bold ml-[350px]">Welcome, Lingesh !</h1>
      </div>
      <div className="homebox mt-[50px]">
        <div className="totaljobs cursor-pointer" onClick={()=>{navigate('/jobs')}}>
          <h2 className="text-2xl font-semibold p-5">Total Jobs Posted:</h2>
          <h3  className="text-2xl font-bold flex justify-center">7</h3>
        </div>
        <div className="totalapplications cursor-pointer"  onClick={()=>{navigate('/application')}}>
          <h2 className="text-2xl font-semibold p-5">Applications Received:</h2>
          <h3 className="text-2xl font-bold flex justify-center">17</h3>
        </div>
        <div className="adminhomedesc ml-[150px] mt-[50px] mb-[20px]">
            <ChartComponent/>
        </div>
        {/* <div className="userhomefooter mt-[240px] ml-[-400px] w-[140%]">
        <Footer/>
      </div> */}
      </div>
    </div>
    </>
  )
}
