import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../Faq/Faq.css';
const Faq = () => {
        const toggleAnswer = (event) => {
          const answer = event.target.nextElementSibling;
          if(answer){
          answer.classList.toggle('active');
          }
        };
  return (
    <div className='faqs'>
      <h1>Frequently Asked Questions.</h1>
      <div className='question'>
        <button className='collapsible' onClick={toggleAnswer}>
          1.How do I apply for a job on your website?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        To apply for a job, simply navigate to our Careers page, select the position you're interested in, and click on the "Apply Now" button. Follow the instructions to complete your application and submit your resume and any other required documents.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         2.Can I apply for multiple positions at once? <KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Yes, you can apply for multiple positions by submitting separate applications for each role you're interested in. However, we recommend tailoring your resume and cover letter to each specific position for better chances of consideration.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
        3.What should I include in my resume and cover letter?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Your resume should highlight your relevant experience, skills, and qualifications for the position you're applying for. Your cover letter should briefly introduce yourself, express your interest in the role, and explain why you're a good fit for the position and our company.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
        4.  How long does it typically take to hear back after applying? <KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        We strive to review applications as quickly as possible. However, the timeline can vary depending on the volume of applications and the specific hiring process for each role. You can expect to hear back from us within [X] days/weeks regarding the status of your application.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
        5.  Can I update my application after submitting it?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Unfortunately, once your application is submitted, you cannot make changes to it. However, if you need to update any information or submit additional documents, please contact our HR department at [HR email or phone number] for assistance.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         6. Do you offer remote work opportunities? <KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Yes, we may have remote work opportunities available for certain positions. Please review the job description for the specific role you're interested in to determine if remote work is an option.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         7.  Do you offer internships or entry-level positions for recent graduates?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Yes, we offer internships and entry-level positions for recent graduates in various departments. These opportunities are typically posted on our Careers page, so we encourage you to check regularly for updates.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         8.  Are there any opportunities for career growth and advancement within your company?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Yes, we are committed to supporting the professional development and growth of our employees. We offer various training programs, mentorship opportunities, and career advancement paths within our organization.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         9. How can I contact your HR department for further inquiries?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        If you have any additional questions or need further assistance, please feel free to contact our HR department at [HR email or phone number]. Our team is available to assist you during regular business hours.
        </div>
        </button>
      </div>
    </div>
  )
}

export default Faq