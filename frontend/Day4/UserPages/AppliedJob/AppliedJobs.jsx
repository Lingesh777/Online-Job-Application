// import React from 'react'

import { UserNavbar } from "../../Navbar/UserNavbar"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const AppliedJobs = () => {
  return (
    <>
    <UserNavbar/>
        <div className="appliedjobbody"> 
        <h2 className='text-2xl font-bold ml-[40%] mt-[30px]'>Jobs Applied</h2>
            <table className="applicationtable mt-[20px]">
              <thead>
                <tr>
                  <th>Organization name</th>
                  <th>Job Role</th>
                  <th>Status</th>
                  <th>Edit</th>
                  <th>Withdraw</th>
                </tr>
              </thead>
              <tbody>
                  <tr className='view'>
                    <td className='tabledata'>Infosys</td>
                    <td className='tabledata'>React Developer</td>
                    <td className='tabledata'>Pending</td>
                    <td className='tabledata'><EditIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><DeleteIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
              </tbody>
              <br/>
              <tbody>
                  <tr className='view'>
                    <td className='tabledata'>Goldman Sach</td>
                    <td className='tabledata'>React Developer</td>
                    <td className='tabledata'>Declined</td>
                    <td className='tabledata'><EditIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><DeleteIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
              </tbody>
              <br/>
              <tbody>
                  <tr className='view'>
                    <td className='tabledata'>Accenture</td>
                    <td className='tabledata'>React Developer</td>
                    <td className='tabledata'>Shortlisted</td>
                    <td className='tabledata'><EditIcon className='text-green-600 cursor-pointer'/></td>
                    <td className='tabledata'><DeleteIcon className='text-red-600 cursor-pointer'/></td>
                  </tr>
              </tbody>
              </table>
        </div>
    </>
  )
}
