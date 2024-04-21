import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { AdminNavbar } from "../../Navbar/AdminNavbar"
import { AdminTopbar } from "../../Navbar/AdminTopbar"
import './AdminHome.css'
import ChartComponent from "../../UserPages/Home/CharComponent"
import { getapply, getjob } from "../../Service/api"

export const AdminHome = () => {
  const navigate = useNavigate();
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalApplication, setTotalApplication] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobRes = await getjob();
        console.log(jobRes.data);
        const totalJobCount = jobRes.data.length;
        console.log(totalJobCount);
        setTotalJobs(totalJobCount);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);
  useEffect(() => {
    const fetchJobApp = async () => {
      try {
        const jobApp = await getapply();
        const totalJobCount = jobApp.data.length;
        setTotalApplication(totalJobCount);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobApp();
  }, []);

  return (
    <>
      <AdminTopbar />
      <AdminNavbar />
      <div className="adminhomebody">
        <div className="homecontent">
          <h1 className="text-2xl font-bold ml-[350px]">Welcome, Lingesh !</h1>
        </div>
        <div className="homebox mt-[50px]">
          <div className="totaljobs cursor-pointer" onClick={() => { navigate('/jobs') }}>
            <h2 className="text-2xl font-semibold p-5">Total Jobs Posted:</h2>
            <h3 className="text-2xl font-bold flex justify-center">{totalJobs}</h3>
          </div>
          <div className="totalapplications cursor-pointer" onClick={() => { navigate('/application') }}>
            <h2 className="text-2xl font-semibold p-5">Applications Received:</h2>
            <h3 className="text-2xl font-bold flex justify-center">{totalApplication}</h3>
          </div>
          {/* <div className="adminhomecont">
            <h2 className='text-3xl font-semibold'>Add new Jobs and hire talented professionals</h2>
          </div> */}
          <div className="adminhomedesc ml-[150px] mt-[50px] mb-[20px]">
            <ChartComponent />
          </div>
        </div>
      </div>
    </>
  )
}
