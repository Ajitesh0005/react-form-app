import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        personalInfo: { name: '', email: '', phone: '', address: '' },
        educationInfo: [
            { school: '', board: '', cgpa: '', year: '' },
            { school: '', board: '', cgpa: '', year: '' },
            { school: '', board: '', cgpa: '', year: '' },
            { school: '', board: '', cgpa: '', year: '' }
        ],
        workExperience: [{ company: '', title: '', duration: '' }],
        skills: { technicalSkills: '', certifications: '' },
        additionalInfo: { coverLetter: '', resume: '' }
    },
    reducers: {
        updatePersonalInfo(state, action) { state.personalInfo = action.payload },
        updateEducationInfo(state, action) { state.educationInfo = action.payload },
        updateWorkExperience(state, action) { state.workExperience = action.payload },
        updateSkills(state, action) { state.skills = action.payload },
        updateAdditionalInfo(state, action) { state.additionalInfo = action.payload }
    }
});

export const { updatePersonalInfo, updateEducationInfo, updateWorkExperience, updateSkills, updateAdditionalInfo } = formSlice.actions;
export default formSlice.reducer;
