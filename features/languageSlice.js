import { createSlice } from "@reduxjs/toolkit";

// Utility function to get a localStorage item safely
const getLocalStorageItem = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null; // Or set a default value if needed
};

// Language options array with associated countries
const languageOptions = [
  { label: "English", code: "en", country: "US" },
  { label: "French", code: "fr", country: "FR" },
  { label: "Amharic", code: "am", country: "ET" },
  { label: "Afaan Oromo", code: "or", country: "ET" },
  { label: "Somali", code: "so", country: "SO" },
  { label: "Swahili", code: "sw", country: "KE" },
  { label: "Indonesian", code: "id", country: "ID" },
  { label: "Arabic", code: "ar", country: "SA" },
  { label: "Spanish", code: "es", country: "ES" },
];

// Helper function to find the default language based on the country
const getDefaultLanguage = (countryCode) => {
  const match = languageOptions.find(
    (option) => option.country === countryCode
  );
  return match ? match.code : "en"; // Default to English if no match
};

const initialState = {
  selectedLanguage: getLocalStorageItem("selectedLanguage") || "en", // Default to English
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    // Action to manually set the language
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedLanguage", action.payload);
      }
    },

    // Action to initialize language based on the user's country
    initializeLanguage: (state, action) => {
      const { countryCode } = action.payload;
      const defaultLanguage = getDefaultLanguage(countryCode);
      state.selectedLanguage = defaultLanguage;
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedLanguage", defaultLanguage);
      }
    },
  },
});

export const { setLanguage, initializeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
