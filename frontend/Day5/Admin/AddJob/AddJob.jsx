// import React from 'react'

import { useNavigate } from "react-router-dom"
import { AdminNavbar } from "../../Navbar/AdminNavbar"
import { AdminTopbar } from "../../Navbar/AdminTopbar"

import './AddJob.css'

export const AddJob = () => {
    const navigate=useNavigate();
  return (
    <>
    <AdminTopbar/>
    <AdminNavbar/>
    <div className="addjobbody">
        <div className="jobinput">
            <label>Organization<span className="text-red-600">*</span></label>
            <input className="jobin"  type='text' id="orgname" placeholder="Organization Name"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Title<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="jobtitle" placeholder="Job Title"/>
        </div>
        <div className="jobinput">
            <label>Location<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="joblocation" placeholder="Job Location"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Title<span className="text-red-600">*</span></label>
            <select name="job type" id="jobtype">
                <option value="full time">Full Time</option>
                <option value="part time">Part Time</option>
                <option value="internship">Internship</option>
            </select>
        </div>
        <div className="jobinput">
            <label>Package<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="jobpackage" placeholder="LPA"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Experience<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="jobexperience" placeholder="Experience in years"/>
        </div>
        <div className="jobinput">
            <label>Application Deadline<span className="text-red-600">*</span></label>
            <input className="jobin" type='date' id="jobdate" />
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Openings<span className="text-red-600" >*</span></label>
            <input className="jobin" type='text' id="jobopening" placeholder="No. of openings"/>
        </div>
        <div className="jobinput w-[1000px] ">
            <label >Educational requirement<span className="text-red-600">*</span></label><br/>
            <div className="check p-2">
                <input type="checkbox" name="C" value="yes" className="ml-[35px]" /> BE/BTech
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]"/> BSc
                <input type="checkbox" name="C" value="yes" className="ml-[35px]" /> BCom
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]"/> MBA
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]"/> ME/Mtech
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]"/> MCom
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]"/> Any Graduate
            </div>
        </div>
        <div className="jobinput w-[1000px]">
            <label>Skills<span className="text-red-600">*</span></label><br/>
            <div className="check p-2">
                <input type="checkbox" name="C" value="yes" className="ml-[35px]"  /> Java
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]" /> C
                <input type="checkbox" name="C" value="yes" className="ml-[35px]"  /> C++
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]" /> MySQL
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]" /> ReactJS
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]" /> Spring Boot
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]" /> AWS
                <input type="checkbox"name="C++"value="yes" className="ml-[35px]" /> Python
            </div>
        </div>
        
        <div className="jobinput">
            <label>Description<span className="text-red-600">*</span></label>
            <input className="jobin w-[800px] " type='text' id="jobdescription" placeholder="Job description"/>
        </div>
        <div className="jobsubmit">
            <button className="jobbut" onClick={()=>{navigate('/jobs')}}>Submit</button>
        </div>
        <div className="jobnote">
            <h4>Note : The job that you posted will be now seen to all the users and the application that users applied will be visible in application recieved</h4>
        </div>
    </div>
    </>
  )
}
