// import React from 'react'

import { UserNavbar } from "../../Navbar/UserNavbar"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupsIcon from '@mui/icons-material/Groups';
import './AppliedJob.css'
import { AppliedNavbar } from "../../Navbar/AppliedNavbar";
import { getuserdatabyid } from "../../Service/api";
import { useEffect, useState } from "react";

export const AppliedJobs = () => {

  const userid=localStorage.getItem('userid');

  const[applied,setApplied]=useState([]);

  const fetchapplied=async()=>{
    const res=await getuserdatabyid(userid);
    setApplied(res.data);
    console.log(applied);
  }
  useEffect(()=>{
      fetchapplied();
  },[])

  return (
    <>
    <UserNavbar/>
        <div className="appliedjobbody pt-[100px] w-[80%] ml-[120px]"> 
        <h2 className='text-2xl font-bold ml-[40%] mt-[10px] pb-[30px]'>My Job Applications</h2>
        {/* <h4 className='text-2xl font-medium flex justify-center mt-[20px] pb-[30px]'>Here are the applications that you have applied !</h4> */}
        <AppliedNavbar/>
        <div className="appliedbox">
          <div className="appliedcontainer ml-[150px] mb-6">
            <h3 className="ml-[80%]"><span className="text-blue-600 cursor-pointer"><EditIcon/></span><span className='ml-[30px] cursor-pointer text-red-500'><DeleteIcon/></span></h3>
            <h3 className="text-3xl font-bold mt-[10px]">jaava develoerp</h3>
            <h3 className="text-2xl font-semibold mt-[10px]">infosys</h3>
            <h3 className="mt-[10px] text-1xl font-semibold">Coimbatore</h3>
            <h3 className="mt-[10px] font-medium text-gray-800">Applied on april 12</h3>
            <h3 className="mt-[10px] font-medium text-gray-800">pending</h3>
            <h3 className="mt-[10px] pb-6 font-semibold text-gray-800"><span><GroupsIcon/></span> Around 120 peoples have applied on careercraft</h3>
          </div>         
        </div>
        </div>
    </>
  )
}
