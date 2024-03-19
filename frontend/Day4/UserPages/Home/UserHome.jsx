// import React from 'react'

import { useNavigate } from "react-router-dom"
import { UserNavbar } from "../../Navbar/UserNavbar"
import './UserHome.css'
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
        <div className="totaljobs cursor-pointer" onClick={()=>{navigate('/viewjobs')}}>
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
    </div>
    </>
  )
}
