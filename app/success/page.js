"use client";
import React from 'react';

function Success() {

    return (
        <>
            <div className='content-wrapper success-ful-wrapper'>
                <div className='help-section subscription-wrapper common-section'>
                    <div className='left-panel'>
                        <div className='frequently-question'>
                            <div className=" d-flex align-items-center justify-content-center h-100 mx-3 ">
                                <div className="payment-initialization-content shadow rounded-3 p-5 border d-flex justify-content-center flex-column gap-3">
                                    <div className="img-fig text-center">
                                        <figure className="mb-0">
                                            <img src="/assets/img/tick-icon.png" alt="" class="img-fluid w-25 m-auto" />
                                        </figure>
                                    </div>
                                    <h2 classNames="mt-5 mb-3 fw-bold">Payment Initialization Successful !</h2>
                                    <p>Thank you for select the available payment method and initialize the payment.</p>
                                    <p>Your premium subsription will expire on Decmeber, 2024</p>
                                    <a href='/' className="btn btn-success w-100 py-2">Move to Proceed</a>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='right-panel'></div>
                </div>
            </div>



        </>
    );
}

export default Success;
