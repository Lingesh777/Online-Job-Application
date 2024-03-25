
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './Signup/Signup'
import { Login } from './Login/Login'
import { UserHome } from './UserPages/Home/UserHome'
import { ViewJobs } from './UserPages/ViewJob/ViewJobs'
import { AppliedJobs } from './UserPages/AppliedJob/AppliedJobs'
import { AdminHome } from './Admin/Home/AdminHome'
import { AddJob } from './Admin/AddJob/AddJob'
import { ApplicationReceived } from './Admin/Application/ApplicationReceived'
import { Jobs } from './Admin/Jobs/Jobs'
import { Landing } from './Landing/Landing'
import { Apply } from './UserPages/ViewJob/Apply'
import { EditJobs } from './Admin/EditJobs/EditJobs'
import { Pending } from './UserPages/AppliedJob/Pending'
import { Shortlisted } from './UserPages/AppliedJob/Shortlisted'
import { Declined } from './UserPages/AppliedJob/Declined'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/user/home' element={<UserHome/>}/>
      <Route path='/viewjobs' element={<ViewJobs/>}/>
      <Route path='/appliedjobs' element={<AppliedJobs/>}/>
      <Route path='/pendingjobs' element={<Pending/>}/>
      <Route path='/shortlistedjobs' element={<Shortlisted/>}/>
      <Route path='/declinedjobs' element={<Declined/>}/>
      <Route path='/apply/:id' element={<Apply/>}/>

      <Route path='/admin/home' element={<AdminHome/>}/>
      <Route path='/addjob' element={<AddJob/>}/>
      <Route path='/application' element={<ApplicationReceived/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/editjob/:id' element={<EditJobs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
