"use client";
import React, { useEffect } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BottomNav from '../component/bottom-nav/bottom-nav';
import { useApi } from '../../hooks/useApi';
import { resetState, fetchPricingAndPaymentData, fetchPaymentMethod } from '../../features/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { openSubscriptionModal } from '../../features/modalSlice';
import SubcriptionModal from '../component/subscription-payment-modal/pages';

function Subscription() {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const showSubscriptionModalState = useSelector((state) => state.modal.showSubscriptionModal);

    // const { get, post, data, loading, error, reset } = useApi();
    useEffect(() => {
        if (token) {
            dispatch(resetState()); // Reset state before fetching
            dispatch(fetchPricingAndPaymentData({
                pricingEndpoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pricing`,
                paymentEndpoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscription/status`,
                token,
            }));
        }
    }, [dispatch, token]);

    const { pricingData, paymentMethodsData, loading, error,paymentMethod,errorPaymentMethod } = useSelector((state) => state.api);
    useEffect(() => {
        if (pricingData || paymentMethodsData) {
            console.log("Pricing Data: ", pricingData);
            console.log("Payment Methods Data: ", paymentMethodsData);
            // You can process them here if needed
        }
    }, [pricingData, paymentMethodsData]);

    const handlePaymentSubscription = (package_id) => {
        dispatch(fetchPaymentMethod({
            paymentMethodEndPoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/payments/methods`,
            token,
            package_id
        }));
    };
    useEffect(() => {
        if (errorPaymentMethod) {
            dispatch(openSubscriptionModal());
        } else if(paymentMethod){
            dispatch(openSubscriptionModal());
        }
    }, [paymentMethod,errorPaymentMethod]);
    
    return (
        <>
            {showSubscriptionModalState &&
                <SubcriptionModal/>
            }
            <div className='content-wrapper '>
                <div className='subscription-wrapper pt-5 overflow-auto common-section'>
                    <h1 className='main-heading fw-bold text-center'>Purchase a subscription</h1>
                    <p className='text-center'>Choose the plan that works for you</p>
                    <div className='link-your-account align-items-center border d-flex gap-2 justify-content-around m-auto rounded-3 w-fit-content p-3 mt-4'>
                        <p className="text-base">Already have a subscription?</p>
                        <a className="text-danger d-inline-flex align-items-center gap-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="size-5 inline text-splash/90 mr-1 "><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></span>
                            <span>Link your accounts</span>
                        </a>
                    </div>

                    <Tabs defaultActiveKey="Yearly Billing" id="justify-tab-example" className="mb-3 packages-tab" justify>
                        <Tab eventKey="Yearly Billing" title="Yearly Billing" className='border-0'>
                            <div className='packages my-5'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        {pricingData?.data?.map(plan => (
                                            <div className='col-xxl-3 col-lg-4 col-sm-6' key={plan.id}>
                                                <div className='border p-4 package-box rounded-4 mb-3'>
                                                    <h5 className='package-name fw-600'>{plan.name} Plan</h5>
                                                    <div className='price-div mt-3 d-flex align-items-center gap-2 flex-lg-wrap'>
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <span className='text-xs'>${parseFloat(plan.price).toFixed(2)}/</span>
                                                            <span>month</span>
                                                        </div>
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <span>${parseFloat(plan.price * 12).toFixed(2)}</span>
                                                            <span>/ year</span>
                                                        </div>
                                                    </div>
                                                    <p className='off-text'>20% off billed annually</p>
                                                    <button className='bg-dark border mt-3 mb-1 p-2 rounded text-white w-100' onClick={()=>handlePaymentSubscription(plan.id)}>
                                                        Subscribe
                                                    </button>
                                                    <a className='d-block text-center text-dark text-decoration-none'>
                                                        <span>View monthly billing</span>
                                                    </a>
                                                    <ul className='offer-list list-unstyled py-5'>
                                                        {JSON.parse(plan.features).map((feature, index) => (
                                                            <li key={index} className='d-flex align-items-center gap-2 py-1'>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash">
                                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                        <li className='d-flex align-items-center gap-2 py-1'>
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                                </svg>
                                                            </span>
                                                            <span>{plan.credits} Credits</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Monthly Billing" title="Monthly Billing" className='border-0'>
                            <div className='packages my-5'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-xxl-3 col-lg-4 col-sm-6'>
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
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Limited generations (~200 / month)</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>General commercial terms</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Access to member gallery</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Optional credit top ups</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>3 concurrent fast jobs</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-xxl-3 col-lg-4 col-sm-6'>
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
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Limited generations (~200 / month)</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>General commercial terms</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Access to member gallery</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Optional credit top ups</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>3 concurrent fast jobs</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-xxl-3 col-lg-4 col-sm-6'>
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
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Limited generations (~200 / month)</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>General commercial terms</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Access to member gallery</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Optional credit top ups</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>3 concurrent fast jobs</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-xxl-3 col-lg-4 col-sm-6'>
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
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Limited generations (~200 / month)</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>General commercial terms</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Access to member gallery</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                                        <span>Optional credit top ups</span>
                                                    </li>
                                                    <li className='d-flex align-items-center gap-2 py-1'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f2330d" aria-hidden="true" height="14" className=" text-splash"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
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

                  
                </div>
            </div>
            <BottomNav />
        </>
    )
}
export default Subscription