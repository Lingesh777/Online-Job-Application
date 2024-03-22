// import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserNavbar } from '../../Navbar/UserNavbar'
import './Apply.css';
import { useEffect, useState } from 'react';
import { addapply, getjobbyid } from '../../Service/api';
export const Apply = () => {
    // const navigate=useNavigate();
    const[apply,setApply]=useState({
        name:'',jobtitle:'',joblocation:'',jobtype:'',cgpa:'',jobexperience:'',dob:'',projects:'',jobdescription:'',resume:'',skills:[]
    })

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
    console.log(res.data);
    setJob(res.data);
    setApply({...apply,jobtitle:res.data.jobtitle});
    }
    useEffect(()=>{
    if(id)
        fetchjobid();
    },[id])
    
    

    const handleChange=(e)=>{
        e.preventDefault();
        const { id, value, type, name, checked } = e.target;

        if (type === 'text' || type === 'date' || type === 'number') {
            setApply({ ...apply, [id]: value });
        } 
        else if (id === 'jobtype') {
            setApply({ ...apply, [id]: value });
        } 
        else if (type === 'checkbox') {
           if (name === 'skills') {
                const updatedSkills = checked ? [...apply.skills, value] : apply.skills.filter(skill => skill !== value);
                setApply({ ...apply, skills: updatedSkills });
            }
        }
        else if (type === 'file') {
            // Handle file input change
            const file = e.target.files[0]; // Get the first selected file
            setApply({ ...apply, resume: file }); // Store the file in the resume field
        }
    }
    const handleSubmit=async()=>{
        console.log(apply);
        const res=await addapply(apply);
        console.log(res.data); 
    }
  return (
    <>
        <UserNavbar/>
        <div className='applybody pt-[130px] ml-[50px]'>
        {/* <h2 className='text-3xl font-bold ml-[350px] mb-[30px]'>Application Form</h2> */}
        <div className="jobinput">
            <label>Full Name<span className="text-red-600">*</span></label>
            <input className="jobin"  type='text' id="name"   onChange={handleChange} placeholder="full Name"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Title<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="jobtitle" value={job.jobtitle} placeholder="Job Title"/>
        </div>
        <div className="jobinput">
            <label>Location<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="joblocation"onChange={handleChange} placeholder="Job Location"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Time<span className="text-red-600">*</span></label>
            <select name="job type" id="jobtype"onChange={handleChange}>
                <option value="full time">Full Time</option>
                <option value="part time">Part Time</option>
                <option value="internship">Internship</option>
            </select>
        </div>
        <div className="jobinput">
            <label>CGPA<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="cgpa"onChange={handleChange} placeholder="CGPA"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Experience<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="jobexperience" onChange={handleChange}placeholder="Experience in years"/>
        </div>
        <div className="jobinput">
            <label>Date of Birth<span className="text-red-600">*</span></label>
            <input className="jobin" type='date' id="dob"onChange={handleChange} />
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Projects<span className="text-red-600" >*</span></label>
            <input className="jobin" type='text' id="projects"onChange={handleChange} placeholder="No. of projects"/>
        </div>
        <div className="jobinput w-[1000px] ">
            <label >Educational qualification<span className="text-red-600">*</span></label><br/>
            <select name="education" id="education"onChange={handleChange}>
                <option value="BE/BTECH">BE/BTECH</option>
                <option value="Bsc">BSc</option>
                <option value="ME/MTECH">ME/MTECH</option>
                <option value="Bcom">Bcom</option>
                <option value="MBA">MBA</option>
            </select>
        </div>
        <div className="jobinput w-[1000px]">
            <label>Skills known<span className="text-red-600">*</span></label><br/>
                    <div className="check p-2">
                        <input type="checkbox" name="skills" value="Java" className="ml-[35px]" onChange={handleChange} /> Java
                        <input type="checkbox" name="skills" value="C#" className="ml-[35px]" onChange={handleChange} /> C
                        <input type="checkbox" name="skills" value="C++" className="ml-[35px]" onChange={handleChange} /> C++
                        <input type="checkbox" name="skills" value="MySQL" className="ml-[35px]" onChange={handleChange} /> MySQL
                        <input type="checkbox" name="skills" value="ReactJS" className="ml-[35px]" onChange={handleChange} /> ReactJS
                        <input type="checkbox" name="skills" value="Spring Boot" className="ml-[35px]" onChange={handleChange} /> Spring Boot
                        <input type="checkbox" name="skills" value="AWS" className="ml-[35px]" onChange={handleChange} /> AWS
                        <input type="checkbox" name="skills" value="Python" className="ml-[35px]" onChange={handleChange} /> Python
                    </div>
        </div>
        
        {/* ['<div className="jobinput">
            <label>Resume<span className="text-red-600 pr-[20px]">*</span></label>
            <input type='file' id='resume' onChange={handleChange}/>
        </div>'] */}
        <div className="jobinput">
            <label>Resume<span className="text-red-600 pr-[20px]">*</span></label>
            <input className="jobin w-[800px] " type='text' id="resume" onChange={handleChange} placeholder="Enter gdrive link of your resume"/>
        </div>
        <div className="jobinput">
            <label>Description<span className="text-red-600">*</span></label>
            <input className="jobin w-[800px] " type='text' id="jobdescription"onChange={handleChange} placeholder="About yourself and why do want this position"/>
        </div>
        <div className="jobsubmit">
            <button className="jobbut" onClick={()=>{handleSubmit()}}>Submit</button>
        </div>
        <div className="jobnote">
            <h4>Note : The application that you posted will be now seen to the respective HR and the datas are secured</h4>
        </div>
        </div>
    </>
  )
}
