"use client";
import React, { useEffect } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BottomNav from "../component/bottom-nav/bottom-nav";
import { useApi } from "../../hooks/useApi";
import {
  resetState,
  fetchPricingAndPaymentData,
  fetchPaymentMethod,
} from "../../features/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { openSubscriptionModal } from "../../features/modalSlice";
import SubcriptionModal from "../component/subscription-payment-modal/pages";
import translations from "../../i18";
import ContactForm from "../component/ContactForm";

function Subscription() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const showSubscriptionModalState = useSelector(
    (state) => state.modal.showSubscriptionModal
  );
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const t = translations[selectedLanguage];
  // const { get, post, data, loading, error, reset } = useApi();
  useEffect(() => {
    if (token) {
      dispatch(resetState()); // Reset state before fetching
      dispatch(
        fetchPricingAndPaymentData({
          pricingEndpoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pricing`,
          paymentEndpoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscription/status`,
          token,
        })
      );
    }
  }, [dispatch, token]);

  const {
    pricingData,
    paymentMethodsData,
    loading,
    error,
    paymentMethod,
    errorPaymentMethod,
  } = useSelector((state) => state.api);

  console.log("loading", loading);

  useEffect(() => {
    if (pricingData || paymentMethodsData) {
      console.log("Pricing Data: ", pricingData);
      console.log("Payment Methods Data: ", paymentMethodsData);
      // You can process them here if needed
    }
  }, [pricingData, paymentMethodsData]);

  const handlePaymentSubscription = (package_id) => {
    dispatch(
      fetchPaymentMethod({
        paymentMethodEndPoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/payments/methods`,
        token,
        package_id,
      })
    );
  };
  useEffect(() => {
    if (errorPaymentMethod) {
      dispatch(openSubscriptionModal());
    } else if (paymentMethod) {
      dispatch(openSubscriptionModal());
    }
  }, [paymentMethod, errorPaymentMethod]);

  if (loading)
    return (
      <div className="content-wrapper ">
        <div className="subscription-wrapper pt-5 overflow-auto common-section">
          <h1 className="main-heading fw-bold text-center">
            {t?.Heading || "Purchase a subscription"}
          </h1>
          <p className="text-center">
            {t?.Text_1 || "Choose the plan that works for you"}
          </p>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <span class="spinner-border text-center " role="status"></span>
          </div>
        </div>
      </div>
    );

  if (!pricingData?.success) {
    return (
      <div className="content-wrapper ">
        <div className="subscription-wrapper pt-5 overflow-auto common-section">
          <h1 className="main-heading fw-bold text-center">
            {t?.Heading || "Purchase a subscription"}
          </h1>
          <p className="text-center">
            {t?.Text_1 || "Choose the plan that works for you"}
          </p>
          <div className="w-50 mx-auto mt-5">
            <p className="error-message text-center py-1 mb-4">
              We're not available in your country yet
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {showSubscriptionModalState && <SubcriptionModal />}
      <div className="content-wrapper ">
        <div className="subscription-wrapper pt-5 overflow-auto common-section">
          <h1 className="main-heading fw-bold text-center">
            {t?.Heading || "Purchase a subscription"}
          </h1>
          <p className="text-center">
            {t?.Text_1 || "Choose the plan that works for you"}
          </p>
          {pricingData?.data?.length > 0 && (
            <Tabs
              defaultActiveKey="monthly Billing"
              id="justify-tab-example"
              className="mb-3 packages-tab"
              justify
            >
              <Tab
                eventKey="monthly Billing"
                title={t?.Toggle_2 || "Yearly Billing"}
                className="border-0"
              >
                <div className="packages my-5">
                  <div className="container-fluid">
                    <div className="row">
                      {pricingData?.data?.map((plan) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-sm-6"
                          key={plan.id}
                        >
                          <div className="border p-4 package-box rounded-4 mb-3">
                            <h5 className="package-name fw-600">
                              {plan.name} Plan
                            </h5>
                            <div className="price-div mt-3 d-flex align-items-center gap-2 flex-lg-wrap">
                              {/* <div className='d-flex align-items-center gap-2'>
                                                            <span className='text-xs'> <span>{pricingData?.currency}</span> {parseFloat(plan.price).toFixed(2)}/</span>
                                                            <span>month</span>
                                                        </div> */}
                              <div className="d-flex align-items-center gap-2">
                                <span>
                                  <span>{pricingData?.currency}</span>{" "}
                                  {parseFloat(plan.price / 12).toFixed(2)}
                                </span>
                                <span>/ month</span>
                              </div>
                            </div>
                            <p className="off-text">20% off billed annually</p>
                            <button
                              className="bg-dark border mt-3 mb-1 p-2 rounded text-white w-100"
                              onClick={() => handlePaymentSubscription(plan.id)}
                            >
                              Subscribe
                            </button>
                            <a className="d-block text-center text-dark text-decoration-none">
                              <span>{t?.T_1 || "View monthly billing"}</span>
                            </a>
                            <ul className="offer-list list-unstyled py-5">
                              {JSON.parse(plan.features).map(
                                (feature, index) => (
                                  <li
                                    key={index}
                                    className="d-flex align-items-center gap-2 py-1"
                                  >
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="#f2330d"
                                        aria-hidden="true"
                                        height="14"
                                        className=" text-splash"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                    <span>{feature}</span>
                                  </li>
                                )
                              )}
                              <li className="d-flex align-items-center gap-2 py-1">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#f2330d"
                                    aria-hidden="true"
                                    height="14"
                                    className=" text-splash"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    ></path>
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
              <Tab
                eventKey="Yearly Billing"
                title={t?.Toggle_1 || "Yearly Billing"}
                className="border-0"
              >
                <div className="packages my-5">
                  <div className="container-fluid">
                    <div className="row">
                      {pricingData?.data?.map((plan) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-sm-6"
                          key={plan.id}
                        >
                          <div className="border p-4 package-box rounded-4 mb-3">
                            <h5 className="package-name fw-600">
                              {plan.name} Plan
                            </h5>
                            <div className="price-div mt-3 d-flex align-items-center gap-2 flex-lg-wrap">
                              {/* <div className='d-flex align-items-center gap-2'>
                                                            <span className='text-xs'> <span>{pricingData?.currency}</span> {parseFloat(plan.price).toFixed(2)}/</span>
                                                            <span>month</span>
                                                        </div> */}
                              <div className="d-flex align-items-center gap-2">
                                <span>
                                  <span>{pricingData?.currency}</span>{" "}
                                  {parseFloat(plan.price).toFixed(2)}
                                </span>
                                <span>/ year</span>
                              </div>
                            </div>
                            <p className="off-text">20% off billed annually</p>
                            <button
                              className="bg-dark border mt-3 mb-1 p-2 rounded text-white w-100"
                              onClick={() => handlePaymentSubscription(plan.id)}
                            >
                              Subscribe
                            </button>
                            <a className="d-block text-center text-dark text-decoration-none">
                              <span>{t?.T_1 || "View monthly billing"}</span>
                            </a>
                            <ul className="offer-list list-unstyled py-5">
                              {JSON.parse(plan.features).map(
                                (feature, index) => (
                                  <li
                                    key={index}
                                    className="d-flex align-items-center gap-2 py-1"
                                  >
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="#f2330d"
                                        aria-hidden="true"
                                        height="14"
                                        className=" text-splash"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                    <span>{feature}</span>
                                  </li>
                                )
                              )}
                              <li className="d-flex align-items-center gap-2 py-1">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#f2330d"
                                    aria-hidden="true"
                                    height="14"
                                    className=" text-splash"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    ></path>
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
            </Tabs>
          )}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
export default Subscription;
