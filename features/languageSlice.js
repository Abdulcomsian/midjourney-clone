// src/store/languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Set the default language (en) in case there's no stored language
const initialState = {
    selectedLanguage: localStorage.getItem("selectedLanguage") || "en",
};

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.selectedLanguage = action.payload;
            localStorage.setItem("selectedLanguage", action.payload);
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
