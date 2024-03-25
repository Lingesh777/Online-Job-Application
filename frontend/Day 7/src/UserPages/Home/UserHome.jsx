// import React from 'react'

import { useNavigate } from "react-router-dom"
import { UserNavbar } from "../../Navbar/UserNavbar"
import './UserHome.css'
import { Footer } from "../../Landing/Footer";
import homeimage from "../../assets/Job hunt-pana.png"
import homeimage2 from "../../assets/Cross-platform software-amico.png"
export const UserHome = () => {
  const navigate=useNavigate();
  return (
    <>
    <UserNavbar/>
    <div className="userhomebody">
      <div className="userhomecontent">
        <h1 className="text-2xl font-bold ml-[300px]">Welcome, User !</h1>
      </div>
      <div className="userhomebox ml-[-200px] mt-[50px]">
        <div className="total-jobs cursor-pointer" onClick={()=>{navigate('/viewjobs')}}>
          <h2 className="text-2xl font-semibold p-5">Total Jobs:</h2>
          <h3  className="text-2xl font-bold flex justify-center">70</h3>
        </div>
        <div className="totalapplied cursor-pointer"  onClick={()=>{navigate('/appliedjobs')}}>
          <h2 className="text-2xl font-semibold p-5">Jobs Applied:</h2>
          <h3 className="text-2xl font-bold flex justify-center">7</h3>
        </div>
        <div className="totalapplied cursor-pointer">
          <h2 className="text-2xl font-semibold p-5">Companies:</h2>
          <h3 className="text-2xl font-bold flex justify-center">26</h3>
        </div>
      </div>
      <div className="userhomeletter mt-[30px]">
        <h2 className="text-3xl font-bold font-mono">"Your talent determines what you can do."</h2>
        <h2 className="text-3xl font-bold font-serif mt-[30px] ml-[150px]">Explore the relevant Jobs</h2>
        <button className= " userhomebut1 mt-[40px] ml-[280px]">Explore </button>
      </div>
      {/* <div className="userhomeimage ml-[-200px]">
        <div className="userimage">
            <img src={homeimage} className="h-[500px] w-[500px] "/>
            <img src={homeimage2} className="h-[450px] w-[500px] mt-[300px]"/>
        </div>
      </div> */}
      <div className="userhomefooter mt-[100px]">
        <Footer/>
      </div>
    </div>
    </>
  )
}
