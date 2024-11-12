"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaPlus, FaTrash, FaCheck  } from "react-icons/fa";
import $ from 'jquery';
import BottomNav from '../component/bottom-nav/bottom-nav';
import Accordion from 'react-bootstrap/Accordion';


function Help () {
    const [affectedUrl,setAffectedUrl] =  useState([]);
    const resourcesArray = [
        {resourceName: 'Getting Started', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'In-Depth Documentation', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'Create with Newcomers', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'Video Tutorials', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'Prompt Crafting Chatroom', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'Billing Support', sulg:'A quick how-to guide to get you started making images as fast as possible'}
    ]
    const add = () => {
        setAffectedUrl(prevRowList => [...prevRowList, true]);
      };
    
    const remove = (i) => {
        setAffectedUrl(prevRowList => prevRowList.filter((_, index) => index !== i));
    };
    return(
        <>
        <div className='content-wrapper'>
            <div className='help-section subscription-wrapper common-section'>
                <div className='left-panel'>
                    <div className='frequently-question'>
                        <h2 className='text-center fw-600'>Frequently Asked Questions</h2>
                        <p className='text-center'>Can't find the answer you're looking for?</p>
                        <p className='text-center'>Read the <a className='text-danger'>Quick Start Guide</a> or <a className='text-danger'>contact support.</a></p>
                    </div>
                    <Accordion className='my-5'>
                        <Accordion.Item eventKey="0" className='mb-2 rounded-3'>
                            <Accordion.Header className='border-0'>What are "Fast Hours"?</Accordion.Header>
                            <Accordion.Body>
                                <p className="mb-4">We have two modes for image generation, “fast” and “relax”. Fast tries to give you a GPU instantly. It's our highest priority processing tier, and it's kinda expensive. Relax puts you in a queue behind others based on how much you've used the system in relax mode.</p>
                                <p className="mb-4">The basic plan comes with 200 fast GPU-minutes/mo, standard with 15 fast gpu-hours/mo, and pro with 30 gpu-hours/mo.</p>
                                <p className="mb-4">One hour is roughly 60 image generation or upscale commands and roughly 200 image variation commands.</p>
                                <p className="mb-4">These numbers are experimental and may change at any time.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='mb-2 rounded-3'>
                            <Accordion.Header className='border-0'>What is unlimited relaxed generation?</Accordion.Header>
                            <Accordion.Body>
                                <p className="mb-4">We have two modes for image generation, “fast” and “relax”. Fast tries to give you a GPU instantly. It's our highest priority processing tier, and it's kinda expensive. Relax puts you in a queue behind others based on how much you've used the system in relax mode.</p>
                                <p className="mb-4">The basic plan comes with 200 fast GPU-minutes/mo, standard with 15 fast gpu-hours/mo, and pro with 30 gpu-hours/mo.</p>
                                <p className="mb-4">One hour is roughly 60 image generation or upscale commands and roughly 200 image variation commands.</p>
                                <p className="mb-4">These numbers are experimental and may change at any time.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='mb-2 rounded-3'>
                            <Accordion.Header className='border-0'>What if I want MORE fast?</Accordion.Header>
                            <Accordion.Body>
                                <p className="mb-4">We have two modes for image generation, “fast” and “relax”. Fast tries to give you a GPU instantly. It's our highest priority processing tier, and it's kinda expensive. Relax puts you in a queue behind others based on how much you've used the system in relax mode.</p>
                                <p className="mb-4">The basic plan comes with 200 fast GPU-minutes/mo, standard with 15 fast gpu-hours/mo, and pro with 30 gpu-hours/mo.</p>
                                <p className="mb-4">One hour is roughly 60 image generation or upscale commands and roughly 200 image variation commands.</p>
                                <p className="mb-4">These numbers are experimental and may change at any time.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='mb-2 rounded-3'>
                            <Accordion.Header className='border-0'>What is the Community Gallery?</Accordion.Header>
                            <Accordion.Body>
                                <p className="mb-4">We have two modes for image generation, “fast” and “relax”. Fast tries to give you a GPU instantly. It's our highest priority processing tier, and it's kinda expensive. Relax puts you in a queue behind others based on how much you've used the system in relax mode.</p>
                                <p className="mb-4">The basic plan comes with 200 fast GPU-minutes/mo, standard with 15 fast gpu-hours/mo, and pro with 30 gpu-hours/mo.</p>
                                <p className="mb-4">One hour is roughly 60 image generation or upscale commands and roughly 200 image variation commands.</p>
                                <p className="mb-4">These numbers are experimental and may change at any time.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='mb-2 rounded-3'>
                            <Accordion.Header className='border-0'>What if I don't want my images to appear in the Gallery?</Accordion.Header>
                            <Accordion.Body>
                                <p className="mb-4">We have two modes for image generation, “fast” and “relax”. Fast tries to give you a GPU instantly. It's our highest priority processing tier, and it's kinda expensive. Relax puts you in a queue behind others based on how much you've used the system in relax mode.</p>
                                <p className="mb-4">The basic plan comes with 200 fast GPU-minutes/mo, standard with 15 fast gpu-hours/mo, and pro with 30 gpu-hours/mo.</p>
                                <p className="mb-4">One hour is roughly 60 image generation or upscale commands and roughly 200 image variation commands.</p>
                                <p className="mb-4">These numbers are experimental and may change at any time.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='mb-2 rounded-3'>
                            <Accordion.Header className='border-0'>How does commercial use work?</Accordion.Header>
                            <Accordion.Body>
                                <p className="mb-4">We have two modes for image generation, “fast” and “relax”. Fast tries to give you a GPU instantly. It's our highest priority processing tier, and it's kinda expensive. Relax puts you in a queue behind others based on how much you've used the system in relax mode.</p>
                                <p className="mb-4">The basic plan comes with 200 fast GPU-minutes/mo, standard with 15 fast gpu-hours/mo, and pro with 30 gpu-hours/mo.</p>
                                <p className="mb-4">One hour is roughly 60 image generation or upscale commands and roughly 200 image variation commands.</p>
                                <p className="mb-4">These numbers are experimental and may change at any time.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            <div className="text-center">
                <h1 className="main-heading mb-3">Help</h1>
                <h3 className="sub-heading">Find help resources, documentation and system updates</h3>
            </div>
            <div className='resources pt-5'>
                <h5 className='fw-600'>Resources</h5>

                <div className='multiple-resources mt-3'>
                    {resourcesArray.map((item,index)=>{
                        return(
                        <div className='resource-card p-3 rounded-3 cursor-pointer' key={index}>
                            <a>
                                <div className='card-header d-flex align-items-center gap-2'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" width={20} height={20} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"></path></svg></span>
                                    <span className='fs-16 fw-600'>{item.resourceName}</span>
                                    <span className='d-block ms-auto'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="18" className="ml-auto transition-transform"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></span>
                                </div>
                                <p className='fs-14'>{item.sulg}</p>
                            </a>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='help-common-box border rounded-4 p-4 mt-5 pb-5'>
                            <h6 className='fw-600 mb-2'>Report an Issue</h6>
                            <p className='fs-14 mb-3'>If you've run into a bug or a issue on our service please report it here. It's the best way to let us know something is broken. These messages go directly to a special engineering channel and will not receive a response.</p>
                            <div className='form-div'>
                                <textarea className='w-100 border rounded-2' rows={5}/>
                                <div className='with-icon-select position-relative mb-2'>
                                    <select className='w-100 form-control fs-14'>
                                        <option disable>Select a category</option>
                                    </select>
                                    <span className='position-absolute end-0 top-0 h-100 w-auto bg-secondary-subtle d-flex py-2 px-2 align-items-center rounded-end-3 fs-12 pointer-event-none'><FaChevronDown /></span>
                                </div>
                                <div className='multiple-affected-url'>
                                    {affectedUrl.map((item, index) => (
                                        <div className='with-icon-select position-relative mb-2' key={index}>
                                            <input className='w-100 form-control' placeholder='Affected job URL or prompt'/>
                                            <span className='position-absolute end-0 top-0 h-100 w-auto bg-secondary-subtle d-flex py-2 px-2 align-items-center rounded-end-3 fs-12'><FaTrash onClick={()=>remove(index)}/></span>
                                        </div>
                                    ))}
                                    <div className='with-icon-select position-relative mb-2'>
                                        <input className='w-100 form-control' placeholder='Affected job URL or prompt'/>
                                        <span className='position-absolute end-0 top-0 h-100 w-auto bg-secondary-subtle d-flex py-2 px-2 align-items-center rounded-end-3 fs-12'><FaPlus onClick={add}/></span>
                                    </div>
                                    <div className='attachment-image form-control position-relative cursor-pointer text-center fs-14 mb-2'>
                                        <input type='file' className='opacity-0 position-absolute w-100 start-0 top-0 h-100'/>
                                        <p>
                                            <span></span>
                                            <span>Attach Images</span>
                                        </p>
                                    </div>
                                    <button className='form-control bg-dark text-white text-center disabled opacity-50'>Send Report</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='help-common-box border rounded-4 p-4 mt-5'>
                            <h6 className='fw-600 mb-2'>Server Status</h6>
                            <p className='fs-14 mb-3'>This is a dashboard showing you the status of our service so you can tell if there is a known service related issue.</p>
                            <div className='status-header mb-3 bg-green-badge d-flex align-items-center justify-content-between py-1 rounded-2 px-2 fs-14'>
                                <span>System Status</span>
                                <span><FaCheck /></span>
                            </div>
                            <div className='status-body'>
                                <div className='py-1 px-3 d-flex justify-content-between align-items-center fs-14'>
                                    <span>Image Generation</span>
                                    <span className='flex-1 border-doted mx-2'></span>
                                    <span>Ok</span>
                                </div>
                                <div className='py-1 px-3 d-flex justify-content-between align-items-center fs-14'>
                                    <span>Job Submissions</span>
                                    <span className='flex-1 border-doted mx-2'></span>
                                    <span>Ok</span>
                                </div>
                                <div className='py-1 px-3 d-flex justify-content-between align-items-center fs-14'>
                                    <span>Discord Bot</span>
                                    <span className='flex-1 border-doted mx-2'></span>
                                    <span>Ok</span>
                                </div>
                                <div className='py-1 px-3 d-flex justify-content-between align-items-center fs-14'>
                                    <span>Gallery</span>
                                    <span className='flex-1 border-doted mx-2'></span>
                                    <span>Ok</span>
                                </div>
                            </div>
                            <div className='status-header mt-3 mb-2 bg-green-badge d-flex align-items-center justify-content-between py-1 rounded-2 px-2 fs-14'>
                                <span>System Status</span>
                                <span><FaCheck /></span>
                            </div>
                            <div className='status-body'>
                                <div className='py-1 px-3 d-flex justify-content-between align-items-center fs-14'>
                                    <span>Default Models</span>
                                    <span className='flex-1 border-doted mx-2'></span>
                                    <span>Fast / Relax</span>
                                </div>
                                
                                <div className='py-1 px-3 d-flex justify-content-between align-items-center fs-14'>
                                    <span>v6 Grids</span>
                                    <span className='flex-1 border-doted mx-2'></span>
                                    <span>3s / 23s</span>
                                </div>
                                <div className='py-1 px-3 d-flex justify-content-between align-items-center fs-14'>
                                    <span>v6 Upscaler</span>
                                    <span className='flex-1 border-doted mx-2'></span>
                                    <span>Ok</span>
                                </div>
                                <div className='py-1 px-3 d-flex justify-content-between align-items-center fs-14'>
                                    <span>Niji v6 Grids</span>
                                    <span className='flex-1 border-doted mx-2'></span>
                                    <span>Ok</span>
                                </div>
                                <div className='py-1 px-3 d-flex justify-content-between align-items-center fs-14'>
                                    <span>Niji v6 Upscaler</span>
                                    <span className='flex-1 border-doted mx-2'></span>
                                    <span>Ok</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='right-panel'></div>
    </div>
        </div>
        <BottomNav/>
        </>
    )
}   
export default Help;