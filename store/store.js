import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import apiReducer from '../features/apiSlice';
import modalReducer from '../features/modalSlice';
import languageReducer from '../features/languageSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        api: apiReducer,
        modal: modalReducer,
        language: languageReducer,
    },
});

export default store;
