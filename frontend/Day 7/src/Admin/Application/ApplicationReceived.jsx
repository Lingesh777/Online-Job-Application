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

const[selectedFilters,setSelectedFilters]=useState([]);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter(filter => filter !== value));
    }
  }

  const filteredApply = apply.filter(app => {
    if (selectedFilters.length === 0) 
      return true; 
      return selectedFilters.includes(app.jobtitle) || selectedFilters.includes(app.joblocation);
  });
  
  return (
    <div>
        <AdminTopbar/>
        <AdminNavbar/>
        <div className="applicationbody mt-[100px] ml-[350px] w-[800px]">
        <h2 className='text-2xl font-bold ml-[230px]'>Received Applications</h2>

          <div className="filter-box">
          <h3 className='text-2xl font-semibold'>Filters</h3>
          <label><input type="checkbox" onChange={handleFilterChange} value="React Developer"/>React Developer</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="HR Executive"/>HR Executive</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Java Developer" />Java Developer</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Python Developer"/> Python Developer </label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Cloud Architect"/> Cloud Architect  </label>

          <h3 className='text-2xl font-semibold'>Location</h3>
          <label><input type="checkbox" onChange={handleFilterChange} value="Coimbatore"/>Coimbatore</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Bangalore"/>Bangalore</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Chennai"/>Chennai</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Hyderabad"/>Hyderabad</label>
          <label><input type="checkbox" onChange={handleFilterChange} value="Mumbai"/>Mumbai</label>
          
        </div>

            <table className="applicationtable mt-[-300px] ml-[50px] ">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Job Role</th>
                  {/* <th>Job Location</th> */}
                  <th>Shortlist</th>
                  <th>Decline</th>
                </tr>
              </thead>
              <tbody>
                {filteredApply.map((app)=>(
                  <React.Fragment key={app.aid}>
                  <tr onClick={resume} className='view' >
                    <td className='tabledata'>{app.name}</td>
                    <td className='tabledata'>{app.jobtitle}</td>
                    {/* <td className='tabledata'>{app.joblocation}</td> */}
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
