// import React from 'react'
import { useEffect, useState } from 'react';
import { getapplybyid } from '../../Service/api';
import './Resume.css';
export const Resume = ({isOpen,onClose,aid}) => {
    if(!isOpen)
        return null;
    console.log(aid);

    const [fileId, setFileId] = useState('');

    useEffect(() => {
        const fetchjobid = async () => {
            try {
                const res = await getapplybyid(aid);
                const link = res.data?.resume;
                if (link) {
                    const fileId = extractFileId(link);
                    setFileId(fileId);
                }
                else
                {
                   setFileId(null);
                }
            } catch (error) {
                console.error('Error fetching job ID:', error);
            }
        };

        if (aid) {
            fetchjobid();
        }
    }, [aid]);

    const extractFileId = (link) => {
        // Regular expression to match the fileId
        const regex = /\/d\/([^/]+)/;
        // Extract the fileId using match()
        const match = link.match(regex);
        // Check if match is found and extract fileId
        return match ? match[1] : null;
    };
    console.log(fileId);

  return (
    <div className="resumebody" onClick={onClose}>
        <div className="resume-content">
            { fileId? (
            <iframe src={`https://drive.google.com/file/d/${fileId}/preview`} width="100%" height="600px" title="Resume"></iframe>
            ):
            (
                <h1>No resume found</h1>
            )
            }
        </div>
    </div>
  )
}

