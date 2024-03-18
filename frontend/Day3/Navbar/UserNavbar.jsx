// import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import './UserNavbar.css'
import { useNavigate } from 'react-router-dom';
export const UserNavbar = () => {
    const navigate=useNavigate();
  return (
    <div className="usernavbar h-[70px]">
        <div className="usernavicon mt-[20px] ml-[30px]">
        <h3><span><GroupsIcon/></span> Jobs</h3>
        </div>
        <div className="usernavright mt-[15px] ml-[300px]">
            <div className="navtext mt-[5px]" onClick={()=>{navigate('/viewjobs')}}>
                <h3>View Jobs</h3>
            </div>
            <div className="navtext mt-[5px]"  onClick={()=>{navigate('/appliedjobs')}}>
                <h3>Applied Jobs</h3>
            </div>
            <div className="navtext">
                <div className="searchbox">
                    <div className="searchicon"><SearchIcon/></div>
                    <input type="text" className="navinput" placeholder="search jobs . . ."/>
                </div>
            </div>
            <div className="navtext ml-[150px] mt-[5px]" onClick={()=>{navigate('/login')}}>
                <h3>Logout</h3>
            </div>
        </div>
    </div>
  )
}
