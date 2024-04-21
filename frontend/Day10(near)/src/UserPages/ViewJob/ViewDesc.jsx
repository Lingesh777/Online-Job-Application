import { useEffect, useState } from 'react';
import { getjobbyid } from '../../Service/api';
import './ViewDesc.css';

export const ViewDesc = ({ isOpen, onClose, jobid }) => {
    const [jobdetails, setJobdetails] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const res = await getjobbyid(jobid);
                setJobdetails(res.data);
                console.log(res.data);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        if (isOpen && jobid) {
            fetchJobDetails();
        }
    }, [isOpen, jobid]);

    if (!isOpen || !jobdetails) {
        return null;
    }

    return (
        <div className='descbody' onClick={onClose}>
            <div className="desccontent">
                <h2 className='text-2xl font-semibold mt-[10px]'>Job Description</h2>
                <p className='mt-[10px]'>{jobdetails.jobdescription}</p>
                <h3 className='text-2xl font-semibold mt-[20px]'>Required Technical and Professional Expertise</h3>
                <ul style={{ listStyleType: 'disc' ,marginTop:'10px',marginLeft:'20px'}}>
                    {jobdetails.skills.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
                {/* <h2 className='text-2xl font-semibold mt-[20px]'>Experience</h2>
                <p className='mt-[10px]'>{jobdetails.jobexperience}</p> */}
                <h3 className='text-2xl font-semibold mt-[20px]'>Educational Requirement</h3>
                <ul style={{ listStyleType: 'disc' ,marginTop:'10px',marginLeft:'20px'}}>
                    {jobdetails.educationalrequirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
