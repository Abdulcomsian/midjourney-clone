// features/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showAuthModal: false,
        showRegisterModal: false
    },
    reducers: {
        openAuthModal: (state) => {
            console.log("State", state);

            state.showAuthModal = true;
        },
        closeAuthModal: (state) => {
            state.showAuthModal = false;
        },
        openRegisterModal: (state) => {
            console.log("State", state);

            state.showRegisterModal = true;
        },
        closeRegisterModal: (state) => {
            state.showRegisterModal = false;
        },
    },
});

export const { openAuthModal, closeAuthModal, openRegisterModal, closeRegisterModal } = modalSlice.actions;
export default modalSlice.reducer;
