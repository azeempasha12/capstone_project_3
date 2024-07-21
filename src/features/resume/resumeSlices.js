import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    objective: '',
  },
  education: {
    educationType: '',
    university: '',
    degree: '',
    startYear: '',
    endYear: ''
  },
  experience: {
    jobTitle: '',
    organisation: '',
    startYear: '',
    endYear: ''
  },
  skills: [],
  selectedTemplate: '',
  savedTemplates: []
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setSkill: (state, action) => {
      state.skills = action.payload;
    },
    setTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },
    addTemplate: (state, action) => {
      state.savedTemplates.push(action.payload);
    },
    deleteTemplate: (state, action) => {
      state.savedTemplates = state.savedTemplates.filter(template => template.id !== action.payload);
    }
  },
});

export const { setPersonalInfo, setEducation, setExperience, setSkill, setTemplate, addTemplate, deleteTemplate } = resumeSlice.actions;

export default resumeSlice.reducer;
