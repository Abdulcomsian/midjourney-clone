// features/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showAuthModal: false,
        showRegisterModal: false,
        showSubscriptionModal: false,
    },
    reducers: {
        openAuthModal: (state) => {
            state.showAuthModal = true;
        },
        closeAuthModal: (state) => {
            state.showAuthModal = false;
        },
        openRegisterModal: (state) => {
            state.showRegisterModal = true;
        },
        closeRegisterModal: (state) => {
            state.showRegisterModal = false;
        },
        openSubscriptionModal: (state) => {
            state.showSubscriptionModal = true;
        },
        closeSubscriptionModal: (state) => {
            state.showSubscriptionModal = false;
        },
    },
});

export const { openAuthModal, closeAuthModal, openRegisterModal, closeRegisterModal, openSubscriptionModal,  closeSubscriptionModal} = modalSlice.actions;
export default modalSlice.reducer;
