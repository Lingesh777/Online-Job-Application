// import React from 'react'
import './Resume.css';
export const Resume = ({isOpen,onClose}) => {
    if(!isOpen)
        return null;
  return (
    <div className="resumebody" onClick={onClose}>
        <div className="resume-content">
            <h2>Name : Lingesh M</h2>
            <h2>Education: BE Computer Science</h2>
        </div>
    </div>
  )
}
