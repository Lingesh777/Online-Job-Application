import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate();
  const handlego=()=>
  {
    navigate("/commit");
  }
  return (
    <div>
        <div style={{marginTop:"8%",marginLeft:"10%",fontWeight:"bold",fontSize:"60px"}}>About CareerCraft</div>
        <h4 style={{width:"38%",marginLeft:"10%",fontSize:"23px"}}>CareerCraft is the #1 job site in the world1 with over 350M+ unique visitors every month2. Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. Every day, we connect millions of people to new opportunities. </h4>
        <h4 style={{width:"38%",marginLeft:"10%",fontSize:"23px",marginTop:"2%",fontWeight:"bold"}}>Please note that Indeed and its affiliates are directly or indirectly owned by a publicly traded Japanese parent company, Recruit Holdings Co., Ltd.</h4>
        <div style={{marginLeft:"57%",marginTop:"-27%"}}><img style={{width:"75%"}} src='https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08192932/Image-Frame.png'/></div>

        <div style={{color:"blue",fontSize:"55px",marginLeft:"10%",marginTop:"7%"}}>350M+</div>
        <div style={{fontSize:"20px",marginLeft:"23%",marginTop:"-4.5%",width:"10%"}}>unique monthly visitors</div>
        <div style={{color:"blue",fontSize:"55px",marginLeft:"38%",marginTop:"-5%"}}>245M</div>
        <div style={{fontSize:"20px",marginLeft:"49%",marginTop:"-4.5%",width:"10%"}}>Resumes on CareerCraft</div>
        <div style={{color:"blue",fontSize:"55px",marginLeft:"62%",marginTop:"-5%"}}>980M+</div>
        <div style={{fontSize:"20px",marginLeft:"76%",marginTop:"-4.5%",width:"10%"}}>Total Ratings and Reviews</div>

        <div style={{marginTop:"5%",marginLeft:"54%",fontSize:"25px",fontWeight:"bold"}}>
          <div style={{marginTop:"13%",marginLeft:"-10%"}}>Our People</div>
          <div style={{marginLeft:"-95%",marginTop:"-6.7%"}}><img style={{width:"38%"}} src='https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08194002/6col.png'/></div>
          <div style={{fontWeight:"normal",marginTop:"-56%",marginLeft:"-10%",width:"95%"}}>At CareerCraft, our mission is to help people get jobs. We have more than ~13,000 global employees passionately pursuing this purpose and improving the recruitment journey through real stories and data. We foster a collaborative workplace that strives to create the best experience for job seekers.</div>
        </div>

        <div style={{marginTop:"19%",marginLeft:"10%"}}>
          <div style={{fontWeight:"bold",fontSize:"28px"}}>Our LeaderShip</div>
          <div style={{fontSize:"25px",width:"45%"}}>CareerCraft's leadership team is diverse, dedicated and committed to empowering our employees to fulfill our mission: We help people get jobs. By fostering strong partnerships and collaboration, they serve and support job seekers, employers, society and our employees.Meet our team</div>
          <div><img style={{width:"45%",marginLeft:"48%",marginTop:"-22%"}} src='https://www.business-powerhouse.com/sites/default/files/styles/facebook/public/2020-11/what-is-leadership.jpg?h=491a2f5b&itok=z5-bksKB'/></div>
        </div>

        <div style={{marginTop:"7%",marginLeft:"54%",fontSize:"25px",fontWeight:"bold"}}>
          <div style={{marginTop:"13%",marginLeft:"-10%"}}>Our Commitments</div>
          <div style={{marginLeft:"-95%",marginTop:"-6.7%"}}><img style={{width:"38%",height:"47vh"}} src='https://d341ezm4iqaae0.cloudfront.net/assets/2021/07/19175644/30m-jsfb-2-2.jpg'/></div>
          <div style={{fontWeight:"normal",marginTop:"-40%",marginLeft:"-10%",width:"95%" }}>Our Environmental, Social & Governance (ESG) commitments aim to bring about a future of work that is equitable and inclusive. As the world’s number one job site and leading matching and hiring platform1, we strive to make a positive impact on society by connecting people to better work to create better lives.</div>
          <button style={{color:"white",border:"1px solid blue",backgroundColor:"blue",width:"21%",borderRadius:"5px",marginTop:"5%"}} onClick={handlego}>Learn more</button>
        </div>

        <div style={{backgroundColor:"#F0F0F0",height:"40vh",marginTop:"5%",padding:"1%"}}>
          <div style={{fontWeight:"bold",fontSize:"20px",marginLeft:"8%"}}>We're here to help</div>
          <div style={{marginLeft:"8.1%",marginTop:"0.5%"}}>Visit our Help Centre for answers to common questions or contact us directly.</div>
          <button style={{border:"1px solid blue",backgroundColor:"white",color:"blue",width:"10%",borderRadius:"5px",padding:"0.3%",marginLeft:"10%",marginTop:"2%"}}>Contact Support</button>
        </div>
    </div>
  )
}

export default About