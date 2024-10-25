// store/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: true, // Default to dark mode
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.darkMode = !state.darkMode;
        },
        setTheme(state, action) {
            state.darkMode = action.payload === 'dark';
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
