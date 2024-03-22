// import React from "react"
import './Signup.css'
import signupimage from '../assets/Developer activity-bro.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { userregister } from '../Service/api';
// import { Button } from '@mui/material'
export const Signup = () => {
    const navigate=useNavigate();
    const[signup,setSignup]=useState({
        username:'',email:'',password:'',mobilenum:'',role:'USER'
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setSignup({...signup,[e.target.id]:e.target.value})
      }
      const handleSubmit=async(e)=>{
        e.preventDefault();
        const res=await userregister(signup);
        console.log(res.data);
          if((res.data)=="User registeration completed" && (res.status)=="200")
            {
                // toast.success(`Welcome ${signup.username} to cary's !`)
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            }
            else if((res.data.role)=="Something went wrong!" && (res.status)=="200")
            {
                // toast.error("Username or email already exists");
            }
    }
  return (
    <div className="signupbody">
        <div className="signuptop mt-[42px] h-[563px]">
            <h2 className="text-4xl font-extrabold flex justify-center p-6">Sign-up and apply for free</h2>
            <h3 className="text-3xl font-semibold flex justify-center ">1,50,000 more companies</h3>
            <img src={signupimage} className='h-[350px] ml-[50px]'></img>
            <h3 className='font-semibold mt-5'>Already an User ? <span className='text-1xl font-semibold text-blue-700' style={{cursor:'pointer'}} onClick={()=>{navigate('/login')}}>Login</span></h3>
        </div>
        <div className="signupbox flex flex-col gap-5 justify-center items-center h-[563px] mt-6">
            <div className="sinname">
                <label>Full name<span className='text-red-500'>*</span></label>
                <input className="sin h-[30px] mt-1" type="text" onChange={handleChange}  id='username' placeholder="Enter your name" />
            </div>
            <div className="sinemail">
                <label>Email ID<span className='text-red-500'>*</span></label>
                <input className="sin h-[30px] mt-1" type="email" onChange={handleChange} id='email' placeholder="Enter your email" />
                {/* <h5 style={{marginTop:'-12px',fontWeight:'lighter',fontSize:'13px'}}>we will send relevant jobs to this email</h5> */}
            </div>
            <div className="sinpassword">
                <label>Password<span className='text-red-500'>*</span></label>
                <input className="sin h-[30px] mt-1"  type="password" onChange={handleChange} id='password' placeholder="Enter your password" />
            </div>
            <div className="sinmobile">
                <label>Number<span className='text-red-500'>*</span></label>
                <input className="sin h-[30px] mt-1" id='mobilenum' onChange={handleChange} type="text" placeholder="Enter your phone Number" />
                {/* <h5 style={{marginTop:'-12px',fontWeight:'lighter',fontSize:'13px'}}>Recruiters will contact you on this number</h5> */}
            </div>
            <div className="sinpos" style={{marginLeft:'-40px'}}>
                <h3>Current status<span className='text-red-500'>*</span></h3>
                <input type="radio" id="role"  name="radioGroup" className="mt-3  "/><label>Student</label>
                <input type="radio" id="role"  name="radioGroup" style={{marginLeft:'10px'}}  className="mt-3 "/><label>Employee</label>
                <input type="radio" id="role"  name="radioGroup" style={{marginLeft:'10px'}}  className="mt-3 "/><label>HR</label>
            </div>
            <button  className="sbut mt-[-10px]" onClick={handleSubmit}>signup</button>
            {/* <Button className=''>singnup</Button> */}
        </div>
    </div>
  )
}
