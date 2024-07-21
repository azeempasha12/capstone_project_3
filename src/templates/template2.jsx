// import React from 'react';
// import { Container, Grid, Paper, Typography, Box, Divider, useMediaQuery, createTheme, ThemeProvider, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';

// const Template2 = ({ previewMode = false, data = {}  }) => {
//   const personalInfo = useSelector((state) => state.resume.personalInfo);
//   const education = useSelector((state) => state.resume.education);
//   const workExperience = useSelector((state) => state.resume.experience);
//   const skill = useSelector((state) => state.resume.skills);

//   const theme = createTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const navigate = useNavigate();
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const handleClick = () => {

//     navigate("/FormDetailsMainPage");
//   };

//   const displayData = previewMode ? data : {
//     personalInfo: {
//       firstName: "John",
//       lastName: "Doe",
//       phone: "85462459756",
//       email: "tm784760@gmail.com",
//       address: "12 block Anand Vihar, Rampur, Uttar Pradesh"
//     },
//     workExperience: {
//       jobTitle: "Software Engineer",
//       organisationName: "Senior Software Engineer at ABC Corp",
//       startYear: "June 2020 - Present",
//       endYear: "",
//       description: "Description of the role and responsibilities."
//     },
//     education: {
//       degree: "Bachelor of Science in Computer Science",
//       university: "University of Somewhere, 2014 - 2018",
//       type: "Description of the degree."
//     },
//     skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ position: 'relative', overflow: 'hidden' }}>
//         <Container
//           maxWidth="md"
//           sx={{ 
//             background: isHovered ? 'rgba(1, 5, 50,0.5)' : "darkgray", 
//             transition: 'background 0.3s ease',
//             position: 'relative',
//             zIndex: 2,
//           }}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px', background: isHovered ? "darkgray" : "rgb(198, 222, 211)" }}>
//             <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: "initial" }}>
//               {displayData.personalInfo.firstName || "John Doe"} {displayData.personalInfo.lastName}
//             </Typography>
//             {isHovered && !previewMode && (
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '53%',
//                   transform: 'translate(-50%, -50%)',
//                   zIndex: 3,
//                 }}
//               >
//                 <Button
//                   variant="contained"
//                   sx={{
//                     color: "white",
//                   }}
//                   onClick={handleClick}
//                 >
//                   Use template
//                 </Button>
//               </Box>
//             )}
//             <Typography variant="h6" align="center" color="textSecondary">
//               {displayData.workExperience.jobTitle || "Software Engineer"}
//             </Typography>
//             <Divider variant="middle" sx={{ margin: '20px 0', backgroundColor: "red", height: "5px" }} />
//             <Grid container spacing={isSmallScreen ? 1 : 3}>
//               <Grid item xs={12} sm={4}>
//                 <Box sx={{ marginBottom: '20px' }}>
//                   <Typography variant="h6" gutterBottom>
//                     Contact
//                   </Typography>
//                   <Typography variant="body1" gutterBottom>
//                     {displayData.personalInfo.phone || "7845682525"}
//                   </Typography>
//                   {!isSmallScreen && (
//                     <>
//                       <Typography variant="body1" gutterBottom sx={{ whiteSpace: "normal", fontSize: "0.8rem" }}>
//                         {displayData.personalInfo.email || "Email: JohnDone@gmail.com"}
//                       </Typography>
//                     </>
//                   )}
//                   <Typography variant="body1" gutterBottom>
//                     {displayData.personalInfo.address || "Address: 12 block Anand Vihar, Rampur, Uttar Pradesh"}
//                   </Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <Box className="Experience">
//                   <Typography variant="h5" gutterBottom>
//                     Experience
//                   </Typography>
//                   <Box mb={2}>
//                     <Typography variant="body1" fontWeight="bold">
//                       {displayData.workExperience.organisationName || "Senior Software Engineer at ABC Corp"}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {displayData.workExperience.startYear || "June 2020 - Present"} {displayData.workExperience.endYear}
//                     </Typography>
//                     <Typography variant="body1">
//                       Description of the role and responsibilities.
//                     </Typography>
//                   </Box>
//                   <Box mb={2}>
//                     <Typography variant="body1" fontWeight="bold">
//                       Software Engineer at XYZ Inc
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       January 2018 - May 2020
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//               <Grid item xs={12}>
//                 <Box>
//                   <Typography variant="h5" gutterBottom>
//                     Education
//                   </Typography>
//                   <Box mb={2}>
//                     <Typography variant="body1" fontWeight="bold">
//                       {displayData.education.degree || "Bachelor of Science in Computer Science"}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {displayData.education.university || "University of Somewhere, 2014 - 2018"}
//                     </Typography>
//                     <Typography variant="body1">
//                       {displayData.education.type || "Description of the degree."}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//               <Grid item xs={12}>
//                 <Box>
//                   <Typography variant="h5" gutterBottom>
//                     Key Skills
//                   </Typography>
//                   <Grid container spacing={1}>
//                     <Grid item>
//                       <Paper elevation={1} sx={{ padding: '8px 16px' }}>
//                         <Typography variant="body2">Skill 1</Typography>
//                       </Paper>
//                     </Grid>
//                     <Grid item>
//                       <Paper elevation={1} sx={{ padding: '8px 16px' }}>
//                         <Typography variant="body2">Skill 2</Typography>
//                       </Paper>
//                     </Grid>
//                     <Grid item>
//                       <Paper elevation={1} sx={{ padding: '8px 16px' }}>
//                         <Typography variant="body2">Skill 3</Typography>
//                       </Paper>
//                     </Grid>
//                     <Grid item>
//                       <Paper elevation={1} sx={{ padding: '8px 16px' }}>
//                         <Typography variant="body2">Skill 4</Typography>
//                       </Paper>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default Template2;























import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Box, Divider, useMediaQuery, createTheme, ThemeProvider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTemplate } from '../features/resume/resumeSlices';

const Template2 = ({ previewMode = false, data = {} }) => {
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
    dispatch(setTemplate('template2'));
    navigate('/FormDetailsMainPage/personalInfo');
  };

  const displayData = previewMode ? data : {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      phone: "8546245",
      email: "jd78@gmail.com",
      address: "12 block Anand Vihar, Rampur, Uttar Pradesh",
      objective:'Dedicated professional seeking to leverage skills in IT to contribute to amazon'
    },
    workExperience: {
      jobTitle: "Interior designer",
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
      <Container maxWidth="md" sx={{ background: 'orange' }}>
        <Paper
          elevation={3}
          sx={{
            padding: '20px',
            marginTop: '20px',
            background: hovered ? 'darkgray' : 'rgb(209, 202, 238)',
            position: 'relative',
            transition: 'background 0.3s',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'cursive', fontStyle: 'unset' }}>
            {displayData.personalInfo.firstName} {displayData.personalInfo.lastName}
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" fontWeight='bold'>
            {displayData.workExperience.jobTitle}
          </Typography>
          <Divider variant="middle" sx={{ margin: '20px 0', background: 'orange', height: '5px' }} />

          <Grid container spacing={isSmallScreen ? 1 : 3}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" gutterBottom>Contact</Typography>
                <Typography variant="body1" gutterBottom>{displayData.personalInfo.phone}</Typography>
                {!isSmallScreen && (
                  <Typography variant="body1" gutterBottom sx={{ whiteSpace: 'normal', fontSize: '0.8rem' }}>
                    {displayData.personalInfo.email}
                  </Typography>
                )}
                <Typography variant="body1" gutterBottom>{displayData.personalInfo.address}</Typography>
                <Typography variant='body1' sx={{fontSize:'12px', fontFamily:'cursive'}} gutterBottom>{displayData.personalInfo.objective}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Box className="Experience">
                <Typography variant="h5" sx={{ fontFamily: 'cursive', color: 'dark blue' }} gutterBottom>Experience</Typography>
                <Box mb={2}>
                  <Typography variant="body1" fontWeight="bold">
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
                <Typography variant="h5" gutterBottom fontFamily='cursive'>Education</Typography>
                <Box mb={2}>
                  <Typography variant="body1" fontWeight="bold">{displayData.education.degree}</Typography>
                  <Typography variant="body2" color="textSecondary">{displayData.education.university}</Typography>
                  <Typography variant="body1">{displayData.education.type}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <Typography variant="h5" gutterBottom fontFamily='cursive'>Key Skills</Typography>
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

export default Template2;







