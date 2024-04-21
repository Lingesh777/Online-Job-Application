import { useEffect, useState } from "react";
import { UserNavbar } from "../../Navbar/UserNavbar";
import { AppliedNavbar } from "../../Navbar/AppliedNavbar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupsIcon from '@mui/icons-material/Groups';
import { deleteapply, getuserdata, getuserdatabyid } from "../../Service/api";
import empty from "../../assets/Empty-rafiki.png";
import './AppliedJob.css';
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {toast,ToastContainer } from 'react-toastify';

const AppliedJobs = () => {
  const userid = localStorage.getItem('userid');
  const [applied, setApplied] = useState({ applications: [] });
  const navigate=useNavigate();

  // useEffect(() => {
  //   const fetchApplied = async () => {
  //     try {
  //       const res = await getuserdatabyid(userid);
  //       setApplied(res.data);
  //     } catch (error) {
  //       console.error("Error fetching applied jobs:", error);
  //     }
  //   };
  //   fetchApplied();
  // }, [userid]);
  
  
  const fetchApply = async () => {
    try {
      const res = await getuserdatabyid(userid);
      setApplied(res.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  }
  useEffect(() => {
    fetchApply();
  }, [userid]);
  console.log(applied);


  const editapply=(aid,apply)=>{
    console.log(aid);
    console.log(apply);
    navigate(`/editapplied/${aid}`)
  }
  
  const delapply=async(aid)=>{
    console.log(aid);
    const res=await deleteapply(aid);
    console.log(res.data);
    toast.success("job deleted");
    fetchApply();
  }
  const getColor=(status)=>{
    if(status===null)
      return 'text-yellow-600';
    if(status==='selected')
      return 'text-green-500';
    else
      return 'text-red-500';
  }

  if (applied.applications.length === 0) {
    return (
      <>

      <UserNavbar />
      <div className="appliedjobbody pt-[100px] w-[80%] ml-[120px]">
        <h2 className='text-2xl font-bold ml-[40%] mt-[10px] pb-[30px]'>My Job Applications</h2>
        <AppliedNavbar />
        <div className="noapplication">
         <img src={empty} className="h-[400px] w-[500px] ml-[300px] mt-[-40px]"/>
         <h2 className="text-2xl font-bold mt-[-20px] ml-[220px]">No applications yet, <span className="text-blue-400 cursor-pointer" onClick={()=>{navigate('/viewjobs')}}>Click here </span> to view jobs and apply</h2>
        </div>
      </div>
      </>
    );
  }
  else
  {
  return (
    <>
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
      <UserNavbar />
      <div className="appliedjobbody pt-[100px] w-[80%] ml-[120px]">
        <h2 className='text-2xl font-bold ml-[40%] mt-[10px] pb-[30px]'>My Job Applications</h2>
        <AppliedNavbar />
        <div className="appliedbox">
          {applied.applications.map((app) => (
            <div className="appliedcontainer ml-[150px] mb-6" key={app.aid}>
              <h3 className="ml-[80%]">
                <span className="text-blue-600 cursor-pointer" onClick={()=>editapply(app.aid,app)}><EditIcon /></span>
                <span className='ml-[30px] cursor-pointer text-red-500' onClick={()=>delapply(app.aid)}><DeleteIcon /></span>
              </h3>
              <h3 className="text-3xl font-bold mt-[10px]">{app.jobtitle}</h3>
              <h3 className="text-2xl font-semibold mt-[10px]">{app.orgname}</h3>
              <h3 className="mt-[10px] text-1xl font-semibold">{app.joblocation}</h3>
              <h3 className="mt-[10px] font-medium text-gray-800">Applied on {app.createdAt?.substring(0, 10)}</h3>
              <h3 className={`mt-[10px] font-medium ${getColor(app.status)} `}>{app.status === null ? "pending" : app.status === "selected" ? "selected" : "declined"}</h3>
              <h3 className="mt-[10px] pb-6 font-semibold text-gray-800">
                <span><GroupsIcon /></span> Around 120 peoples have applied on careercraft
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  }
};

export default AppliedJobs;
