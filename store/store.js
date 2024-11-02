import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import apiReducer from '../features/apiSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        api: apiReducer,
    },
});

export default store;
