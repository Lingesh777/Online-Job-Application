// import React from 'react'

import { useNavigate } from "react-router-dom"
import { UserNavbar } from "../../Navbar/UserNavbar"
import './UserHome.css'
import homeimage from "../../assets/Job hunt-pana.png"
import homeimage2 from "../../assets/Cross-platform software-amico.png"
import { useEffect, useState } from "react"
import { getapplybyid, getjob, getuserdatabyid } from "../../Service/api"
export const UserHome = () => {
  const navigate=useNavigate();
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalCompany, setTotalCompany] = useState(0);
  const [totalApplication, setTotalApplication] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobRes = await getjob();
        const totalJobCount = jobRes.data.length;
        setTotalJobs(totalJobCount);
        const companies=new Set();
        for(var i=0;i<totalJobCount;i++)
        {
          companies.add(jobRes.data[i].orgname);
        }
        setTotalCompany(companies.size);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);
  useEffect(() => {
    const fetchJobApp = async () => {
      try {
        const userid=localStorage.getItem('userid')
        const jobApp = await getuserdatabyid(userid);
        const totalJobCount = jobApp.data.applications.length;
        setTotalApplication(totalJobCount);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobApp();
  }, []);
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
          <h3  className="text-2xl font-bold flex justify-center">{totalJobs}</h3>
        </div>
        <div className="totalapplied cursor-pointer"  onClick={()=>{navigate('/appliedjobs')}}>
          <h2 className="text-2xl font-semibold p-5">Jobs Applied:</h2>
          <h3 className="text-2xl font-bold flex justify-center">{totalApplication}</h3>
        </div>
        <div className="totalapplied cursor-pointer">
          <h2 className="text-2xl font-semibold p-5">Companies:</h2>
          <h3 className="text-2xl font-bold flex justify-center">{totalCompany}</h3>
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
    </div>
    </>
  )
}
