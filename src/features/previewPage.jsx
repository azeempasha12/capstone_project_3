import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import html2pdf from 'html2pdf.js';
import Template1 from '../templates/template1';
import Template2 from '../templates/template2';
import Template3 from '../templates/template3';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addTemplate } from '../../src/features/resume/resumeSlices';

const PreviewPage = () => {
  const selectedTemplate = useSelector(state => state.resume.selectedTemplate);
  const personalInfo = useSelector(state => state.resume.personalInfo);
  const education = useSelector(state => state.resume.education);
  const workExperience = useSelector(state => state.resume.experience);
  const skills = useSelector(state => state.resume.skills);
  console.log(skills)

  const data = {
    personalInfo,
    education,
    workExperience,
    skills
  };

  useEffect(() => {
    if (window.performance) {
        if (performance.navigation.type === 1) {
            window.location.href = "/";
        }
    }
  }, []);

  const templateRef = useRef(null);
  const inputRef = useRef(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createPDF = () => {
    const element = templateRef.current;
    const fileName = inputRef.current.value || 'resume';

    const options = {
      filename: `${fileName}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
      .from(element)
      .set(options)
      .save()
      .then(() => {
        setMessage('File has been saved successfully.');

        const templateId = new Date().getTime();
        dispatch(addTemplate({ id: templateId, name: fileName }));
      })
      .catch(err => {
        setMessage('Error saving file.');
        console.error(err);
      });
  };

  return (
    <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div className="template-container" style={{ flex: '1' }}>
      <h1 style={{color: "red", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", fontFamily: "Arial, sans-serif", fontSize:'38px', textDecoration:'underline' ,textDecorationColor:'AppWorkspace'}}>Preview</h1>

        <div ref={templateRef}>
          {selectedTemplate === 'template1' && <Template1 data={data} previewMode={true} />}
          {selectedTemplate === 'template2' && <Template2 data={data} previewMode={true} />}
          {selectedTemplate === 'template3' && <Template3 data={data} previewMode={true} />}
        </div>
      </div>
      
      <div className="file-name-container" style={{ flex: '1', marginLeft: '20px', alignContent:'center', marginLeft: "80px" }}>
        <label htmlFor="fileName" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Create file name</label><br />
        <input style={{ height: "30px", width: "150px", marginTop: "15px" }} id='fileName' ref={inputRef} type="text" placeholder="Enter file name" required />
        <div style={{ marginTop: "20px" }}>
          <Button variant='outlined' onClick={() => navigate('/FormDetailsMainPage/skill')}>Back</Button>
          <Button variant='contained' type='submit' sx={{ marginLeft: "10px" }} onClick={createPDF}>Save</Button>
        </div>
        {message && <p>{message}</p>}
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .file-name-container {
              flex: 1 1 100%;
              max-width: 100%;
              margin-left: 0;
              margin-top: 20px;
              text-align: center;
              
            }
            .template-container {
              flex: 1 1 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PreviewPage;
