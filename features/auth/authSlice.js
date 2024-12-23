import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../utils/api';


const getLocalStorageItem = (key) => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem(key);
        try {
            return JSON.parse(value); // Parse JSON strings for complex objects or numbers
        } catch {
            return value; // Return the string directly if parsing fails
        }
    }
    return null;
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
                user_id: response.user_id,     // Store user_id
            };
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user_id: getLocalStorageItem('user_id') || null,
        user: getLocalStorageItem('user') || null,
        token: getLocalStorageItem('token') || null,
        isAuthenticated: !!getLocalStorageItem('token'),
        status: 'idle',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user_id = null;
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('user_id');
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        },
        socialLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(action.payload.user));
                localStorage.setItem('token', action.payload.token);
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
                state.user_id = action.payload.user_id; // Set user_id
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;

                if (typeof window !== 'undefined') {
                    localStorage.setItem('user_id', JSON.stringify(action.payload.user_id)); // Save as string
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

export const { logout, socialLogin } = authSlice.actions;
export default authSlice.reducer;

