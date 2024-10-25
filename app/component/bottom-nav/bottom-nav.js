'use client'
import React, { useState } from "react";
import TopSearch from "../top-search/top-search";

function BottomNav(params) {
    const [showMenu, setShowmenu] = useState(false)
    return (
        <div className="bottom-mobile-nav">
            {showMenu ? (
                <div className="bottom-menu">
                    <ul className="list-unstyled p-3 d-flex w-100 gap-2">
                        <li className="flex-1">
                            <button className="w-100 border py-2 bg-transparent rounded-1 text-start opacity-75">
                                <a href='/update' className='d-flex align-items-center gap-2 p-2 rounded-5 fs-6'>
                                    <span className='icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="22" class=""><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                    </span>
                                    <span>Blog</span>
                                </a>
                            </button>
                        </li>
                        <li className="flex-1">
                            <button className="w-100 border py-2 bg-transparent rounded-1 text-start opacity-75">
                                <a href='/help' className='d-flex align-items-center gap-2 p-2 rounded-5 fs-6'>
                                    <span className='icon'>
                                        <svg height="22" class="inline-block " width="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="CircleQuestion"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0003 16.9983C12.5528 16.9983 13.0007 16.5506 13.0007 15.9983C13.0007 15.4461 12.5528 14.9983 12.0003 14.9983C11.4479 14.9983 11 15.4461 11 15.9983C11 16.5506 11.4479 16.9983 12.0003 16.9983ZM11 14H13C13 13.2016 13.1254 13.0553 13.9472 12.6444C15.3754 11.9303 16 11.2016 16 9.5C16 7.32063 14.2843 6 12 6C9.79086 6 8 7.79086 8 10H10C10 8.89543 10.8954 8 12 8C13.2772 8 14 8.55641 14 9.5C14 10.2984 13.8746 10.4447 13.0528 10.8556C11.6246 11.5697 11 12.2984 11 14Z"></path></g></svg>
                                    </span>
                                    <span>FAQ's</span>
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <TopSearch />
            )}


            <ul className="d-flex justify-content-between list-unstyled p-3 position-fixed bottom-0 w-100">
                <li className="grow flex-1">
                    <a className="d-flex flex-column justify-content-center align-items-center text-decoration-none" onClick={() => setShowmenu(!showMenu)}>
                        {!showMenu ? (
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="24"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </span>
                        ) : (
                            <span className="icon">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M137 363 c-12 -12 -7 -21 37 -64 l51 -49 -51 -49 c-44 -43 -49 -52 -37 -64 12 -12 21 -7 63 37 l49 51 50 -49 c42 -41 52 -47 65 -37 13 11 8 20 -37 62 l-52 49 52 49 c45 42 50 51 37 62 -13 10 -23 4 -65 -37 l-50 -49 -49 51 c-42 44 -51 49 -63 37z" /> </g> </svg>
                            </span>
                        )}
                        <span>Menu</span>
                    </a>
                </li>
                <li className="grow flex-1">
                    <a className="d-flex flex-column justify-content-center align-items-center text-decoration-none active">
                        <span className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" class="inline-block undefined" xmlns="http://www.w3.org/2000/svg"><g id="Compass"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9471 7.05269C17.2149 7.32052 17.3085 7.71669 17.1887 8.07602L15.0687 14.436C14.9692 14.7346 14.7348 14.9689 14.4362 15.0685L8.07623 17.1885C7.7169 17.3083 7.32073 17.2147 7.0529 16.9469C6.78507 16.6791 6.69154 16.2829 6.81132 15.9236L8.93132 9.56356C9.03086 9.26496 9.26517 9.03064 9.56378 8.93111L15.9238 6.81111C16.2831 6.69133 16.6793 6.78485 16.9471 7.05269ZM10.6706 10.6704L9.34115 14.6587L13.3294 13.3292L14.6589 9.34093L10.6706 10.6704Z"></path></g></svg>
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