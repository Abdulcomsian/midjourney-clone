"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPaymentMethod, fetchPricingAndPaymentData, resetState } from '../../features/apiSlice';
import { openSubscriptionModal } from '../../features/modalSlice';
import { useRouter } from 'next/navigation'; // Import useRouter
import translations from '../../i18';
import BottomNav from '../component/bottom-nav/bottom-nav';

function MySubscription() {
    const dispatch = useDispatch();
    const router = useRouter(); // Initialize useRouter
    const { token } = useSelector((state) => state.auth);
    const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
    const t = translations[selectedLanguage];

    const { pricingData, paymentMethodsData, loading, error, paymentMethod, errorPaymentMethod } = useSelector((state) => state.api);
    // Conditionally render content based on subscription status
    const renderSubscriptionContent = () => {


        return (
            <div className=''>
                {/* Card for Subscription Details */}
                <div className='d-flex justify-content-between  mb-2'>
                    <div className="package-container">

                        {/* <h5 className='package-name fw-600 '>Your {subscription.subscription_tier?.name || "Subscription Plan"} Plan <span className=" rounded-full active-btn">Active</span></h5> */}


                    </div>


                </div>

                <div className="d-flex grid  ">


                    <div className='d-flex flex-column m-2 w-100 '>

                        <div className='border p-4 rounded-4  '>
                            <div class="text-container text-center">
                                <h2 class="mt-5 mb-3 fw-bold text-secondary">Payment Initialization Successful !</h2>
                                <p className='text-secondary'>Thank you for select the available payment method and initialize the payment.</p>
                                <p className='text-secondary'>Your premium subsription will expire on Decmeber, 2024</p>
                            </div>
                            {/* <div className='price-div  d-flex align-items-center gap-2 text-secondary'>
                                    <span className='text-secondary'></span>
                                    <span className='text-secondary'></span>
                                    <span className='text-secondary'>Amount</span>
                                </div> */}

                            <button className="btn btn-buy">Thank you for Purchasing</button>
                        </div>
                    </div>


                    {/* Card for Plan Features */}

                </div>

            </div>
        );

    };

    // Show loading indicator when data is being fetched
    if (loading) {
        return (
            <div className="content-wrapper">
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='content-wrapper'>
                <div className='subscription-wrapper pt-5 overflow-auto common-section'>
                    <div className='text-center mb-4'>
                        <h2 className='text-secondary'>Manage Subscription</h2>
                        <div className='text-secondary mt-2' >Choose the plan that works for you</div>
                    </div>
                    <div className='packages my-5'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-12 col-md-10'>
                                    {renderSubscriptionContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav />
        </>
    );
}

export default MySubscription;
