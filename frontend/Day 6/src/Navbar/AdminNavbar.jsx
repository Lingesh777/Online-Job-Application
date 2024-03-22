// import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import './AdminNavbar.css'
import { useNavigate } from 'react-router-dom';
export const AdminNavbar = () => {
    const navigate=useNavigate();
  return (
    <div className="adminnavbar h-[100%] w-[200px] top-[70px] fixed">
        {/* <div className="adminnavicon mt-[30px]">
        <h3><span><GroupsIcon/></span> Jobs</h3>
        </div> */}
        <div className="adminnavright ml-[5px] mt-[10px]">
            <div className="navtext mt-[50px] h-[50px] " onClick={()=>{navigate('/admin/home')}}>
                <h3>Home</h3>
            </div>
            <div className="navtext mt-[-60px] h-[50px] " onClick={()=>{navigate('/addjob')}}>
                <h3>Add Jobs</h3>
            </div>
            <div className="navtext h-[50px]  mt-[-70px]" onClick={()=>{navigate('/application')}}>
                <h3>Applications</h3>
            </div>
            <div className="navtext h-[50px]  mt-[-80px]" onClick={()=>{navigate('/jobs')}}>
                <h3>Jobs</h3>
            </div>
            {/* <div className="navtext">
                <div className="searchbox">
                    <div className="searchicon"><SearchIcon/></div>
                    <input type="text" className="navinput" placeholder="search jobs . . ."/>
                </div>
            </div> */}
            <div className="navtext h-[50px] " onClick={()=>{navigate('/login')}}>
                <h3>Logout</h3>
            </div>
        </div>
    </div>
  )
}
