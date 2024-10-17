import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function Sidebar({showModal,darkModeHandle}) {
    const popover = (
        <Popover id="popover-basic" rootClose="false">
          <Popover.Body className='p-1'>
            <ul className='list-unstyled'>
                <li>
                    <a href='/manage-profile' className='d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5'>
                        <span className='icon'>
                            <svg height="15" className="inline-block text-light-600 dark:text-dark-400 [.active-button_&amp;]:text-light-900 md:[.group-button:hover_&amp;]:text-light-900 dark:[.active-button_&amp;]:text-dark-100 dark:md:[.group-button:hover_&amp;]:text-light-100" width="15" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="Settings"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6562 20.897L20.8733 18.6798L20.0925 15.843L20.4327 15.0305L23 13.5818V10.4464L20.44 8.99173L20.1055 8.18067L20.8961 5.34235L18.6774 3.12683L15.8403 3.90748L15.0296 3.56758L13.5808 1H10.4454L8.99072 3.56004L8.17985 3.89446L5.34198 3.10281L3.1267 5.31809L3.90748 8.15567L3.56758 8.96634L1 10.4151V13.5496L3.55774 15.0076L3.89252 15.8193L3.10197 18.6572L5.31809 20.8733L8.15567 20.0925L8.96644 20.4325L10.4153 22.999H13.5498L15.0067 20.4412L15.8183 20.1065L18.6562 20.897ZM18.8527 13.6256L17.9809 15.7078L18.6362 18.0886L18.0678 18.657L15.692 17.9951L13.609 18.8542L12.3873 20.999H11.5829L10.3714 18.8529L8.29155 17.9808L5.90947 18.6362L5.34203 18.0688L6.00385 15.693L5.14482 13.6101L3 12.3876V11.583L5.1471 10.3715L6.0192 8.29155L5.36375 5.90947L5.93001 5.34321L8.30576 6.00595L10.3895 5.14655L11.6093 3H12.4129L13.6245 5.1471L15.7044 6.0192L18.087 5.36362L18.6558 5.93166L17.9941 8.30696L18.8534 10.3906L21 11.6103V12.4139L18.8527 13.6256ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"></path></g></svg>
                        </span>
                        <span className='link-name'>Manage Profile</span>
                    </a>
                </li>
                <li>
                    <a href='/subscription' className='d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5'>
                        <span className='icon'>
                            <svg height="15" width="15" className="inline-block aspect-square w-full shrink-0 rounded-full h-auto" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="UserCircleIcon"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor"></path></g></svg>
                        </span>
                        <span className='link-name'>Manage Subscription</span>
                    </a>
                </li>
            </ul>
          </Popover.Body>
        </Popover>
      );
      const popoverTheme = (
        <Popover id="popover-basic" rootClose="false">
          <Popover.Body className='p-2'>
            <ul className='list-unstyled'>
                <li>
                    <a href='/manage-profile' className='d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5'>
                        <span className='icon'>
                            <svg height="15" className="inline-block text-light-600 dark:text-dark-400 [.active-button_&amp;]:text-light-900 md:[.group-button:hover_&amp;]:text-light-900 dark:[.active-button_&amp;]:text-dark-100 dark:md:[.group-button:hover_&amp;]:text-light-100" width="15" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="Settings"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6562 20.897L20.8733 18.6798L20.0925 15.843L20.4327 15.0305L23 13.5818V10.4464L20.44 8.99173L20.1055 8.18067L20.8961 5.34235L18.6774 3.12683L15.8403 3.90748L15.0296 3.56758L13.5808 1H10.4454L8.99072 3.56004L8.17985 3.89446L5.34198 3.10281L3.1267 5.31809L3.90748 8.15567L3.56758 8.96634L1 10.4151V13.5496L3.55774 15.0076L3.89252 15.8193L3.10197 18.6572L5.31809 20.8733L8.15567 20.0925L8.96644 20.4325L10.4153 22.999H13.5498L15.0067 20.4412L15.8183 20.1065L18.6562 20.897ZM18.8527 13.6256L17.9809 15.7078L18.6362 18.0886L18.0678 18.657L15.692 17.9951L13.609 18.8542L12.3873 20.999H11.5829L10.3714 18.8529L8.29155 17.9808L5.90947 18.6362L5.34203 18.0688L6.00385 15.693L5.14482 13.6101L3 12.3876V11.583L5.1471 10.3715L6.0192 8.29155L5.36375 5.90947L5.93001 5.34321L8.30576 6.00595L10.3895 5.14655L11.6093 3H12.4129L13.6245 5.1471L15.7044 6.0192L18.087 5.36362L18.6558 5.93166L17.9941 8.30696L18.8534 10.3906L21 11.6103V12.4139L18.8527 13.6256ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"></path></g></svg>
                        </span>
                        <span className='link-name'>Light Mode</span>
                    </a>
                </li>
                <li>
                    <a onClick={darkModeHandle} className='d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5'>
                        <span className='icon'>
                            <svg height="15" width="15" className="inline-block aspect-square w-full shrink-0 rounded-full h-auto" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="UserCircleIcon"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor"></path></g></svg>
                        </span>
                        <span className='link-name'>Dark Mode</span>
                    </a>
                </li>
                {/* <li>
                    <a href='/subscription' className='d-flex align-items-center gap-2 p-1 text-dark text-decoration-none rounded-5'>
                        <span className='icon'>
                            <svg height="15" width="15" className="inline-block aspect-square w-full shrink-0 rounded-full h-auto" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="UserCircleIcon"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor"></path></g></svg>
                        </span>
                        <span className='link-name'>System (Dark)</span>
                    </a>
                </li> */}
            </ul>
          </Popover.Body>
        </Popover>
      );
    return(
        <>
            <section className='sidebar pt-3 flex-column'>
                <div className='top-nav grow d-flex flex-column gap-3'>
                    <div className='logo d-flex align-items-center pl-1'>
                        <a href='/' className='text-decoration-none text-dark'><p className='desktop-view'>Midjourney</p></a>
                        <p className='mobile-view'>MJ</p>
                    </div>
                    <ul className='list-unstyled d-flex flex-column gap-2'>
                        <li>
                            <a className='d-flex align-items-center gap-2 p-2 rounded-5 active'>
                                <span className='icon'>
                                    <svg height="22" className="inline-block relative" width="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="Compass"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9471 7.05269C17.2149 7.32052 17.3085 7.71669 17.1887 8.07602L15.0687 14.436C14.9692 14.7346 14.7348 14.9689 14.4362 15.0685L8.07623 17.1885C7.7169 17.3083 7.32073 17.2147 7.0529 16.9469C6.78507 16.6791 6.69154 16.2829 6.81132 15.9236L8.93132 9.56356C9.03086 9.26496 9.26517 9.03064 9.56378 8.93111L15.9238 6.81111C16.2831 6.69133 16.6793 6.78485 16.9471 7.05269ZM10.6706 10.6704L9.34115 14.6587L13.3294 13.3292L14.6589 9.34093L10.6706 10.6704Z"></path></g></svg>
                                </span>
                                <span className='link-name'>Explore</span>
                            </a>
                        </li>
                        <li>
                            <a href='/subscription' className='d-flex align-items-center gap-2 p-2 rounded-5'>
                                <span className='icon'>
                                    <svg className="inline-block flex-shrink-0 relative" height="22" width="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="PaintBrush"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 1V9H20L20 10L20 11L20 12.9942C20.0087 14.5165 19.1594 14.9983 16.7914 15.7079C15.4034 16.1238 15 16.3523 15 16.5C15 17.2676 15.0703 17.783 15.2201 18.3825C15.1912 18.2665 15.362 18.927 15.3997 19.103C15.466 19.4125 15.5 19.6942 15.5 20C15.5 21.6609 13.9377 23 12 23C10.0623 23 8.5 21.6609 8.5 20C8.5 19.6942 8.534 19.4125 8.60032 19.103C8.63803 18.927 8.80884 18.2665 8.77986 18.3825C8.92971 17.783 9 17.2676 9 16.5C9 16.3513 8.59771 16.1233 7.21265 15.7078C4.84771 14.9983 4 14.518 4 13V11V9V1H20ZM12.9264 11H18L18 13C18.0008 13.1505 17.6005 13.3776 16.2173 13.7921L16.213 13.7934C13.8493 14.5017 13 14.9827 13 16.5C13 17.4407 13.0922 18.117 13.2799 18.8675C13.262 18.796 13.4167 19.3942 13.4441 19.522C13.4826 19.7018 13.5 19.846 13.5 20C13.5 20.482 12.8957 21 12 21C11.1043 21 10.5 20.482 10.5 20C10.5 19.846 10.5174 19.7018 10.5559 19.522C10.5833 19.3942 10.738 18.796 10.7201 18.8675C10.9078 18.117 11 17.4407 11 16.5C11 14.982 10.1523 14.5017 7.78735 13.7922C6.40229 13.3767 6 13.1487 6 13V11H12.9264ZM6 9V3H8V7H10V3H12V6H14V3H18V9H6Z"></path></g></svg>
                                </span>
                                <span className='link-name'>Create</span>
                            </a>
                        </li>
                        <li>
                            <a href='/subscription' className='d-flex align-items-center gap-2 p-2 rounded-5'>
                                <span className='icon'>
                                    <svg height="22" className="inline-block relative" width="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="PhotographIcon"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" fill="none" stroke="currentColor"></path></g></svg>
                                </span>
                                <span className='link-name'>Organize</span>
                            </a>
                        </li>
                        <li>
                            <a href='/subscription' className='d-flex align-items-center gap-2 p-2 rounded-5'>
                                <span className='icon'>
                                    <svg height="22" className="inline-block relative" width="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="Avatar"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z"></path></g></svg>
                                </span>
                                <span className='link-name'>Subscribe</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='bottom-nav grow d-flex flex-column gap-3 justify-content-end'>
                <ul className='list-unstyled d-flex flex-column gap-2'>
                        <li>
                            <a href='/help' className='d-flex align-items-center gap-2 p-2 rounded-5'>
                                <span className='icon'>
                                    <svg height="24" className="inline-block " width="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="CircleQuestion"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0003 16.9983C12.5528 16.9983 13.0007 16.5506 13.0007 15.9983C13.0007 15.4461 12.5528 14.9983 12.0003 14.9983C11.4479 14.9983 11 15.4461 11 15.9983C11 16.5506 11.4479 16.9983 12.0003 16.9983ZM11 14H13C13 13.2016 13.1254 13.0553 13.9472 12.6444C15.3754 11.9303 16 11.2016 16 9.5C16 7.32063 14.2843 6 12 6C9.79086 6 8 7.79086 8 10H10C10 8.89543 10.8954 8 12 8C13.2772 8 14 8.55641 14 9.5C14 10.2984 13.8746 10.4447 13.0528 10.8556C11.6246 11.5697 11 12.2984 11 14Z"></path></g></svg>
                                </span>
                                <span className='link-name'>Helps</span>
                            </a>
                        </li>
                        <li>
                            <a href='/update' className='d-flex align-items-center gap-2 p-2 rounded-5'>
                                <span className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="24" className=""><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                </span>
                                <span className='link-name'>Update</span>
                            </a>
                        </li>
                        <li>
                            <OverlayTrigger trigger='click' rootClose placement="right" overlay={popoverTheme}>
                                <a className='d-flex align-items-center gap-2 p-2 rounded-5'>
                                    <span className='icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                    </span>
                                    <span className='link-name'>Light Mode</span>
                                </a>
                            </OverlayTrigger>
                        </li>
                        <li>
                            <OverlayTrigger trigger='click' rootClose placement="right" overlay={popover}>
                            <a className='d-flex align-items-center gap-2 p-2 rounded-5'>
                                <span className='icon'>
                                    <svg height="22" width="22" className="inline-block aspect-square w-full shrink-0 rounded-full h-auto" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="UserCircleIcon"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor"></path></g></svg>
                                </span>
                                <span className='link-name'>My Account</span>
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                </span>
                            </a>
                            </OverlayTrigger>
                            
                        </li>
                        <li>
                            <a className='d-flex align-items-center gap-2 p-2 rounded-5 un-active' onClick={showModal}>
                                <span className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="22" width="22" className="aspect-square w-full shrink-0 rounded-full h-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
        </>
        
    );
}
export default Sidebar;