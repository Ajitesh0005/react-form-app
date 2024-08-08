import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { EducationForm } from './components/EducationForm';
import { WorkExperienceForm } from './components/WorkExperienceForm';
import { SkillsForm } from './components/SkillsForm';
import { AdditionalInfoForm } from './components/AdditionalInfoForm';
import { ReviewForm } from './components/ReviewForm';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalInfoForm />} />
        <Route path="/education" element={<EducationForm />} />
        <Route path="/work-experience" element={<WorkExperienceForm />} />
        <Route path="/skills" element={<SkillsForm />} />
        <Route path="/additional-info" element={<AdditionalInfoForm />} />
        <Route path="/review" element={<ReviewForm />} />
      </Routes>
    </BrowserRouter>
  );
}

