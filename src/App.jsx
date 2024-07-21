import react, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfoForm from './features/personalInfo'
import EducationInfo from './features/educationInfo'
import WorkExperience from './features/WorkExperience'
import Skill from './features/skill'
import Navbar from './component/navbar'
import { Routes, Route } from 'react-router-dom';
import About from './component/navbarComponent/about'
import ResumeTemplatesHomePage from './templates/ResumeTemplate'
import MyResume from './component/navbarComponent/myResume'
import FormMainComponent from './features/FormDetailsMainPage'
import PreviewPage from "./features/previewPage"

function App() {

  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<ResumeTemplatesHomePage />} />
        <Route path="about" element={<About />} />
        <Route path="resumeTemplates" element={<ResumeTemplatesHomePage />}/>
        <Route path="MyResume" element={<MyResume />} />
        <Route path="FormDetailsMainPage"element={<FormMainComponent />}>
          <Route path="personalInfo" element={<PersonalInfoForm />} />
          <Route path="WorkExperience" element={<WorkExperience />} />
          <Route path="educationInfo" element={<EducationInfo />} />
          <Route path="skill" element={<Skill />} />
        </Route>
        <Route path='previewPage' element={<PreviewPage/>}/>
        
      </Routes>


    </div>


  )
}
export default App
