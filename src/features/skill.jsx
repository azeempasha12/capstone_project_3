import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSkill } from './resume/resumeSlices';
import { useNavigate } from 'react-router-dom';
import { Button, Snackbar, Alert } from '@mui/material';

const Skill = () => {
    const skills = useSelector((state) => state.resume.skills);
    const [successMessage, setSuccessMessage] = useState(false);
    const [alreadyUpdatedMessage, setAlreadyUpdatedMessage] = useState(false);
    const [isSkillsUpdated, setIsSkillsUpdated] = useState(false);
    const [skillList, setSkillList] = useState(["", "", ""]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (skills && skills.length > 0) {
            setSkillList(skills);
        }
    }, [skills]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the form data has changed
        if (JSON.stringify(skillList) === JSON.stringify(skills)) {
            setAlreadyUpdatedMessage(true);
        } else {
            dispatch(setSkill(skillList));
            console.log("working");
            setSuccessMessage(true);
            setIsSkillsUpdated(true); 
        }
    };

    const handleAddSkill = () => {
        setSkillList([...skillList, ""]);
    };

    const handleSkillChange = (index, value) => {
        const newSkillList = [...skillList];
        newSkillList[index] = value;
        setSkillList(newSkillList);
    };

    return (
        <div className='InfoDiv'>
            <form onSubmit={handleSubmit} className='FormInfoDiv'>
                {skillList.map((skill, index) => (
                    <div key={index} className='formGroup'>
                        <label htmlFor={`skill-${index}`}>Skill {index + 1}:</label>
                        <input
                            type="text"
                            id={`skill-${index}`}
                            placeholder={`Skill ${index + 1}`}
                            value={skill}
                            onChange={(e) => handleSkillChange(index, e.target.value)}
                            required
                        />
                    </div>
                ))}
                <Button type="button" onClick={handleAddSkill} variant="outlined" sx={{ marginTop: '10px' }}>
                    Add Skill
                </Button>
                <div style={{ alignContent:'center' }}>
                    <Button type='submit' variant="contained" color="success">Update</Button>
                    <Button variant="outlined" sx={{ marginLeft: "10px" }} onClick={() => navigate("/FormDetailsMainPage/educationInfo")}>BACK</Button>
                    <Button variant="outlined" sx={{ marginLeft: "10px" }} onClick={() => navigate("/previewPage")}>Preview</Button>
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

export default Skill;
