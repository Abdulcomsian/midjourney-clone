import React from "react";
import TopSearch from "../top-search/top-search";

function BottomNav(params) {
    return(
        <div className="bottom-mobile-nav">
            <TopSearch/>
            <ul className="d-flex justify-content-between list-unstyled p-3 position-fixed bottom-0 w-100">
                <li className="grow flex-1">
                    <a className="d-flex flex-column justify-content-center align-items-center text-decoration-none">
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="24"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </span>
                        <span>Menu</span>
                    </a>
                </li>
                <li className="grow flex-1">
                    <a className="d-flex flex-column justify-content-center align-items-center text-decoration-none active">
                        <span className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" className="inline-block undefined" xmlns="http://www.w3.org/2000/svg"><g id="Compass"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9471 7.05269C17.2149 7.32052 17.3085 7.71669 17.1887 8.07602L15.0687 14.436C14.9692 14.7346 14.7348 14.9689 14.4362 15.0685L8.07623 17.1885C7.7169 17.3083 7.32073 17.2147 7.0529 16.9469C6.78507 16.6791 6.69154 16.2829 6.81132 15.9236L8.93132 9.56356C9.03086 9.26496 9.26517 9.03064 9.56378 8.93111L15.9238 6.81111C16.2831 6.69133 16.6793 6.78485 16.9471 7.05269ZM10.6706 10.6704L9.34115 14.6587L13.3294 13.3292L14.6589 9.34093L10.6706 10.6704Z"></path></g></svg>
                        </span>
                        <span>Explore</span>
                    </a>
                </li>
                <li className="grow flex-1">
                    <a className="d-flex flex-column justify-content-center align-items-center text-decoration-none">
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                        <span>Log in or Sign up</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default BottomNav;