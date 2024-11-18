'use client';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../features/languageSlice";
import translations from "../../../i18";
import eventEmitter from "../../../utils/eventEmitter";
function TopSearch({ showCreativeModal }) {
    // const [darkThemeMode, setDarkThemeMode] = useState(false);
    const [darkThemeMode, setDarkThemeMode] = useState(localStorage.getItem('theme') === 'dark');
    // Function to handle theme change detection


    // Read theme from localStorage on component mount and add a listener for changes


    const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
    const dispatch = useDispatch();

    const languageOptions = [
        { label: "English", code: "en" },
        { label: "French", code: "fr" },
        { label: "Amharic", code: "am" },
        { label: "Afaan Oromo", code: "or" },
        { label: "Somali", code: "so" },
        { label: "Swahili", code: "sw" },
        { label: "Indonesian", code: "id" },
        { label: "Arabic", code: "ar" },
        { label: "Spanish", code: "es" }
    ];

    const [selected, setSelected] = useState(selectedLanguage);

    useEffect(() => {
        // Update Redux state when the selected language changes
        dispatch(setLanguage(selected));
    }, [selected, dispatch]);

    useEffect(() => {
        // Update the selected value if it changes in Redux
        setSelected(selectedLanguage);
    }, [selectedLanguage]);

    const t = translations[selectedLanguage];

    // Determine text color based on theme mode
    useEffect(() => {
        // Listen for theme changes
        const handleThemeChange = (newTheme) => {
            setDarkThemeMode(newTheme === 'dark');
        };

        eventEmitter.subscribe('themeChange', handleThemeChange);

        // Cleanup listener on unmount
        return () => {
            eventEmitter.unsubscribe('themeChange', handleThemeChange);
        };
    }, []);

    const selectTextColor = darkThemeMode ? 'text-white' : 'text-black';

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex gap-2 align-items-center">
                            <div className="search-bar py-3 px-4 w-100" onClick={showCreativeModal}>
                                <form className="mb-0">
                                    <div className="upload-file d-flex justify-content-between align-items-center position-relative gap-3">
                                        <input type="file" />
                                        <span className="icon opacity-25">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </span>
                                        <input className="w-100 border-0 opacity-50" placeholder={t?.searchPlaceholder || "Search..."} />
                                        <span className="icon opacity-25">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="rotate-90" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div className="multi-language-dropdown">
                                <select
                                    value={selected}
                                    onChange={(e) => setSelected(e.target.value)}
                                    className={`form-select bg-transparent p-2 border rounded shadow-sm ${selectTextColor}`}
                                    style={{ minWidth: "150px", cursor: "pointer" }}
                                >
                                    {languageOptions.map((option) => (
                                        <option key={option.code} value={option.code} style={{
                                            backgroundColor: darkThemeMode ? 'black' : 'white',
                                            color: darkThemeMode ? 'white' : 'black',
                                        }}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopSearch;
