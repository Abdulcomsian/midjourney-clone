import React from 'react';

function Sidebar({showModal}) {
    return(
        <section className='sidebar pt-3 flex-column'>
            <div className='top-nav grow d-flex flex-column gap-3'>
                <div className='logo d-flex align-items-center pl-1'>
                    <p className='desktop-view'>Midjourney</p>
                    <p className='mobile-view'>MJ</p>
                </div>
                <ul className='list-unstyled d-flex flex-column gap-3'>
                    <li>
                        <a className='d-flex align-items-center gap-2 p-2 rounded-5 active'>
                            <span className='icon'>
                                <svg height="22" class="inline-block relative" width="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="Compass"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9471 7.05269C17.2149 7.32052 17.3085 7.71669 17.1887 8.07602L15.0687 14.436C14.9692 14.7346 14.7348 14.9689 14.4362 15.0685L8.07623 17.1885C7.7169 17.3083 7.32073 17.2147 7.0529 16.9469C6.78507 16.6791 6.69154 16.2829 6.81132 15.9236L8.93132 9.56356C9.03086 9.26496 9.26517 9.03064 9.56378 8.93111L15.9238 6.81111C16.2831 6.69133 16.6793 6.78485 16.9471 7.05269ZM10.6706 10.6704L9.34115 14.6587L13.3294 13.3292L14.6589 9.34093L10.6706 10.6704Z"></path></g></svg>
                            </span>
                            <span className='link-name'>Explore</span>
                        </a>
                    </li>
                    <li>
                        <a className='d-flex align-items-center gap-2 p-2 rounded-5'>
                            <span className='icon'>
                                <svg height="22" class="inline-block relative" width="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="Avatar"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z"></path></g></svg>
                            </span>
                            <span className='link-name'>Subscribe</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='bottom-nav grow d-flex flex-column gap-3 justify-content-end'>
            <ul className='list-unstyled d-flex flex-column gap-3'>
                    <li>
                        <a className='d-flex align-items-center gap-2 p-2 rounded-5'>
                            <span className='icon'>
                                <svg height="24" class="inline-block " width="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="CircleQuestion"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0003 16.9983C12.5528 16.9983 13.0007 16.5506 13.0007 15.9983C13.0007 15.4461 12.5528 14.9983 12.0003 14.9983C11.4479 14.9983 11 15.4461 11 15.9983C11 16.5506 11.4479 16.9983 12.0003 16.9983ZM11 14H13C13 13.2016 13.1254 13.0553 13.9472 12.6444C15.3754 11.9303 16 11.2016 16 9.5C16 7.32063 14.2843 6 12 6C9.79086 6 8 7.79086 8 10H10C10 8.89543 10.8954 8 12 8C13.2772 8 14 8.55641 14 9.5C14 10.2984 13.8746 10.4447 13.0528 10.8556C11.6246 11.5697 11 12.2984 11 14Z"></path></g></svg>
                            </span>
                            <span className='link-name'>Helps</span>
                        </a>
                    </li>
                    <li>
                        <a className='d-flex align-items-center gap-2 p-2 rounded-5'>
                            <span className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="24" class=""><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            </span>
                            <span className='link-name'>Update</span>
                        </a>
                    </li>
                    <li>
                        <a className='d-flex align-items-center gap-2 p-2 rounded-5'>
                            <span className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </span>
                            <span className='link-name'>Light Mode</span>
                        </a>
                    </li>
                    <li>
                        <a className='d-flex align-items-center gap-2 p-2 rounded-5 un-active' onClick={showModal}>
                            <span className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="22" width="22" class="aspect-square w-full shrink-0 rounded-full h-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </span>
                            <span className='link-name d-block pe-4 text-center w-100'>Login</span>
                        </a>
                    </li>
                    <li>
                        <a className='d-flex align-items-center gap-2 p-2 rounded-5 active ' onClick={showModal}>
                            <span className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="22"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            </span>
                            <span className='link-name d-block pe-4 text-center w-100'>Sign Up</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Sidebar;