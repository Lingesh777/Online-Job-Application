import React from 'react'
import './Application.css'
import { AdminNavbar } from "../../Navbar/AdminNavbar"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { Resume } from './Resume';
import { AdminTopbar } from '../../Navbar/AdminTopbar';
import { getapply } from '../../Service/api';

export const ApplicationReceived = () => {
  const[open,setOpen]=useState(false);
  const resume=()=>{
    setOpen(!open)
  }

  const[apply,setApply]=useState([])

  const fetchApply=async()=>{
    const res=await getapply();
    setApply(res.data);
    console.log(res.data);
  }
  useEffect(()=>{
    fetchApply()
  },[])

  return (
    <div>
        <AdminTopbar/>
        <AdminNavbar/>
        <div className="applicationbody mt-[100px] ml-[350px] w-[800px]">
        <h2 className='text-2xl font-bold ml-[230px]'>Received Applications</h2>

          <div className="filter-box">
          <h3 className='text-2xl font-semibold'>Filters</h3>
          <label><input type="checkbox" value="React Developer"/>React Developer</label>
          <label><input type="checkbox" value="HR Executive"/>HR Executive</label>
          <label>
          <input type="checkbox" value="Java Developer" />Java Developer</label>
          <label><input type="checkbox" value="Python Developer"/> Python Developer </label>
          <h3 className='text-2xl font-semibold'>Location</h3>
          <label><input type="checkbox" value="React Developer"/>Coimbaotore</label>
          <label>
            <input
              type="checkbox"
              value="HR Executive"
              // onChange={handleFilterChange}
            />
            Bangalore
          </label>
          <label>
            <input
              type="checkbox"
              value="Java Developer"
              // onChange={handleFilterChange}
            />
            Chennai
          </label>
          <label>
            <input
              type="checkbox"
              value="Python Developer"
              // onChange={handleFilterChange}
            />
            Hyderabad
          </label>
        </div>

            <table className="applicationtable mt-[-300px] ml-[50px] ">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Job Role</th>
                  {/* <th>View Resume</th> */}
                  <th>Shortlist</th>
                  <th>Decline</th>
                </tr>
              </thead>
              <tbody>
                {apply.map((app)=>(
                  <React.Fragment key={app.aid}>
                  <tr onClick={resume} className='view' >
                    <td className='tabledata'>{app.name}</td>
                    <td className='tabledata'>{app.jobtitle}</td>
                    {/* <td><button className="bg-blue-600 text-white w-[80px]" >view</button></td> */}
                    <td className='tabledata'><CheckIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><CloseIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
                    <Resume isOpen={open} onClose={resume} aid={app.aid}/>
                  </React.Fragment>
                ))}
              </tbody>
              <br/>
            </table>
        </div>
    </div>
  )
}
