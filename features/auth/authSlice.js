import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../utils/api';

// const initialState = {
//     user: localStorage.getItem('user') || null,
//     token: localStorage.getItem('token') || null,
//     isAuthenticated: !!localStorage.getItem('token'),
//     status: 'idle',
//     error: null,
// };
const getLocalStorageItem = (key) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
    return null; // or some default value
};

// Thunk for handling login
export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await loginUser(email, password);
            return {
                token: response.access_token,  // Store token
                user: response.username,       // Store user info (assuming "username")
            };
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: getLocalStorageItem('user') || null,
        token: getLocalStorageItem('token') || null,
        isAuthenticated: !!getLocalStorageItem('token'),
        status: 'idle',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;  // Clear token on logout
            state.isAuthenticated = false;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;

                if (typeof window !== 'undefined') {
                    localStorage.setItem('user', action.payload.user);
                    localStorage.setItem('token', action.payload.token);
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
