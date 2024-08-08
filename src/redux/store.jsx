import { configureStore } from "@reduxjs/toolkit";
import formReducer from './formSlicer';

export const store = configureStore({
    reducer: {
        form: formReducer
    }
})