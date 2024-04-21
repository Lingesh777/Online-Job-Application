// import React from 'react'
import { UserNavbar } from '../../Navbar/UserNavbar'
import { AppliedNavbar } from '../../Navbar/AppliedNavbar'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupsIcon from '@mui/icons-material/Groups';
import { useEffect, useState } from 'react';
import { getuserdatabyid } from '../../Service/api';
import empty from "../../assets/Empty-rafiki.png";

export const Pending = () => {

  const userid=localStorage.getItem('userid');

  const[applied,setApplied]=useState([]);

  useEffect(() => {
    const fetchApplied = async () => {
      try {
        const res = await getuserdatabyid(userid);
        setApplied(res.data.applications);
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      }
    };
    fetchApplied();
  }, [userid]);
  
  const pendingfilter=applied.filter((app)=> app.status===null ) 
  console.log(pendingfilter);

  if (pendingfilter.length === 0) {
    return (
      <>
      <UserNavbar />
      <div className="appliedjobbody pt-[100px] w-[80%] ml-[120px]">
      <h2 className='text-2xl font-bold ml-[40%] mt-[10px] pb-[30px]'>Stay! <span className='text-yellow-600'>Pending</span> Applications 🙂</h2>
        <AppliedNavbar/>
        <div className="noapplication">
         <img src={empty} className="h-[400px] w-[500px] ml-[300px] mt-[-40px]"/>
         <h2 className="text-2xl font-bold mt-[-20px] ml-[370px]">No pending applications found</h2>
        </div>
      </div>
      </>
    );
  }
  else
  {

  return (
    <>
    <UserNavbar/>
        <div className="appliedjobbody pt-[100px] w-[80%] ml-[120px]"> 
        <h2 className='text-2xl font-bold ml-[40%] mt-[10px] pb-[30px]'>Stay! <span className='text-yellow-600'>Pending</span> Applications 🙂</h2>
        {/* <h4 className='text-2xl font-medium flex justify-center mt-[20px] pb-[30px]'>Here are the applications that you have applied !</h4> */}
        <AppliedNavbar/>
        <div className="appliedbox">
            {pendingfilter.map((app)=>(
          <div className="appliedcontainer ml-[150px] mb-6" key={app.aid}>
            <h3 className="ml-[80%]"><span className="text-blue-600 cursor-pointer"><EditIcon/></span><span className='ml-[30px] cursor-pointer text-red-500'><DeleteIcon/></span></h3>
            <h3 className="text-3xl font-bold mt-[10px]">{app.jobtitle}</h3>
            <h3 className="text-2xl font-semibold mt-[10px]">{app.orgname}</h3>
            <h3 className="mt-[10px] text-1xl font-semibold">{app.joblocation}</h3>
            <h3 className="mt-[10px] font-medium text-gray-800">Applied on {app.createdAt.substring(0,10)}</h3>
            <h3 className="mt-[10px] font-medium text-yellow-600">{app.status===null?"pending":"selected"}</h3>
            <h3 className="mt-[10px] pb-6 font-semibold text-gray-800"><span><GroupsIcon/></span> Around 120 peoples have applied on careercraft</h3>
            </div>         
            ))}
        </div>
        </div>
    </>
  )
}
}
