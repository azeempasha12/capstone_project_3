import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonalInfo } from './resume/resumeSlices';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Button } from '@mui/material';
import { Snackbar, Alert } from '@mui/material';

const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setIsPersonalInfoUpdated } = useOutletContext();

  const personalInfo = useSelector((state) => state.resume.personalInfo);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal, setPostal] = useState('');
  const [objective, setObjective] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [alreadyUpdatedMessage, setAlreadyUpdatedMessage] = useState(false);

  useEffect(() => {
    setFirstName(personalInfo.firstName || '');
    setLastName(personalInfo.lastName || '');
    setEmail(personalInfo.email || '');
    setPhone(personalInfo.phone || '');
    setAddress(personalInfo.address || '');
    setCity(personalInfo.city || '');
    setState(personalInfo.state || '');
    setPostal(personalInfo.postal || '');
    setObjective(personalInfo.objective || '');
  }, [personalInfo]);

  const validateFields = () => {
    if (!firstName || !lastName || !email || !phone || !address || !city || !state || !postal || !objective) {
      setValidationError('Please fill in all fields');
      return false;
    }
    if (phone.length !== 10) {
      setValidationError('Mobile number should be 10 digits');
      return false;
    }
    if (postal.length !== 6) {
      setValidationError('Postal code should be 6 digits');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const currentData = {
      firstName, lastName, email, phone, address, city, state, postal, objective
    };

    if (JSON.stringify(currentData) === JSON.stringify(personalInfo)) {
      setAlreadyUpdatedMessage(true);
      return;
    }

    dispatch(setPersonalInfo(currentData));
    localStorage.setItem('personalInfo', JSON.stringify(currentData));
    setSuccessMessage(true);
    setIsPersonalInfoUpdated(true); 
  };

  const handleNext = () => {
    if (!validateFields()) return;
    navigate('/FormDetailsMainPage/WorkExperience');
  };

  return (
    <div className='InfoDiv'>
      <form onSubmit={handleSubmit} className='FormInfoDiv'>
      <div className='formGroup'>
<label htmlFor="firstName">First Name:</label>
<input
  type="text"
  id="firstName"
  placeholder="First Name"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  required
/>
</div>

<div className='formGroup'>
<label htmlFor="lastName">Last Name:</label>
<input
  type="text"
  id="lastName"
  placeholder="Last Name"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  required
/>
</div>

<div className='formGroup'>
<label htmlFor="email">Email:</label>
<input
  type="email"
  id="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
</div>

<div className='formGroup'>
<label htmlFor="mobile" style={{ paddingLeft: '25px' }}>Mobile:</label>
<input
  type="mobile"
  id="mobile"
  placeholder="Phone"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  required
/>
</div>

<div className='formGroup'>
<label htmlFor="address">Address:</label>
<input
  type="text"
  id="address"
  placeholder="Address"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  required
/>
</div>

<div className='formGroup'>
<label htmlFor="city" style={{ paddingLeft: '25px' }}>City:</label>
<input
  type="text"
  id="city"
  placeholder="City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  required
/>
</div>

<div className='formGroup'>
<label htmlFor="state">State:</label>
<input
  type="text"
  id="state"
  placeholder="State"
  value={state}
  onChange={(e) => setState(e.target.value)}
  required
/>
</div>

<div className='formGroup'>
<label htmlFor="postal" style={{ paddingLeft: '25px' }}>Postal:</label>
<input
  type="text"
  id="postal"
  placeholder="Postal Code"
  value={postal}
  onChange={(e) => setPostal(e.target.value)}
  required
/>
</div>

<div className='formGroup'>
<label htmlFor="objective">Objective:</label>
<input
  type="text"
  id="objective"
  placeholder="Objective"
  value={objective}
  onChange={(e) => setObjective(e.target.value)}
  required
/>
</div>
        <div className='ButtonDiv'>
          <Button type="submit" variant="contained" color="success">Update</Button>
          <Button variant="outlined" sx={{ marginLeft: '10px' }} onClick={() => navigate('/resumeTemplates/')}>BACK</Button>
          <Button variant="outlined" sx={{ marginLeft: '10px' }} onClick={handleNext}>NEXT</Button>
        </div>
      </form>

      {validationError && (
        <Snackbar open={Boolean(validationError)} autoHideDuration={6000} onClose={() => setValidationError('')}>
          <Alert onClose={() => setValidationError('')} severity="error" sx={{ width: '100%' }}>
            {validationError}
          </Alert>
        </Snackbar>
      )}

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

export default PersonalInfoForm;