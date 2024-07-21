import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEducation } from './resume/resumeSlices';
import { useNavigate } from 'react-router-dom';
import { Button, Snackbar, Alert } from '@mui/material';

const EducationInfo = () => {
  const education = useSelector((state) => state.resume.education);
  const [successMessage, setSuccessMessage] = useState(false);
  const [alreadyUpdatedMessage, setAlreadyUpdatedMessage] = useState(false);
  const [type, setType] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setType(education.type || '');
    setUniversity(education.university || '');
    setDegree(education.degree || '');
    setStartYear(education.startYear || '');
    setEndYear(education.endYear || '');
  }, [education]);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (
      type === education.type &&
      university === education.university &&
      degree === education.degree &&
      startYear === education.startYear &&
      endYear === education.endYear
    ) {
      setAlreadyUpdatedMessage(true);
    } else {
      dispatch(setEducation({ type, university, degree, startYear, endYear }));
      setSuccessMessage(true);
    }
  };

  return (
    <div className='InfoDiv'>
      <form onSubmit={handleSubmit} className='FormInfoDiv'>
        <div className='formGroup'>
          <label htmlFor="educationType">Education Type:</label>
          <input
            type="text"
            id='educationType'
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>

        <div className='formGroup'>
          <label htmlFor="university">University:</label>
          <input
            type="text"
            id='university'
            placeholder='University'
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
          />
        </div>

        <div className='formGroup'>
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            id='degree'
            placeholder='Degree'
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />
        </div>

        <div className='formGroup'>
          <label htmlFor="startYear">Start Year:</label>
          <input
            type="text"
            id='startYear'
            placeholder='Start Year'
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            required
          />
        </div>

        <div className='formGroup'>
          <label htmlFor="endYear">End Year:</label>
          <input
            type="text"
            id='endYear'
            placeholder='End Year'
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            required
          />
        </div>

        <div className='ButtonDiv'>
          <Button type='submit' variant="contained" color="success">Update</Button>
          <Button variant="outlined" sx={{ marginLeft: "10px" }} onClick={() => navigate("/FormDetailsMainPage/WorkExperience")}>BACK</Button>
          <Button variant="outlined" sx={{ marginLeft: "10px" }} onClick={() => navigate("/FormDetailsMainPage/skill")}>NEXT</Button>
        </div>
      </form>

      <Snackbar open={successMessage} autoHideDuration={6000} onClose={() => setSuccessMessage(false)}>
        <Alert onClose={() => setSuccessMessage(false)} severity="success" sx={{ width: '100%' }}>
          Updated successfully
        </Alert>
      </Snackbar>

      <Snackbar open={alreadyUpdatedMessage} autoHideDuration={6000} onClose={() => setAlreadyUpdatedMessage(false)}>
        <Alert onClose={() => setAlreadyUpdatedMessage(false)} severity="info" sx={{ width: '100%' }}>
          Already Updated
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EducationInfo;
