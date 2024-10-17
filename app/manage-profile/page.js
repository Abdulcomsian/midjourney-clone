"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaPlus, FaTrash, FaCheck  } from "react-icons/fa";
import $ from 'jquery';


function ManageProfile () {
    return(
        <div className='content-wrapper'>
            <div className='profile-section common-section'>
                <div className="text-center">
                    <h1 className="main-heading mb-3">Manage Profile</h1>
                    <h3 className="sub-heading">Edit your profile and connected accounts</h3>
                </div>
                <div className='connected-account w-75 m-auto my-5'>
                    <h4 className='fw-600 mb-2'>Connected accounts</h4>
                    <p>Connect your Discord or Google accounts to use them to log in to Midjourney. Visit our <a>help site</a> to learn more.</p>
                    <table className='w-100 my-4'>
                        <tbody>
                            <tr className='border-top border-bottom'>
                                <td className='py-3 w-50'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <span>
                                            <svg className="inline-block text-[#5865f2]" width="24" height="24" viewBox="0 0 256 256" fill="#5865f2" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="DiscordLogo"><g fill="#5865f2" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"><g transform="scale(5.33333,5.33333)"><path d="M40,12c0,0 -4.585,-3.588 -10,-4l-0.488,0.976c4.896,1.198 7.142,2.915 9.488,5.024c-4.045,-2.065 -8.039,-4 -15,-4c-6.961,0 -10.955,1.935 -15,4c2.346,-2.109 5.018,-4.015 9.488,-5.024l-0.488,-0.976c-5.681,0.537 -10,4 -10,4c0,0 -5.121,7.425 -6,22c5.162,5.953 13,6 13,6l1.639,-2.185c-2.782,-0.967 -5.924,-2.694 -8.639,-5.815c3.238,2.45 8.125,5 16,5c7.875,0 12.762,-2.55 16,-5c-2.715,3.121 -5.857,4.848 -8.639,5.815l1.639,2.185c0,0 7.838,-0.047 13,-6c-0.879,-14.575 -6,-22 -6,-22zM17.5,30c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4c1.933,0 3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4zM30.5,30c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4c1.933,0 3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4z"></path></g></g></g></svg>
                                        </span>
                                        <span className='fw-600'>Discord</span>
                                    </div>
                                </td>
                                <td className='py-3 w-50 text-end'>
                                    <button className='bg-dark text-white rounded border-0 py-1'>Connect Discord</button>
                                </td>
                            </tr>
                            <tr className='border-top border-bottom'>
                                <td className='py-3 w-50'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" stroke="none" stroke-width="1" className="inline-block undefined" xmlns="http://www.w3.org/2000/svg"><g id="GoogleLogo"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></g></svg>
                                        </span>
                                        <p>
                                            <span className='fw-600 d-block'>Google</span>
                                            <span>alamhamza18@gmail.com</span>
                                        </p>
                                    </div>
                                </td>
                                <td className='py-3 w-50 text-end'>
                                    <button className='bg-dark text-white rounded border-0 py-1 disabled opacity-25'>Disconnect Google</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='account-detail w-75 m-auto my-5'>
                    <h4 className='fw-600 mb-2'>Account details</h4>
                    
                    <table className='w-100 my-4'>
                        <tbody>
                            <tr className='border-top border-bottom'>
                                <td className='py-3 w-50'>
                                    <div>
                                        <span>Email</span>
                                    </div>
                                </td>
                                <td className='py-3 w-50 text-end'>
                                    <span>alamhamza18@gmail.com</span>
                                </td>
                            </tr>
                            <tr className='border-top border-bottom'>
                                <td className='py-3 w-50'>
                                    <div>
                                        <span>Midjourney ID</span>
                                    </div>
                                </td>
                                <td className='py-3 w-50 text-end'>
                                    <span>14c40616-256a-40ee-bfa6-69ba0ba7d5bd</span>
                                </td>
                            </tr>
                            <tr className='border-top border-bottom'>
                                <td className='py-3 w-50'>
                                    <div>
                                        <span>Terms of Service</span>
                                    </div>
                                </td>
                                <td className='py-3 w-50 text-end'>
                                    <button className='bg-dark text-white rounded border-0 py-1 px-2'>Accept</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}   
export default ManageProfile;