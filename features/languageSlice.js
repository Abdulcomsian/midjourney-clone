import { createSlice } from "@reduxjs/toolkit";

// Utility function to get a localStorage item safely
const getLocalStorageItem = (key) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
    return null; // Or set a default value if needed
};

const initialState = {
    selectedLanguage: getLocalStorageItem("selectedLanguage") || "en",
};

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.selectedLanguage = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem("selectedLanguage", action.payload);
            }
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
