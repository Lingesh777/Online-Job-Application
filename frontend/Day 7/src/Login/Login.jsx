// import React from "react"
import './Login.css'
import loginimage from '../assets/Business deal-bro.png'
import { useNavigate } from 'react-router-dom'
// import { Button } from '@mui/material'
// import GroupsIcon from '@mui/icons-material/Groups';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { userlogin } from '../Service/api';
export const Login = () => {
    const navigate=useNavigate();
    const [login,setLogin]=useState({
      username:'',password:''
    })
    const handleChange=(e)=>{
      e.preventDefault();
      setLogin({...login,[e.target.id]:e.target.value});
    }
    const handleSubmit= async(e)=>{
      const res=await userlogin(login);
      console.log(res.data);
      console.log(res.status);
      console.log(res.data.role);
      localStorage.setItem('Token',res.data.token);
      localStorage.setItem('username',res.data.username);
      localStorage.setItem('useremail',res.data.email);
      localStorage.setItem('userid',res.data.uid);
      localStorage.setItem('userrole',res.data.role);
      localStorage.setItem('usermobile',res.data.mobilenum);
      localStorage.setItem('userpassword',res.data.password);
      localStorage.setItem('userenable',res.data.isEnabled);
      if((res.data.role)=="ADMIN" && (res.status)=="200")
      {
          // toast.success(`Welcome admin ${res.data.username} !`)
          setTimeout(()=>{
              navigate('/admin/home')
          },3000)
      }
      else if((res.data.role)=="USER" && (res.status)=="200")
      {
          // toast.success(`Welcome back ${res.data.username} !`)
          setTimeout(()=>{
              navigate('/user/home')
          },3000)
      }
      else
      {
          // toast.error("Invalid username or password !");
      }
    }
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
                <input className="lin h-[30px] mt-1" type="text" id='username' onChange={handleChange} placeholder="Enter your email" />
                {/* <h5 style={{marginTop:'-12px',fontWeight:'lighter',fontSize:'13px'}}>we will send relevant jobs to this email</h5> */}
            </div>
            <div className="linpassword">
                <label>Password<span className='text-red-500'>*</span></label>
                <input className="lin h-[30px] mt-1" id='password' onChange={handleChange} type="password" placeholder="Enter your password" />
            </div>
           
            <button  className="lbut" onClick={handleSubmit}>Login</button>
            <h3 className='font-semibold mt-5 w-[300px] ml-[30px]' >New user ? <span className='text-1xl font-semibold text-blue-700' style={{cursor:'pointer'}} onClick={()=>{navigate('/signup')}}>Create One</span></h3>
            </div>
            <h3 className='text-1xl font-semibold ml-[320px]'><span className="text-1xl font-bold">Note : </span>All your details are stored securely and are visible only to the verified recruiters. </h3>
        </div>
  )
}
