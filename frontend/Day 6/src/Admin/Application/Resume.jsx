// import React from 'react'
import { useEffect, useState } from 'react';
import { getapplybyid } from '../../Service/api';
import './Resume.css';
export const Resume = ({isOpen,onClose,aid}) => {
    if(!isOpen)
        return null;
    console.log(aid);

    const[apply,setApply]=useState([]);

    const fetchjobid=async()=>{
      const res=await getapplybyid(aid);
      console.log(res.data);
      setApply(res.data);
      }
      useEffect(()=>{
      if(aid)
          fetchjobid();
      },[aid])

  return (
    <div className="resumebody" onClick={onClose}>
        <div className="resume-content">
            {/* <h2>Name : Lingesh M</h2>
            <h2>Education: BE Computer Science</h2>
            <h2>Skills : Java, ReactJs, SpringBoot API, HTML, Css ,JavaScript</h2>
            <h2>Location : Coimbatore</h2> */}
            <iframe src="https://drive.google.com/uc?id=1bBSMpKAMVRjVhfVWHZ-Awq0dxQfcIVE8" width="100%" height="500px" />
        </div>
    </div>
  )
}
