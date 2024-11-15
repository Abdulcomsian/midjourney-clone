'use client';
import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../features/languageSlice";
import translations from "../../../i18";

function TopSearch({ showCreativeModal }) {
    const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
    const dispatch = useDispatch();

    // Define mappings for country codes and language codes
    const languageToCountryMapping = {
        en: "GB",
        fr: "FR",
        sw: "KE",
        am: "AM",
        ar: "SA",
        es: "ES",
        id: "ID",
        or: "OR",
        so: "SO"
    };

    const countryToLanguageMapping = {
        GB: "en",
        FR: "fr",
        KE: "sw",
        AM: "am",
        SA: "ar",
        ES: "es",
        ID: "id",
        OR: "or",
        SO: "so"
    };

    // Set initial selected country based on selectedLanguage
    const [selected, setSelected] = useState(languageToCountryMapping[selectedLanguage]);

    useEffect(() => {
        // Update Redux state when the selected country changes
        if (selected in countryToLanguageMapping) {
            dispatch(setLanguage(countryToLanguageMapping[selected]));
        }
    }, [selected, dispatch]);

    useEffect(() => {
        // Update the flag display when selectedLanguage changes
        if (selectedLanguage in languageToCountryMapping) {
            setSelected(languageToCountryMapping[selectedLanguage]);
        }
    }, [selectedLanguage]);

    const t = translations[selectedLanguage];

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
                                <ReactFlagsSelect
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    countries={["GB", "FR", "AM", "ID", "KE", "SA", "OR", "ES", "SO"]}
                                    showSelectedLabel={false}
                                    showSecondarySelectedLabel={false}
                                    showOptionLabel={true}
                                    showSecondaryOptionLabel={false}
                                    fullWidth={false}
                                    className="bg-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopSearch;
