// import React from "react"
import './Login.css'
import loginimage from '../assets/Business deal-bro.png'
import { useNavigate } from 'react-router-dom'
// import { Button } from '@mui/material'
// import GroupsIcon from '@mui/icons-material/Groups';
import CheckIcon from '@mui/icons-material/Check';
export const Login = () => {
    const navigate=useNavigate();
  return (
    <div className="loginbody">
        <div className="logintop mt-[42px] h-[563px]">
            <h2 className="text-4xl font-extrabold flex justify-center p-6">Ready to take the next step !.</h2>
            <h3 className="text-3xl font-semibold flex justify-center ">Couple of minutes to get started</h3>
            <div className="loginleft w-[500px] ml-[300px] mt-[40px] ">
              <h4 className="mt-[5px] text-1xl font-medium"><span className="pr-4 "><CheckIcon className="ml-[20px]"/></span>Equip yourself for a great career</h4>
              <h4 className="mt-[5px] text-1xl font-medium"><span className="pr-4 "><CheckIcon className="ml-[20px]"/></span>Know application status on applied jobs</h4>
              <h4 className="mt-[5px] text-1xl font-medium"><span className="pr-4 "><CheckIcon className="ml-[20px]"/></span>Showcase profiles to top companies</h4>
              <img src={loginimage} className='h-[300px] ml-[50px] mt-[-35px]'></img>
            </div>
        </div>
        <div className="loginbox items-center w-[35%] ml-[48%] mt-[-29%] h-[340px]  ">
            <div className="linemail">
                <label >Email ID<span className='text-red-500'>*</span></label>
                <input className="lin h-[30px] mt-1" type="text" placeholder="Enter your email" />
                {/* <h5 style={{marginTop:'-12px',fontWeight:'lighter',fontSize:'13px'}}>we will send relevant jobs to this email</h5> */}
            </div>
            <div className="linpassword">
                <label>Password<span className='text-red-500'>*</span></label>
                <input className="lin h-[30px] mt-1"  type="text" placeholder="Enter your password" />
            </div>
           
            <button  className="lbut" onClick={()=>{navigate('/user/home')}}>Login</button>
            <h3 className='font-semibold mt-5 w-[300px] ml-[30px]' >New user ? <span className='text-1xl font-semibold text-blue-700' style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>Create One</span></h3>
            </div>
            <h3 className='text-1xl font-semibold ml-[320px]'><span className="text-1xl font-bold">Note : </span>All your details are stored securely and are visible only to the verified recruiters. </h3>
        </div>
  )
}
