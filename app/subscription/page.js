import React from 'react';
import { Row } from 'react-bootstrap';

function Subscription (){
    return(
        <div className='content-wrapper'>
            <div className='subscription-wrapper pt-5'>
                <h1 className='main-heading fw-bold text-center'>Purchase a subscription</h1>
                <p className='text-center'>Choose the plan that works for you</p>
                <div className='align-items-center border d-flex gap-2 justify-content-around m-auto rounded-3 w-25 p-2 mt-4'>
                    <p class="text-base">Already have a subscription?</p>
                    <a>Link your accounts</a>
                </div>
                <div className='packages my-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='border p-4 package-box rounded-4'>
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
                            <div className='col-md-3'>
                                <div className='border p-4 package-box rounded-4'>
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
                            <div className='col-md-3'>
                                <div className='border p-4 package-box rounded-4'>
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
                            <div className='col-md-3'>
                                <div className='border p-4 package-box rounded-4'>
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
                <div className='frequently-question'>
                    <h2 className='text-center fw-600'>Frequently Asked Questions</h2>
                    <p className='text-center'>Can't find the answer you're looking for?</p>
                    <p className='text-center'>Read the <a className='text-danger'>Quick Start Guide</a> or <a className='text-danger'>contact support.</a></p>
                </div>
            </div>
        </div>
    )
}
export default Subscription