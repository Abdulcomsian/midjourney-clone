"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPaymentMethod, fetchPricingAndPaymentData, resetState } from '../../features/apiSlice';
import { openSubscriptionModal } from '../../features/modalSlice';
import translations from '../../i18';
import BottomNav from '../component/bottom-nav/bottom-nav';

function MyProfile() {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
    const t = translations[selectedLanguage];

    const { pricingData, paymentMethodsData, loading, error, paymentMethod, errorPaymentMethod } = useSelector((state) => state.api);

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

    useEffect(() => {
        if (pricingData || paymentMethodsData) {
            console.log("Pricing Data: ", pricingData);
            console.log("Payment Methods Data: ", paymentMethodsData);
        }
    }, [pricingData, paymentMethodsData]);

    useEffect(() => {
        if (errorPaymentMethod) {
            dispatch(openSubscriptionModal());
        } else if (paymentMethod) {
            dispatch(openSubscriptionModal());
        }
    }, [paymentMethod, errorPaymentMethod]);

    // Conditionally render content based on subscription status
    const renderSubscriptionContent = () => {
        if (paymentMethodsData?.data.has_active_subscription) {
            const { subscription } = paymentMethodsData?.data;
            console.log("Subscription", subscription);

            return (
                <div className='border p-4 package-box rounded-4 mb-3'>
                    <h5 className='package-name fw-600'>{subscription.subscription_tier?.name || "Subscription Plan"}</h5>
                    <div className='price-div mt-3 d-flex align-items-center gap-2'>
                        <span>{subscription.currency_code}</span>
                        <span>{subscription.subscription_amount}</span>
                        <span>Amount</span>
                    </div>
                    <p className='off-text'>Your subscription is active until {new Date(subscription.end_date).toLocaleDateString()}</p>
                    <ul className='offer-list list-unstyled py-5'>
                        {Array.isArray(subscription.subscription_tier?.features)
                            ? subscription.subscription_tier?.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))
                            : JSON.parse(subscription.subscription_tier?.features || '[]').map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))
                        }
                    </ul>

                    <div>
                        <p>Total Credit : <span style={{ fontSize: "large", color: "blue" }}>{subscription.subscription_tier?.credits}</span></p>
                    </div>
                </div>
            );
        } else {
            return <p>You don't have any active subscriptions. Please consider subscribing to access premium features.</p>;
        }
    };

    // Show loading indicator when data is being fetched
    if (loading) {
        return (
            <div className="content-wrapper">
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span> {/* This text is for screen readers */}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='content-wrapper'>
                <div className='subscription-wrapper pt-5 overflow-auto common-section'>
                    <div className='packages my-5'>
                        <div className='container-fluid'>
                            <div className='row justify-content-center'>
                                <div className='col-xxl-3 col-lg-4 col-sm-6'>
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

export default MyProfile;
