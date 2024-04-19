// // import React from 'react'
// import './Jobs.css'
// import { AdminNavbar } from "../../Navbar/AdminNavbar"
// import { AdminTopbar } from "../../Navbar/AdminTopbar"
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useEffect, useState } from 'react';
// import { deletejob, getjob } from '../../Service/api';
// import { useNavigate } from 'react-router-dom';

// export const Jobs = () => {
//   const[jobs,setJobs]=useState([]);
//   const navigate=useNavigate();
//   const fetchjob=async()=>{
//     const res=await getjob();
//     setJobs(res.data);
//     console.log(res.data);
//   }
//   useEffect(()=>{
//     fetchjob();
//   },[])

//   const edit=(job)=>{
//     console.log(job);
//     navigate(`/editjob/${job.id}`);
//   }

//   const del=async(job)=>{
//     console.log(job)
//     const res=await deletejob(job.id);
//     console.log(res.data);
//     if(res.data==='deleted successfully')
//     {
//       fetchjob();
//     }
//   }

//   return (
//     <>
//     <AdminTopbar/>
//     <AdminNavbar/>
//     <div className="jobsbody mt-[100px] ml-[300px]">
//         <h2 className='text-2xl font-bold ml-[200px]'>The List of jobs that you have posted</h2>
//         <table className="jobstable mt-[50px]">
//               <thead>
//                 <tr>
//                   <th>Job Role</th>
//                   <th>Location</th>
//                   <th>Openings</th>
//                   <th>Edit</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                   {jobs.map((job)=>(
//                   <tr className='jobcontent'  key={job.id}>
//                     <td className='tabledata'>{job.jobtitle}</td>
//                     <td className='tabledata'>{job.joblocation}</td>
//                     <td className='tabledata'>{job.jobopenings}</td>
//                     <td className='tabledata' onClick={()=>{edit(job)}}><EditIcon className='text-green-600 cursor-pointer'/></td>
//                     <td className='tabledata' onClick={()=>{del(job)}}><DeleteIcon className='text-red-600 cursor-pointer'/></td>
//                   </tr>
//                   ))}
//               </tbody>
             
//         </table>
//     </div>
//     </>
//   )
// }
import React, { useEffect, useState } from 'react';
import { deletejob, getjob } from '../../Service/api';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdminNavbar } from "../../Navbar/AdminNavbar";
import { AdminTopbar } from "../../Navbar/AdminTopbar";

export const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    const res = await getjob();
    setJobs(res.data);
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  const editJob = (job) => {
    navigate(`/editjob/${job.id}`);
  }

  const deleteJob = async (job) => {
    const res = await deletejob(job.id);
    if (res.data === 'deleted successfully') {
      fetchJobs();
    }
  }
  console.log(jobs);

  return (
    <>
      <AdminTopbar />
      <AdminNavbar />
      <div className="jobs-container mt-10 p-6">
        {jobs.map((job) => (
          <div key={job.id} className="job-card mb-6 p-4 border border-gray-300 rounded-md w-[600px] ml-[400px] mt-[50px]">
            <h3 className="text-lg font-bold">{job.jobtitle}</h3>
            <div className="jobpad pt-2">
              <p className="text-gray-600 mt-2"><strong>Location: </strong>{job.joblocation}</p>
              <p className="text-gray-600 mt-2"><strong>Openings: </strong>{job.jobopenings}</p>
              <p className="text-gray-600 mt-2"><strong>Required Skills:</strong> {job.skills.join(', ')}</p>
              <p className="text-gray-600 mt-2"><strong>Description: </strong>{job.jobdescription}</p>
              <p className="text-gray-600 mt-2"><strong>Applied on : </strong>{job.createdAt?.substring(0, 10)}</p>
            </div>
            <div className="flex justify-end mt-4">
              <EditIcon className="text-green-600 cursor-pointer" onClick={() => editJob(job)} />
              <DeleteIcon className="text-red-600 cursor-pointer ml-5" onClick={() => deleteJob(job)} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

