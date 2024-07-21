import React, { useState, useEffect } from 'react';
import { Box, List, Button } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function FormMainComponent() {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('');
    const [isPersonalInfoUpdated, setIsPersonalInfoUpdated] = useState(false);
    const [isWorkExperienceUpdated, setIsWorkExperienceUpdated] = useState(false);
    const [isSkillsUpdated, setIsSkillsUpdated] = useState(false);

    useEffect(() => {
        const path = location.pathname.split('/').pop();
        setActiveButton(path);
    }, [location]);

    useEffect(() => {
        if (window.performance) {
            if (performance.navigation.type === 1) {
                window.location.href = "/";
            }
        }
    }, []);

    const getButtonStyle = (text) => ({
        color: activeButton === text ? 'blue' : 'black',
        fontFamily: "sans-serif",
        fontWeight: "bold",
        pointerEvents: 
            (text === 'WorkExperience' && !isPersonalInfoUpdated) || 
            (text === 'educationInfo' && !isWorkExperienceUpdated) || 
            (text === 'skill' && !isSkillsUpdated)
            ? 'none' 
            : 'auto',
        opacity: 
            (text === 'WorkExperience' && !isPersonalInfoUpdated) || 
            (text === 'educationInfo' && !isWorkExperienceUpdated) || 
            (text === 'skill' && !isSkillsUpdated)
            ? 0.5 
            : 1
    });

    return (
        <div>
            <Box sx={{ marginTop: "80px", width: "200px", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '10px', background: 'linear-gradient(to right, #ffffff, #f0f0f0)' }}>
                <List>
                    <Button
                        component={Link}
                        to="personalInfo"
                        sx={getButtonStyle('personalInfo')}
                    >
                        <PersonIcon sx={{ marginRight: '8px' }} />
                        Personal Info
                    </Button>
                    <br />
                    <Button
                        component={Link}
                        to="WorkExperience"
                        sx={getButtonStyle('WorkExperience')}
                    >
                        <WorkIcon sx={{ marginRight: '8px' }} />
                        Work Experience
                    </Button>
                    <br />
                    <Button
                        component={Link}
                        to="educationInfo"
                        sx={getButtonStyle('educationInfo')}
                    >
                        <SchoolIcon sx={{ marginRight: '8px' }} />
                        Education Info
                    </Button>
                    <br />
                    <Button
                        component={Link}
                        to="skill"
                        sx={getButtonStyle('skill')}
                    >
                        <VpnKeyIcon sx={{ marginRight: '8px' }} />
                        Skills
                    </Button>
                </List>
            </Box>
            <Outlet context={{ setIsPersonalInfoUpdated, setIsWorkExperienceUpdated, setIsSkillsUpdated }} />
        </div>
    );
}

export default FormMainComponent;
