import React, { useEffect, useState } from 'react';
import { AdminNavbar } from "../../Navbar/AdminNavbar";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Resume } from './Resume';
import { AdminTopbar } from '../../Navbar/AdminTopbar';
import { editjob, editstatus, getapply, getapplybyid, getjobbyid, getuserapply } from '../../Service/api';
import './Application.css';
import "react-toastify/dist/ReactToastify.css";
import {toast,ToastContainer } from 'react-toastify';
import empty from "../../assets/Empty-rafiki.png";
import emailjs from 'emailjs-com'

export const ApplicationReceived = () => {
  const [openResume, setOpenResume] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [apply, setApply] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    fetchApply();
  }, []);

  const fetchApply = async () => {
    try {
      const res = await getapply();
      setApply(res.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  }

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter(filter => filter !== value));
    }
  }

  const filteredApply = apply.filter(job => {
    if (selectedFilters.length === 0) 
      return job.status === null; 
    const jobTitleLowerCase = job.jobtitle.toLowerCase();
    const jobLocationLowerCase = job.joblocation.toLowerCase();
    const selectedFiltersLowerCase = selectedFilters.map(filter => filter.toLowerCase());
    return ((selectedFiltersLowerCase.includes(jobTitleLowerCase) || selectedFiltersLowerCase.includes(jobLocationLowerCase)) && (job.status === null || job.status === "null"));
  });

  const handleStatusUpdate = async (aid, status, app) => {
    const ress = await editstatus(aid, status);
    console.log(ress.data);
    try {
      const res = await getuserapply(aid);
      const org = await getapplybyid(aid);
      const email = res.data.email;
      const uname = res.data.username;
      const orgname = org.data.orgname;
      const jobtitle = org.data.jobtitle;
      const jobid=org.data.jobid;
      const jobres=await getjobbyid(jobid);
      console.log(jobres.data);
      if(status==='selected')
      {
        const updatedjobdetail = { ...jobres.data, jobopenings: jobres.data.jobopenings - 1 };
        const upres=await editjob(jobid,updatedjobdetail);
        console.log(upres.data);
      }
      const templateParams = {
        to_name: uname,
        to_email: email,
        job_role: jobtitle,
        org_name: orgname,
        message: status === 'selected' ? 'Congrats!, Your application has been shortlisted' : 'Oops!, Your application has been declined. Thank you for your interest.',
      };

      emailjs.send('service_e8l32up', 'template_kyvakuh', templateParams, 'Ao6DAsfBzy69RGoAL')
        .then((response) => {
          console.log('Email sent successfully:', response);
          if(status==='selected')
            toast.success("Selected");
          else
            toast.error("Rejected");
          fetchApply();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          toast.error('Error sending email');
        });
    } catch (error) {
      console.error("Error updating status:", error);
    }
    fetchApply();
  }
  const handleCardClick = (app) => {
    setSelectedApplication(app);
    setOpenResume(true);
  }
console.log(filteredApply);
  if(filteredApply.length < 1)
  {
    return (
    <>
    <AdminTopbar/>
      <AdminNavbar/>
      <div className="applicationbody mt-[100px] ml-[350px] w-[800px]">
        <h2 className='text-2xl font-bold ml-[230px]'><span className='text-red-500'>No,</span> Applications Received</h2>
        <div className="filter-box fixed">
          <h3 className='text-2xl font-semibold'>Filters</h3>
          <label><input type="checkbox" onChange={handleFilterChange} value="React Developer"/> React Developer</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="HR Executive"/> HR Executive</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Java Developer" /> Java Developer</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Python Developer"/> Python Developer </label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Cloud Architect"/> Cloud Architect  </label>

          <h3 className='text-2xl font-semibold'>Location</h3>
          <label><input type="checkbox" onChange={handleFilterChange} value="Coimbatore"/> Coimbatore</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Bangalore"/> Bangalore</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Chennai"/> Chennai</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Hyderabad"/> Hyderabad</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Mumbai"/> Mumbai</label>
        </div>
        <div className="img">
          <img src={empty} className="h-[500px] w-[600px] ml-[100px] mt-[-40px]"/>
        </div>
      </div>
    </>
    )
  }
  else
  {
  return (
    <div>
      <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
      <AdminTopbar/>
      <AdminNavbar/>
      <div className="applicationbody mt-[100px] ml-[350px] w-[800px]">
        <h2 className='text-2xl font-bold ml-[230px]'>Received Applications</h2>

        <div className="filter-box fixed">
          <h3 className='text-2xl font-semibold'>Filters</h3>
          <label><input type="checkbox" onChange={handleFilterChange} value="React Developer"/> React Developer</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="HR Executive"/> HR Executive</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Java Developer" /> Java Developer</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Python Developer"/> Python Developer </label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Cloud Architect"/> Cloud Architect  </label>

          <h3 className='text-2xl font-semibold'>Location</h3>
          <label><input type="checkbox" onChange={handleFilterChange} value="Coimbatore"/> Coimbatore</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Bangalore"/> Bangalore</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Chennai"/> Chennai</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Hyderabad"/> Hyderabad</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Mumbai"/> Mumbai</label>
        </div>

        <div className="card-container">
          {filteredApply.map((app) => (
            <div key={app.aid} className="application-card" onClick={() => handleCardClick(app)}>
              <h3>Applicant : {app.name}</h3>
              <p><strong>Job Role:</strong> {app.jobtitle}</p>
              <p><strong>Organization:</strong> {app.orgname}</p>
              <p><strong>Location:</strong> {app.joblocation}</p>
              <p> <strong>Applied on : </strong>{app.createdAt?.substring(0, 10)}</p>
              <p><strong>Skills:</strong> {app.skills.join(', ')}</p>
              <p><strong>Description:</strong> {app.jobdescription}</p>
              <div className="flex justify-end mt-4">
                <div onClick={(e) =>{e.stopPropagation(); handleStatusUpdate(app.aid, "selected",app)}}><CheckIcon className='text-green-600 cursor-pointer' /></div>
                <div onClick={(e) =>{e.stopPropagation(); handleStatusUpdate(app.aid, "rejected",app)}}><CloseIcon className='text-red-600 cursor-pointer ml-6' /></div>
              </div>
            </div>
          ))} 
        </div>

        {openResume && selectedApplication && (
          <Resume
            isOpen={openResume}
            onClose={() => setOpenResume(false)}
            aid={selectedApplication.aid}
          />
        )}
      </div>
    </div>
  )
}
}
