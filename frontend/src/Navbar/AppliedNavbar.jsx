// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AppliedNavbar.css'

export const AppliedNavbar = () => {
    const navigate=useNavigate();
  return (
    <div className='appliednavbar'>
        <div className="appliednavelement pb-[10px]">
            <h3 className="appnavcont cursor-pointer text-1xl font-bold" onClick={()=>{navigate('/appliedjobs')}} >All </h3>
            <h3 className="appnavcont cursor-pointer text-1xl font-bold" onClick={()=>{navigate('/pendingjobs')}}>Pending</h3>
            <h3 className="appnavcont cursor-pointer text-1xl font-bold" onClick={()=>{navigate('/shortlistedjobs')}}>Shortlisted</h3>
            <h3 className="appnavcont cursor-pointer text-1xl font-bold" onClick={()=>{navigate('/declinedjobs')}}>Declined</h3>
        </div>
    </div>
  )
}
