"use client";
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Subscription (){
    return(
        <div className='content-wrapper'>
            <div className='subscription-wrapper pt-5'>
                <h1 className='main-heading fw-bold text-center'>Purchase a subscription</h1>
                <p className='text-center'>Choose the plan that works for you</p>
                <div className='align-items-center border d-flex gap-2 justify-content-around m-auto rounded-3 w-fit-content p-2 mt-4'>
                    <p class="text-base">Already have a subscription?</p>
                    <a className="text-danger d-inline-flex align-items-center gap-2">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="size-5 inline text-splash/90 mr-1 "><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></span>
                        <span>Link your accounts</span>    
                    </a>
                </div>
                <Tabs defaultActiveKey="Yearly Billing" id="justify-tab-example" className="mb-3 packages-tab" justify>
                    <Tab eventKey="Yearly Billing" title="Yearly Billing" className='border-0'>
                    <div className='packages my-5'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-xxl-3 col-md-4'>
                                    <div className='border p-4 package-box rounded-4 mb-3'>
                                        <h5 className='package-name fw-600'>Basic Plan</h5>
                                        <div className='price-div mt-3 d-flex align-items-center gap-2'>
                                            <span>$10</span>
                                            <span>$8</span>
                                            <span>/ month</span>
                                        </div>
                                        <p className='off-text'>20% off billed annually</p>
                                        <button className='bg-dark border mt-3 mb-1 p-2 rounded text-white w-100'>Subscribe</button>
                                        <a className='d-block text-center d-block text-dark text-decoration-none'><span>View monthly billing</span></a>
                                        <ul className='offer-list list-unstyled py-5'>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Limited generations (~200 / month)</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>General commercial terms</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Access to member gallery</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Optional credit top ups</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>3 concurrent fast jobs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-xxl-3 col-md-4'>
                                    <div className='border p-4 package-box rounded-4 mb-3'>
                                        <h5 className='package-name fw-600'>Standard Plan</h5>
                                        <div className='price-div mt-3 d-flex align-items-center gap-2'>
                                            <span>$30</span>
                                            <span>$24</span>
                                            <span>/ month</span>
                                        </div>
                                        <p className='off-text'>20% off billed annually</p>
                                        <button className='bg-dark border mt-3 mb-1 p-2 rounded text-white w-100'>Subscribe</button>
                                        <a className='d-block text-center d-block text-dark text-decoration-none'><span>View monthly billing</span></a>
                                        <ul className='offer-list list-unstyled py-5'>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Limited generations (~200 / month)</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>General commercial terms</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Access to member gallery</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Optional credit top ups</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>3 concurrent fast jobs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-xxl-3 col-md-4'>
                                    <div className='border p-4 package-box rounded-4 mb-3'>
                                        <h5 className='package-name fw-600'>Pro Plan</h5>
                                        <div className='price-div mt-3 d-flex align-items-center gap-2'>
                                            <span>$60</span>
                                            <span>$48</span>
                                            <span>/ month</span>
                                        </div>
                                        <p className='off-text'>20% off billed annually</p>
                                        <button className='bg-dark border mt-3 mb-1 p-2 rounded text-white w-100'>Subscribe</button>
                                        <a className='d-block text-center d-block text-dark text-decoration-none'><span>View monthly billing</span></a>
                                        <ul className='offer-list list-unstyled py-5'>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Limited generations (~200 / month)</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>General commercial terms</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Access to member gallery</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Optional credit top ups</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>3 concurrent fast jobs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-xxl-3 col-md-4'>
                                    <div className='border p-4 package-box rounded-4 mb-3'>
                                        <h5 className='package-name fw-600'>Mega Plan</h5>
                                        <div className='price-div mt-3 d-flex align-items-center gap-2'>
                                            <span>$120</span>
                                            <span>$96</span>
                                            <span>/ month</span>
                                        </div>
                                        <p className='off-text'>20% off billed annually</p>
                                        <button className='bg-dark border mt-3 mb-1 p-2 rounded text-white w-100'>Subscribe</button>
                                        <a className='d-block text-center d-block text-dark text-decoration-none'><span>View monthly billing</span></a>
                                        <ul className='offer-list list-unstyled py-5'>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Limited generations (~200 / month)</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>General commercial terms</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Access to member gallery</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Optional credit top ups</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>3 concurrent fast jobs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Tab>
                    <Tab eventKey="Monthly Billing" title="Monthly Billing"  className='border-0'>
                    <div className='packages my-5'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-xxl-3 col-md-4'>
                                    <div className='border p-4 package-box rounded-4 mb-3'>
                                        <h5 className='package-name fw-600'>Basic Plan</h5>
                                        <div className='price-div mt-3 d-flex align-items-center gap-2'>
                                            <span>$10</span>
                                            <span>$8</span>
                                            <span>/ month</span>
                                        </div>
                                        <p className='off-text'>Save with annual billing (20% off)</p>
                                        <button className='bg-dark border mt-3 mb-1 p-2 rounded text-white w-100'>Subscribe</button>
                                        <a className='d-block text-center d-block text-dark text-decoration-none'><span>View monthly billing</span></a>
                                        <ul className='offer-list list-unstyled py-5'>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Limited generations (~200 / month)</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>General commercial terms</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Access to member gallery</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Optional credit top ups</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>3 concurrent fast jobs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-xxl-3 col-md-4'>
                                    <div className='border p-4 package-box rounded-4 mb-3'>
                                        <h5 className='package-name fw-600'>Standard Plan</h5>
                                        <div className='price-div mt-3 d-flex align-items-center gap-2'>
                                            <span>$30</span>
                                            <span>$24</span>
                                            <span>/ month</span>
                                        </div>
                                        <p className='off-text'>Save with annual billing (20% off)</p>
                                        <button className='bg-dark border mt-3 mb-1 p-2 rounded text-white w-100'>Subscribe</button>
                                        <a className='d-block text-center d-block text-dark text-decoration-none'><span>View monthly billing</span></a>
                                        <ul className='offer-list list-unstyled py-5'>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Limited generations (~200 / month)</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>General commercial terms</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Access to member gallery</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Optional credit top ups</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>3 concurrent fast jobs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-xxl-3 col-md-4'>
                                    <div className='border p-4 package-box rounded-4 mb-3'>
                                        <h5 className='package-name fw-600'>Pro Plan</h5>
                                        <div className='price-div mt-3 d-flex align-items-center gap-2'>
                                            <span>$60</span>
                                            <span>$48</span>
                                            <span>/ month</span>
                                        </div>
                                        <p className='off-text'>Save with annual billing (20% off)</p>
                                        <button className='bg-dark border mt-3 mb-1 p-2 rounded text-white w-100'>Subscribe</button>
                                        <a className='d-block text-center d-block text-dark text-decoration-none'><span>View monthly billing</span></a>
                                        <ul className='offer-list list-unstyled py-5'>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Limited generations (~200 / month)</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>General commercial terms</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Access to member gallery</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Optional credit top ups</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>3 concurrent fast jobs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-xxl-3 col-md-4'>
                                    <div className='border p-4 package-box rounded-4 mb-3'>
                                        <h5 className='package-name fw-600'>Mega Plan</h5>
                                        <div className='price-div mt-3 d-flex align-items-center gap-2'>
                                            <span>$120</span>
                                            <span>$96</span>
                                            <span>/ month</span>
                                        </div>
                                        <p className='off-text'>Save with annual billing (20% off)</p>
                                        <button className='bg-dark border mt-3 mb-1 p-2 rounded text-white w-100'>Subscribe</button>
                                        <a className='d-block text-center d-block text-dark text-decoration-none'><span>View monthly billing</span></a>
                                        <ul className='offer-list list-unstyled py-5'>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Limited generations (~200 / month)</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>General commercial terms</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Access to member gallery</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>Optional credit top ups</span>
                                            </li>
                                            <li className='d-flex align-items-center gap-2 py-1'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" class=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                <span>3 concurrent fast jobs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Tab>
                </Tabs>
                
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
            </div>
        </div>
    )
}
export default Subscription