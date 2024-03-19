// import React from 'react'
import './Application.css'
import { AdminNavbar } from "../../Navbar/AdminNavbar"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Resume } from './Resume';
import { AdminTopbar } from '../../Navbar/AdminTopbar';

export const ApplicationReceived = () => {
  const[open,setOpen]=useState(false);
  const resume=()=>{
    setOpen(!open)
  }
  return (
    <div>
        <AdminTopbar/>
        <AdminNavbar/>
        <div className="applicationbody mt-[100px] ml-[350px] w-[800px]">
        <h2 className='text-2xl font-bold ml-[230px]'>Received Applications</h2>
            <table className="applicationtable mt-[20px]">
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
                  <tr onClick={resume} className='view'>
                    <td className='tabledata'>Lingesh</td>
                    <td className='tabledata'>React Developer</td>
                    {/* <td><button className="bg-blue-600 text-white w-[80px]" >view</button></td> */}
                    <td className='tabledata'><CheckIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><CloseIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
                <Resume isOpen={open} onClose={resume}/>
              </tbody>
              <br/>
              <tbody>
                  <tr onClick={resume} className='view'>
                    <td className='tabledata'>Kishore</td>
                    <td className='tabledata'>HR Executive</td>
                    {/* <td><button className="bg-blue-600 text-white w-[80px]" >view</button></td> */}
                    <td className='tabledata'><CheckIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><CloseIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
                <Resume isOpen={open} onClose={resume}/>
              </tbody>
              <br/>
              <tbody>
                  <tr onClick={resume} className='view'>
                    <td className='tabledata'>Naveena</td>
                    <td className='tabledata'>Java Developer</td>
                    {/* <td><button className="bg-blue-600 text-white w-[80px]" >view</button></td> */}
                    <td className='tabledata'><CheckIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><CloseIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
                <Resume isOpen={open} onClose={resume}/>
              </tbody>
              <br/>
              <tbody>
                  <tr onClick={resume} className='view'>
                    <td className='tabledata'>Jayaprakash</td>
                    <td className='tabledata'>Python Developer</td>
                    {/* <td><button className="bg-blue-600 text-white w-[80px]" >view</button></td> */}
                    <td className='tabledata'><CheckIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><CloseIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
                <Resume isOpen={open} onClose={resume}/>
              </tbody>
              <br/>
              <tbody>
                  <tr onClick={resume} className='view'>
                    <td className='tabledata'>Lingesh</td>
                    <td className='tabledata'>React Developer</td>
                    {/* <td><button className="bg-blue-600 text-white w-[80px]" >view</button></td> */}
                    <td className='tabledata'><CheckIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><CloseIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
                <Resume isOpen={open} onClose={resume}/>
              </tbody>
              <br/>
            </table>
        </div>
    </div>
  )
}
