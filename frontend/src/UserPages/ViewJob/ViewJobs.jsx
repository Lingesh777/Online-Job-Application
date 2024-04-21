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
import nojob from '../../assets/Search-rafiki.png'

export const ViewJobs = () => {
  const[open,setOpen]=useState(null);
  const openbox=(e,jobid)=>{
    e.stopPropagation();
    setOpen(jobid);
  }
  const closebox=(e)=>{
    e.stopPropagation();
    setOpen(null);
    console.log(open);
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

  const[selectedFilters,setSelectedFilters]=useState([]);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter(filter => filter !== value));
    }
  }

  const filteredjobs = jobs.filter(job => {
    if (selectedFilters.length === 0) 
      return true; 
    const jobTitleLowerCase = job.jobtitle.toLowerCase();
    const jobLocationLowerCase = job.joblocation.toLowerCase();
    const selectedFiltersLowerCase = selectedFilters.map(filter => filter.toLowerCase());
    return selectedFiltersLowerCase.includes(jobTitleLowerCase) || selectedFiltersLowerCase.includes(jobLocationLowerCase);
  });

  
    if(filteredjobs.length == 0)
    {
      return(
      <>
        <UserNavbar/>
        <div className="filter-box ml-[50px] w-[17%] fixed mt-[100px]">
    <h3 className='text-2xl font-semibold'>Role</h3>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="React Developer"/> React Developer</label>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="HR Executive"/> HR Executive</label>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="Java Developer" /> Java Developer</label>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="Full Stack Developer"/> Full Stack Developer</label>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="Cloud Architect" /> Cloud Architect</label>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="Python Developer"/> Python Developer </label>

    <h3 className='text-2xl font-semibold'>Location</h3>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="Coimbatore"/> Coimbatore</label>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange} value="Bangalore"/> Bangalore</label>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="Chennai"/> Chennai</label>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="Hyderabad"/> Hyderabad</label>
    <label><input className="filter-option" type="checkbox" onChange={handleFilterChange}  value="Mumbai"/> Mumbai</label>
  </div>
        <div className="viewjobbody">
          <h1 className='text-2xl font-bold flex justify-center '>Find Your Dream Job now</h1>
          
          <img src={nojob} className="h-[500px] w-[500px] ml-[150px]"/>
        </div>
    </>
      )
    }
    else{

  return (
    <>
        <UserNavbar/>
        <div className="filter-box ml-[50px] w-[17%] fixed mt-[100px]">
          <h3 className='text-2xl font-semibold'>Role</h3>
          <label ><input type="checkbox" onChange={handleFilterChange}  value="React Developer"/> React Developer</label>
          <label><input type="checkbox" onChange={handleFilterChange}  value="HR Executive"/> HR Executive</label>
          <label><input type="checkbox" onChange={handleFilterChange}  value="Java Developer" /> Java Developer</label>
          <label><input type="checkbox" onChange={handleFilterChange}  value="Full Stack Developer"/> Full Stack Developer</label>
          <label><input type="checkbox" onChange={handleFilterChange}  value="Cloud Architect" /> Cloud Architect</label>
          <label><input type="checkbox" onChange={handleFilterChange}  value="Python Developer"/> Python Developer </label>

          <h3 className='text-2xl font-semibold'>Location</h3>
          <label><input type="checkbox" onChange={handleFilterChange}  value="Coimbatore"/> Coimbatore</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Bangalore"/> Bangalore</label>
          <label><input type="checkbox" onChange={handleFilterChange}  value="Chennai"/> Chennai</label>
          <label><input type="checkbox" onChange={handleFilterChange}  value="Hyderabad"/> Hyderabad</label>
          <label><input type="checkbox" onChange={handleFilterChange}  value="Mumbai"/> Mumbai</label>
        </div>
        <div className="viewjobbody">
          <h1 className='text-2xl font-bold flex justify-center '>Find Your Dream Job now</h1>
          
          {filteredjobs.map((job)=>(
            job.jobopenings!=0 &&
          (
          <div className="viewbox " onClick={(e)=>openbox(e,job.id)} key={job.id}>
            <h3 className="text-2xl font-bold mt-[10px]">{job.jobtitle}</h3>
            <h3 className="text-2xl font-semibold mt-[10px]">{job.orgname}</h3>
            <h3 className="mt-[10px] text-1xl font-semibold"><span><PersonOutlinedIcon/></span>{job.jobtype} | <span><WorkOutlineOutlinedIcon/></span>  {job.jobexperience} Yrs |<span><PlaceIcon/></span> {job.joblocation}</h3>
            <h3 className="mt-[10px] text-1xl font-semibold"><span><CurrencyRupeeOutlinedIcon/></span>{job.jobpackage} LPA</h3>
            <h3 className="mt-[10px] text-1xl font-semibold">{job.jobopenings} openings</h3>
            <button className="applybutton bg-blue-600 text-white" onClick={()=>{navigate(`/apply/${job.id}`)}}>Apply</button>
            <ViewDesc isOpen={open===job.id} onClose={(e)=>closebox(e)} jobid={job.id}/>
          </div>
          )
          ))}
          
        </div>
    </>
  )
}
}
