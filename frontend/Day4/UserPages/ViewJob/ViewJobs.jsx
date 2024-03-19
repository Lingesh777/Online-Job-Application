// import React from 'react'

import { UserNavbar } from "../../Navbar/UserNavbar"
import PlaceIcon from '@mui/icons-material/Place';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import './ViewJobs.css'
export const ViewJobs = () => {
  return (
    <div>
        <UserNavbar/>
        <div className="viewjobbody">
          <h1 className='text-2xl font-bold flex justify-center'>Find Your Dream Job now</h1>
          <div className="viewbox">
            <h2>Java Developer</h2>
            <h3>Infosys</h3>
            <div className="viewboxdown">
              <h3><span><PersonOutlinedIcon/></span>full time | <span><WorkOutlineOutlinedIcon/></span>  5-10 Yrs |<span><PlaceIcon/></span> Chennai</h3>
            </div>
          </div>
        </div>
    </div>
  )
}
