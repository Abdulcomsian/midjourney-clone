import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage for web
import authReducer from '../features/auth/authSlice';
import apiReducer from '../features/apiSlice';
import modalReducer from '../features/modalSlice';
import languageReducer from '../features/languageSlice';

// Configuration for persisting reducers
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'language'], // List of reducers you want to persist
};

// Apply persistence to reducers
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        auth: authReducer,
        api: apiReducer,
        modal: modalReducer,
        language: languageReducer,
    })
);

// Configure store with persisted reducers
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required when using redux-persist
        }),
});

// Create a persistor instance
const persistor = persistStore(store);

// Add a subscriber to check persisted state
store.subscribe(() => {
    console.log('Persisted state:', store.getState());
});

export { store, persistor };
