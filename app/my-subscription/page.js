"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPaymentMethod,
  fetchPricingAndPaymentData,
  resetState,
} from "../../features/apiSlice";
import { openSubscriptionModal } from "../../features/modalSlice";
import { useRouter } from "next/navigation"; // Import useRouter
import translations from "../../i18";
import BottomNav from "../component/bottom-nav/bottom-nav";
import toast from "react-hot-toast";
function MySubscription() {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize useRouter
  const { token } = useSelector((state) => state.auth);
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const t = translations[selectedLanguage];

  const {
    pricingData,
    paymentMethodsData,
    loading,
    error,
    paymentMethod,
    errorPaymentMethod,
  } = useSelector((state) => state.api);

  console.log("payment method data", paymentMethodsData);

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
  const handleCancelPlan = async () => {
    if (!token) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscription/cancel`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        // Optionally refetch subscription data to update UI
        dispatch(
          fetchPricingAndPaymentData({
            pricingEndpoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pricing`,
            paymentEndpoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscription/status`,
            token,
          })
        );
        router.push("/subscription");
      } else {
        console.error("Failed to cancel subscription:", response.statusText);
      }
    } catch (error) {
      console.error("Error canceling subscription:", error);
    }
  };

  // Conditionally render content based on subscription status
  const renderSubscriptionContent = () => {
    const status = paymentMethodsData?.status;
    const cusrrentSubscription = paymentMethodsData?.data.current_subscription;
    if (status === "success" && cusrrentSubscription !== null) {
      const { current_subscription } = paymentMethodsData?.data;
      return (
        <div className="">
          {/* Card for Subscription Details */}
          <div className="d-flex justify-content-between  mb-2">
            <div className="package-container">
              <h5 className="package-name fw-600 ">
                Your{" "}
                {current_subscription?.package_details?.name ||
                  "Subscription Plan"}{" "}
                Plan <span className=" rounded-full active-btn">Active</span>
              </h5>
            </div>

            <div className="btn-container">
              <button
                type="button"
                clas="btn-custom"
                onClick={handleCancelPlan}
                style={{
                  backgroundColor: "#3f3f3f",
                  color: "white",
                  marginRight: "12px",
                  borderRadius: "24px",
                  border: "none",
                  padding: "7px 14px",
                }}
              >
                Cancel plan{" "}
              </button>
              <button
                type="button"
                clas="btn-custom"
                style={{
                  backgroundColor: "#3f3f3f",
                  color: "white",
                  marginRight: "12px",
                  borderRadius: "24px",
                  border: "none",
                  padding: "7px 14px",
                }}
              >
                Upgrade plan{" "}
              </button>
            </div>
          </div>

          <div className="d-flex grid  ">
            <div className="d-flex flex-column m-2 w-100 ">
              <div className="border p-4 rounded-4  ">
                <h5 className="fw-bold text-secondary">Usage Details </h5>
                <h6 className="fw-bold text-secondary mt-4">
                  Remaining Fast hours:
                </h6>

                <div class="text-container">
                  <div className="d-flex justify-content-between">
                    <div className="text-secondary">
                      Credit Balance{" "}
                      <span class="ml-4">
                        {paymentMethodsData?.data.credit_balance}
                      </span>
                    </div>
                    {/* <div className="text-secondary"> */}
                    {/* {
current_subscription
.currency_code} */}

                    {/* </div> */}
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="text-secondary">Purchases & Awarded</div>
                    <div className="text-secondary">
                      {current_subscription?.credit_balance}
                    </div>
                  </div>
                </div>
                {/* <div className='price-div  d-flex align-items-center gap-2 text-secondary'>
                                    <span className='text-secondary'></span>
                                    <span className='text-secondary'></span>
                                    <span className='text-secondary'>Amount</span>
                                </div> */}
                <p className="off-text text-secondary">
                  Your subscription is active until{" "}
                  <span className="ml-4">
                    {new Date(
                      current_subscription?.expiry_date
                    ).toLocaleDateString()}
                  </span>
                </p>
                <button className="btn btn-buy  ">Buy more Fast hours</button>
              </div>
            </div>

            {/* Card for Plan Features */}
            <div className="border p-4 rounded-4 m-2  w-100">
              <h5 className="fw-bold text-secondary">Basic Plan Features</h5>

              <ul className="list-unstyled text-secondary pt-4">
                {Array.isArray(current_subscription.package_details?.features)
                  ? current_subscription.package_details?.features.map(
                      (feature, index) => (
                        <li key={index}>
                          <span className="text-success">✔</span> {feature}
                        </li>
                      )
                    )
                  : JSON.parse(
                      current_subscription.package_details?.features || "[]"
                    ).map((feature, index) => (
                      <li key={index}>
                        <span className="text-success">✔</span> {feature}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            padding: "10px",
            borderRadius: "100px",
            border: "1px solid red",
            textAlign: "center",
            width: "50%",
            margin: "auto",
          }}
        >
          <span
            style={{
              color: "red",
              fontSize: "1.1rem",
            }}
          >
            You don't have any active subscription. To Subscribe a package,{" "}
            <a
              style={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
              href="/subscription"
            >
              click here
            </a>
            .
          </span>
        </div>
      );
    }
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
      <div className="content-wrapper">
        <div className="subscription-wrapper pt-5 overflow-auto common-section">
          <div className="text-center mb-4">
            <h2 className="text-secondary">Manage Subscription</h2>
            <div className="text-secondary mt-2">
              Choose the plan that works for you
            </div>
          </div>
          <div className="packages my-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10">
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
