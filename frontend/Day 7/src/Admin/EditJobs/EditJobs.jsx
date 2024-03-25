// import React from 'react'

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminNavbar } from '../../Navbar/AdminNavbar';
import { AdminTopbar } from '../../Navbar/AdminTopbar';
import '../AddJob/AddJob.css';
import { editjob, getjobbyid } from '../../Service/api';

export const EditJobs = () => {
    const navigate = useNavigate();
    const {id}=useParams();

    const [job, setJob] = useState({
        orgname: '',
        jobtitle: '',
        joblocation: '',
        jobtype: '',
        jobpackage: '',
        jobexperience: '',
        jobdeadline: '',
        jobopenings: '',
        jobdescription: '',
        educationalrequirements: [],
        skills: []
    });

    const fetchjobid=async()=>{
        const res=await getjobbyid(id);
        setJob(res.data);
    }
    useEffect(()=>{
        if(id)
            fetchjobid();
    },[id])

    const handleChange = (e) => {
        const { id, value, type, name, checked } = e.target;

        if (type === 'text' || type === 'date' || type === 'number') {
            setJob({ ...job, [id]: value });
        } else if (id === 'jobtype') {
            setJob({ ...job, [id]: value });
        } else if (type === 'checkbox') {
            if (name === 'educationalrequirements') {
                const updatedRequirements = checked ? [...job.educationalrequirements, value] : job.educationalrequirements.filter(req => req !== value);
                setJob({ ...job, educationalrequirements: updatedRequirements });
            } else if (name === 'skills') {
                const updatedSkills = checked ? [...job.skills, value] : job.skills.filter(skill => skill !== value);
                setJob({ ...job, skills: updatedSkills });
            }
        }
    };

    const handleSubmit = async(job) => {
        console.log(job);
        const res=await editjob(id,job);
        console.log(res.data);
        navigate('/jobs')
    }

    return (
        <>
            <AdminTopbar />
            <AdminNavbar />
            <div className="addjobbody">
                <div className="jobinput">
                    <label className="text-2xl font-semibold">Organization<span className="text-red-600">*</span></label>
                    <input className="jobin" type="text" id="orgname" onChange={handleChange} value={job.orgname} placeholder="Organization Name" />
                </div>
                <div className="jobinput ml-[560px] mt-[-110px]">
                    <label className="text-2xl font-semibold">Title<span className="text-red-600">*</span></label>
                    <input className="jobin" type="text" id="jobtitle" onChange={handleChange} value={job.jobtitle} placeholder="Job Title" />
                </div>
                <div className="jobinput">
                    <label className="text-2xl font-semibold">Location<span className="text-red-600">*</span></label>
                    <input className="jobin" type="text" id="joblocation" onChange={handleChange} value={job.joblocation} placeholder="Job Location" />
                </div>
                <div className="jobinput ml-[560px] mt-[-110px]">
                    <label className="text-2xl font-semibold">Title<span className="text-red-600">*</span></label>
                    <select name="job type" id="jobtype" onChange={handleChange} value={job.jobtype}>
                        <option value="full time">Full Time</option>
                        <option value="part time">Part Time</option>
                        <option value="internship">Internship</option>
                    </select>
                </div>
                <div className="jobinput">
                    <label className="text-2xl font-semibold">Package<span className="text-red-600">*</span></label>
                    <input className="jobin" type="text" id="jobpackage" onChange={handleChange} value={job.jobpackage} placeholder="LPA" />
                </div>
                <div className="jobinput ml-[560px] mt-[-110px]">
                    <label className="text-2xl font-semibold">Experience<span className="text-red-600">*</span></label>
                    <input className="jobin" type="text" id="jobexperience" onChange={handleChange} value={job.jobexperience} placeholder="Experience in years" />
                </div>
                <div className="jobinput">
                    <label className="text-2xl font-semibold">Application Deadline<span className="text-red-600">*</span></label>
                    <input className="jobin" type="date" id="jobdeadline" onChange={handleChange} value={job.jobdeadline} />
                </div>
                <div className="jobinput ml-[560px] mt-[-110px]">
                    <label className="text-2xl font-semibold">Openings<span className="text-red-600">*</span></label>
                    <input className="jobin" type="text" id="jobopenings" onChange={handleChange} placeholder="No. of openings" value={job.jobopenings} />
                </div>
                <div className="jobinput w-[1000px] ">
                    <label className="text-2xl font-semibold">Educational requirement<span className="text-red-600">*</span></label><br />
                    {/* <div className="check p-2">
                        <input type="checkbox" name="educationalrequirements" onChange={handleChange} value="BE/BTech" className="ml-[35px]" /> BE/BTech
                        <input type="checkbox" name="educationalrequirements" onChange={handleChange} value="BSc" className="ml-[35px]" /> BSc
                        <input type="checkbox" name="educationalrequirements" onChange={handleChange} value="BCom" className="ml-[35px]" /> BCom
                        <input type="checkbox" name="educationalrequirements" onChange={handleChange} value="MBA" className="ml-[35px]" /> MBA
                        <input type="checkbox" name="educationalrequirements" onChange={handleChange} value="ME/Mtech" className="ml-[35px]" /> ME/Mtech
                        <input type="checkbox" name="educationalrequirements" onChange={handleChange} value="MCom" className="ml-[35px]" /> MCom
                        <input type="checkbox" name="educationalrequirements" onChange={handleChange} value="Any Graduate" className="ml-[35px]" /> Any Graduate
                    </div> */}
                    {['BE/BTech', 'BSc', 'BCom', 'MBA', 'ME/Mtech', 'MCom', 'Any Graduate'].map((requirement, index) => (
    <div key={index} className="check p-2">
        <input 
            type="checkbox" 
            name="educationalrequirements" 
            value={requirement} 
            onChange={handleChange} 
            checked={job.educationalrequirements.includes(requirement)}
            className="ml-[35px]" 
        /> 
        {requirement}
    </div>
))}
                </div>
                <div className="jobinput w-[1000px]">
                    <label className="text-2xl font-semibold">Skills<span className="text-red-600">*</span></label><br />
                    {/* <div className="check p-2">
                        <input type="checkbox" name="skills" value="Java" onChange={handleChange} className="ml-[35px]" /> Java
                        <input type="checkbox" name="skills" value="C" onChange={handleChange} className="ml-[35px]" /> C
                        <input type="checkbox" name="skills" value="C++" onChange={handleChange} className="ml-[35px]" /> C++
                        <input type="checkbox" name="skills" value="MySQL" onChange={handleChange} className="ml-[35px]" /> MySQL
                        <input type="checkbox" name="skills" value="ReactJS" onChange={handleChange} className="ml-[35px]" /> ReactJS
                        <input type="checkbox" name="skills" value="Spring Boot" onChange={handleChange} className="ml-[35px]" /> Spring Boot  
                    </div> */}
                    {['Java', 'C', 'C++', 'MySQL', 'ReactJS', 'Spring Boot'].map((skill, index) => (
    <div key={index} className="check p-2">
        <input 
            type="checkbox" 
            name="skills" 
            value={skill} 
            onChange={handleChange} 
            checked={job.skills.includes(skill)}
            className="ml-[35px]" 
        /> 
        {skill}
    </div>
))}
                </div>
        
        <div className="jobinput">
            <label className='text-2xl font-semibold'>Description<span className="text-red-600">*</span></label>
            <input className="jobin w-[800px] " type='text' id="jobdescription"onChange={handleChange} value={job.jobdescription} placeholder="Job description"/>
        </div>
        <div className="jobsubmit">
            <button className="jobbut" onClick={()=>{handleSubmit(job)}} >Submit</button>
        </div>
        <div className="jobnote">
            <h4>Note : The job that you posted will be now seen to all the users and the application that users applied will be visible in application recieved</h4>
        </div>
    </div>
    </>
  )
}
