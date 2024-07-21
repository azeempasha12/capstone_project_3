
import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Box, Divider, useMediaQuery, createTheme, ThemeProvider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTemplate } from '../features/resume/resumeSlices';

const Template1 = ({ previewMode = false, data = {} }) => {
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    if (!previewMode) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!previewMode) setHovered(false);
  };

  const handleUseClick = () => {
    dispatch(setTemplate('template1'));
    navigate('/FormDetailsMainPage/personalInfo');
  };

  const displayData = previewMode ? data : {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      phone: "85462456",
      email: "jd@gmail.com",
      address: "12 block Anand Vihar, Rampur, Uttar Pradesh",
      objective:'Dedicated professional seeking to leverage skills in IT to contribute to amazon success.'
    },
    workExperience: {
      jobTitle: "Software Engineer",
      organisationName: "Senior Software Engineer at ABC Corp",
      startYear: "June 2020 - Present",
      endYear: "",
      description: "Description of the role and responsibilities."
    },
    education: {
      degree: "Bachelor of Science in Computer Science",
      university: "University of Somewhere, 2014 - 2018",
      type: "Description of the degree."
    },
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ background: 'pink' }}>
        <Paper
          elevation={3}
          sx={{
            padding: '20px',
            marginTop: '20px',
            background: hovered ? 'darkgray' : 'antiquewhite',
            position: 'relative',
            transition: 'background 0.3s',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        > 
        <Grid sx={{}}>   
          <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'monospace', fontStyle: 'unset' }}>
            {displayData.personalInfo.firstName} {displayData.personalInfo.lastName}
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" sx={{fontStyle:'oblique', color: 'Highlight', fontWeight:'bold'}}>
            {displayData.workExperience.jobTitle}
          </Typography>
          <Divider variant="middle" sx={{ margin: '20px 0', background: 'red', height: '5px' }} />
          </Grid>

          <Grid container spacing={isSmallScreen ? 1 : 3}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{fontFamily:'serif', color: 'green', fontWeight:'bold'}} gutterBottom>Contact</Typography>
                <Typography variant="body1" sx={{color:'black', fontSize:''}} gutterBottom>  {displayData.personalInfo.phone}</Typography>
                {!isSmallScreen && (
                  <Typography variant="body1" gutterBottom sx={{ whiteSpace: 'normal', fontSize: '0.8rem' }}>
                  {displayData.personalInfo.email}
                  </Typography>
                )}
                <Typography variant="body1" gutterBottom>{displayData.personalInfo.address}</Typography>
                <Typography variant='body1' sx={{fontSize:'12px', fontStyle:'italic'}} gutterBottom>{displayData.personalInfo.objective}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Box className="Experience">
                <Typography variant="h5" sx={{ fontFamily: '-moz-initial', fontSize:'26px', color: 'blue' }} gutterBottom>Experience</Typography>
                <Box mb={2}>
                  <Typography variant="body1" fontWeight="bold" sx={{color:'red'}}>
                    {displayData.workExperience.organisationName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {displayData.workExperience.startYear} {displayData.workExperience.endYear}
                  </Typography>
                  <Typography variant="body1">Description of the role and responsibilities.</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <Typography variant="h5"  sx={{ fontFamily: '-moz-initial', fontSize:'26px', color: 'blue'}} gutterBottom>Education</Typography>
                <Box mb={2}>
                  <Typography variant="body1" fontWeight="bold" color='red'>{displayData.education.degree}</Typography>
                  <Typography variant="body2" color="textSecondary">{displayData.education.university}</Typography>
                  <Typography variant="body1">{displayData.education.type}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <Typography variant="h5"  sx={{ fontFamily: '-moz-initial', fontSize:'26px', color: 'blue' }} gutterBottom>Key Skills</Typography>
                {/* Uncomment the following lines to display skills */}
                <Grid container spacing={1}>
                  {displayData.skills.map((skill, index) => (
                    <Grid item key={index}>
                      <Paper elevation={1} sx={{ padding: '8px 16px' }}>
                        <Typography variant="body2">{skill}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>

          {hovered && !previewMode && (
            <Button
              variant="contained"
              color="primary"
              sx={{ position: 'absolute', top: '47%', right: '30%' }}
              onClick={handleUseClick}
            >
              Use Template
            </Button>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Template1;







