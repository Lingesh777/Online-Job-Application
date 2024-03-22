// import React from 'react'

import { UserNavbar } from "../../Navbar/UserNavbar"
import PlaceIcon from '@mui/icons-material/Place';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import './ViewJobs.css'
import { useEffect, useState } from "react";
import { ViewDesc } from "./ViewDesc";
import { useNavigate } from "react-router-dom";
import { getjob } from "../../Service/api";
export const ViewJobs = () => {
  const[open,setOpen]=useState(false);
  const openbox=()=>{
    setOpen(!open);
  }
  const[jobs,setJobs]=useState([]);
  const fetchjob=async()=>{
    const res=await getjob();
    setJobs(res.data);
    console.log(res.data);
  }
  useEffect(()=>{
    fetchjob();
  },[])
  const navigate=useNavigate();
  return (
    <>
        <UserNavbar/>
        <div className="viewjobbody">
          <h1 className='text-2xl font-bold flex justify-center '>Find Your Dream Job now</h1>
          {jobs.map((job)=>(
          <div className="viewbox" onClick={openbox} key={job.id}>
            <h1 className="text-3xl font-bold">{job.jobrole}</h1>
            <h3 className="text-2xl font-semibold mt-[10px]">{job.orgname}</h3>
            <h3 className="mt-[10px] text-1xl font-semibold"><span><PersonOutlinedIcon/></span>{job.jobtype} | <span><WorkOutlineOutlinedIcon/></span>  {job.jobexperience} Yrs |<span><PlaceIcon/></span> {job.joblocation}</h3>
            <h3 className="mt-[10px] text-1xl font-semibold"><span><CurrencyRupeeOutlinedIcon/></span>{job.jobpackage} LPA</h3>
            <button className="applybutton bg-blue-600 text-white" onClick={()=>{navigate(`/apply/${job.id}`)}}>Apply</button>
            <ViewDesc isOpen={open} onClose={openbox}/>
          </div>
          ))}
          {/* <div className="viewbox "onClick={openbox}>
            <h1 className="text-3xl font-bold">Cloud Architect</h1>
            <h3 className="text-2xl font-semibold mt-[10px]">Accenture</h3>
            <h3 className="mt-[10px] text-1xl font-semibold"><span><PersonOutlinedIcon/></span>full time | <span><WorkOutlineOutlinedIcon/></span>  2-5 Yrs |<span><PlaceIcon/></span> Coimbatore</h3>
            <h3 className="mt-[10px] text-1xl font-semibold"><span><CurrencyRupeeOutlinedIcon/></span> 8 - 10 LPA</h3>
            <button className="applybutton bg-blue-600 text-white">Apply</button>
              <ViewDesc isOpen={open} onClose={openbox}/>
          </div>
          <div className="viewbox "onClick={openbox}>
            <h1 className="text-3xl font-bold">React Developer</h1>
            <h3 className="text-2xl font-semibold mt-[10px]">Facebook</h3>
            <h3 className="mt-[10px] text-1xl font-semibold"><span><PersonOutlinedIcon/></span>full time | <span><WorkOutlineOutlinedIcon/></span>  0-1 Yrs |<span><PlaceIcon/></span> Bangalore</h3>
            <h3 className="mt-[10px] text-1xl font-semibold"><span><CurrencyRupeeOutlinedIcon/></span> 6 - 7 LPA</h3>
            <button className="applybutton bg-blue-600 text-white">Apply</button>
            <ViewDesc isOpen={open} onClose={openbox}/>             
          </div> */}
        </div>
    </>
  )
}
