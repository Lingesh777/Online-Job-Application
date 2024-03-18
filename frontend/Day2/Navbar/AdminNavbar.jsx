// import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
// import SearchIcon from '@mui/icons-material/Search';
import './AdminNavbar.css'
import { useNavigate } from 'react-router-dom';
export const AdminNavbar = () => {
    const navigate=useNavigate();
  return (
    <div className="adminnavbar h-[100%] w-[200px] top-0 fixed">
        <div className="adminnavicon">
        <h3><span><GroupsIcon/></span> Jobs</h3>
        </div>
        <div className="adminnavright mt-[-50px]">
            <div className="navtext border-2 border-red-500 h-[50px]" onClick={()=>{navigate('/addjob')}}>
                <h3>Add Jobs</h3>
            </div>
            <div className="navtext border-2 border-red-500 h-[50px]"  onClick={()=>{navigate('/application')}}>
                <h3>Applications Received</h3>
            </div>
            {/* <div className="navtext">
                <div className="searchbox">
                    <div className="searchicon"><SearchIcon/></div>
                    <input type="text" className="navinput" placeholder="search jobs . . ."/>
                </div>
            </div> */}
            <div className="navtext" onClick={()=>{navigate('/login')}}>
                <h3>Logout</h3>
            </div>
        </div>
    </div>
  )
}
