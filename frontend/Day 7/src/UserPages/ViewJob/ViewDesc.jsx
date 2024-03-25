// import React from 'react'
import './ViewDesc.css'
export const ViewDesc = ({isOpen,onClose}) => {
    if(!isOpen)
        return null;
  return (
    <div className='descbody' onClick={onClose}>
        <div className="desccontent">
            <h2 className='text-2xl font-semibold'>Job Description</h2>
            <h3 className="ml-[20px] mt-[10px]">We are looking for a Front-end Intern React Developer with a personal drive to finish things with a quality focus, and seeks, gives, and constructively receives feedback, including but not limited to code and design reviews.</h3>
            <h3 className='text-2xl font-semibold mt-[20px]'>Required Technical and Professional Expertise</h3>
            <ul className='desclist mt-[10px]'>
                <li>5 to 8 Years of experience</li>
                <li>Strong development experience in Java and object-oriented programming</li>
                <li>Strong development experience with React development</li>
                <li>Experienced with tools such as GitHub</li>
                <li>Excellent communication skills (verbal and writing)</li>
                <li>Team leading and leadership experience</li>
            </ul>
        </div>
    </div>
  )
}
