import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './resumeSlices';

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

export default store;
