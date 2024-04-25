import React, { useState } from 'react';
import axios from 'axios';

export default function Product() {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState(null);
  const [response, setResponse] = useState('');

  const handleTellMeAboutResumeClick = async () => {
    // Create FormData object to send resume file
    const formData = new FormData();
    formData.append('job_description', jobDescription);
    formData.append('resume', resume);

    try {
      // Send data to the backend for "tell_me_about_resume" endpoint
      const result = await axios.post('http://127.0.0.1:8000/tell_me_about_resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Set response received from backend
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePercentageMatchClick = async () => {
    // Create FormData object to send resume file
    const formData = new FormData();
    formData.append('job_description', jobDescription);
    formData.append('resume', resume);

    try {
      // Send data to the backend for "percentage_match" endpoint
      const result = await axios.post('http://127.0.0.1:8000/percentage_match', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Set response received from backend
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>ATS Project</h1>
      <div>
        <label>Job Description:</label>
        <input type="text" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
      </div>
      <div>
        <label>Resume:</label>
        <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
      </div>
      <div>
        <button onClick={handleTellMeAboutResumeClick}>Tell Me About Resume</button>
        <button onClick={handlePercentageMatchClick}>Percentage Match</button>
      </div>
      {response && <p>{response}</p>}
    </div>
  );
}
