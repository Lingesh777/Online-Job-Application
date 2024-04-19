import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserNavbar } from '../../Navbar/UserNavbar';
import { editapply, getapplybyid } from '../../Service/api';

export const Editapplied = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [job, setJob] = useState({
        name: '',
        orgname: '',
        jobtitle: '',
        joblocation: '',
        jobtype: '',
        cgpa: '',
        jobexperience: '',
        dob: '',
        projects: '',
        jobdescription: '',
        resume: '',
        skills: [],
    });

    useEffect(() => {
        const fetchJob = async () => {
            try {
                
                const response = await getapplybyid(id);
                setJob(response.data);
            } catch (error) {
                console.error('Error fetching job:', error);
            }
        };
        fetchJob();
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setJob({ ...job, [id]: value });
    };

    const handleSkillChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setJob(prevJob => ({ ...prevJob, skills: [...prevJob.skills, value] }));
        } else {
            setJob(prevJob => ({ ...prevJob, skills: prevJob.skills.filter(skill => skill !== value) }));
        }
    };
    const userid=localStorage.getItem('userid');

    const handleSubmit = async () => {
        console.log(job);
        try {
            const res=await editapply(id,userid,job);
            navigate('/appliedjobs');
            console.log(res);
        } catch (error) {
            console.error('Error updating job:', error);
        }
    };

  return (
    <>
        <UserNavbar/>
        <div className='applybody pt-[130px] ml-[50px]'>
        <h2 className='text-3xl font-bold ml-[350px] mb-[30px]'>{job.jobtitle}</h2>
        <div className="jobinput">
            <label>Full Name<span className="text-red-600">*</span></label>
            <input className="jobin"  type='text' id="name" value={job.name}  onChange={handleChange} placeholder="full Name"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Title<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="jobtitle" value={job.jobtitle} placeholder="Job Title"/>
        </div>
        <div className="jobinput">
            <label>Location<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="joblocation" value={job.joblocation} onChange={handleChange} placeholder="Job Location"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Time<span className="text-red-600">*</span></label>
            <select name="job type" id="jobtype"onChange={handleChange} value={job.jobtype}>
                <option value="full time">Full Time</option>
                <option value="part time">Part Time</option>
                <option value="internship">Internship</option>
            </select>
        </div>
        <div className="jobinput">
            <label>CGPA<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="cgpa" value={job.cgpa}  onChange={handleChange} placeholder="CGPA"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Experience<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="jobexperience" value={job.jobexperience} onChange={handleChange}placeholder="Experience in years"/>
        </div>
        <div className="jobinput">
            <label>Date of Birth<span className="text-red-600">*</span></label>
            <input className="jobin" type='date' id="dob" value={job.dob} onChange={handleChange} />
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Projects<span className="text-red-600" >*</span></label>
            <input className="jobin" type='text' id="projects" value={job.projects} onChange={handleChange} placeholder="No. of projects"/>
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
                    <label>Skills known<span className="text-red-600">*</span></label><br />
                    <div className="checkcontainer flex">
                    {['Java', 'C', 'C++', 'MySQL', 'ReactJS', 'Spring Boot','AWS','Python'].map((skill, index) => (
                        <div key={index} className="check p-2">
                            <input
                                type="checkbox"
                                name="skills"
                                value={skill}
                                onChange={handleSkillChange}
                                checked={job.skills.includes(skill)}
                                className="ml-[35px]"
                            />
                            {skill}
                        </div>
                    ))}
                    </div>
                </div>
        <div className="jobinput">
            <label>Resume<span className="text-red-600 pr-[20px]">*</span></label>
            <input className="jobin w-[800px] " type='text' id="resume" value={job.resume} onChange={handleChange} placeholder="Enter gdrive link of your resume"/>
        </div>
        <div className="jobinput">
            <label>Description<span className="text-red-600">*</span></label>
            <input className="jobin w-[800px] " type='text' id="jobdescription" value={job.jobdescription} onChange={handleChange} placeholder="About yourself and why do want this position"/>
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
