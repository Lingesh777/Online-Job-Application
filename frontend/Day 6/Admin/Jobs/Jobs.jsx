// import React from 'react'
import './Jobs.css'
import { AdminNavbar } from "../../Navbar/AdminNavbar"
import { AdminTopbar } from "../../Navbar/AdminTopbar"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { deletejob, getjob } from '../../Service/api';
import { useNavigate } from 'react-router-dom';

export const Jobs = () => {
  const[jobs,setJobs]=useState([]);
  const navigate=useNavigate();
  const fetchjob=async()=>{
    const res=await getjob();
    setJobs(res.data);
    console.log(res.data);
  }
  useEffect(()=>{
    fetchjob();
  },[])

  const edit=(job)=>{
    console.log(job);
    navigate(`/editjob/${job.id}`);
  }

  const del=async(job)=>{
    console.log(job)
    const res=await deletejob(job.id);
    console.log(res.data);
    if(res.data==='deleted successfully')
    {
      fetchjob();
    }
  }

  return (
    <>
    <AdminTopbar/>
    <AdminNavbar/>
    <div className="jobsbody mt-[100px] ml-[300px]">
        <h2 className='text-2xl font-bold ml-[200px]'>The List of jobs that you have posted</h2>
        <table className="jobstable mt-[50px]">
              <thead>
                <tr>
                  <th>Job Role</th>
                  <th>Location</th>
                  <th>Openings</th>
                  <th>Edit</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                  {jobs.map((job)=>(
                  <tr className='jobcontent'  key={job.id}>
                    <td className='tabledata'>{job.jobtitle}</td>
                    <td className='tabledata'>{job.joblocation}</td>
                    <td className='tabledata'>{job.jobopenings}</td>
                    <td className='tabledata' onClick={()=>{edit(job)}}><EditIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata' onClick={()=>{del(job)}}><DeleteIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
                  ))}
              </tbody>
              {/* <tbody>
                  <tr className='jobcontent'>
                    <td className='tabledata'>Cloud Architect</td>
                    <td className='tabledata'>Chennai</td>
                    <td className='tabledata'>3</td>
                    <td className='tabledata'><EditIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><DeleteIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className='jobcontent'>
                    <td className='tabledata'>Associate Software Developer</td>
                    <td className='tabledata'>Bangalore</td>
                    <td className='tabledata'>7</td>
                    <td className='tabledata'><EditIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><DeleteIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
              </tbody> */}
        </table>
    </div>
    </>
  )
}
