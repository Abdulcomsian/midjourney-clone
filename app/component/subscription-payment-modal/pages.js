"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { closeSubscriptionModal } from "../../../features/modalSlice";
import { paymentInitialization } from "../../../features/apiSlice";

function SubcriptionModal() {
  const showModalState = useSelector(
    (state) => state.modal.showSubscriptionModal
  );
  const dispatch = useDispatch();
  const handleCloseSubscriptionModalState = () =>
    dispatch(closeSubscriptionModal());

  const { paymentMethod, errorPaymentMethod, paymentInitializationURL } =
    useSelector((state) => state.api);
  const [loading, setLoading] = useState(false); // Track loading state
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  const handlePaymentMethodChange = (item) => {
    setSelectedPaymentMethod(item); // Update the state with the selected payment method
  };

  const paymentIntilaziationHandling = async () => {
    if (!selectedPaymentMethod) return; // Ensure a payment method is selected
    setLoading(true); // Set loading to true

    try {
      await dispatch(
        paymentInitialization({
          paymentIntilizationEndPoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/payments/initialize`,
          token,
          selectedPaymentMethod,
        })
      );
    } catch (error) {
      console.error("Payment initialization error:", error);
    } finally {
      setLoading(false); // Set loading to false after API response
    }
  };

  // Log `loading` state changes
  useEffect(() => {
    console.log("Loading state:", loading);
  }, [loading]);

  useEffect(() => {
    if (paymentInitializationURL) {
      const Url = paymentInitializationURL;
      router.push(Url); // Redirect to the protected route after login
      router.refresh();
    }
  }, [paymentInitializationURL, router]);

  return (
    <Modal
      show={showModalState}
      onHide={handleCloseSubscriptionModalState}
      centered
    >
      <Modal.Header closeButton className="custom-input text-white">
        <Modal.Title>Payment Method</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-input">
        {errorPaymentMethod ? (
          <p className="text-center">{errorPaymentMethod}</p>
        ) : paymentMethod.paymentMethod.methods.length > 0 ? (
          <>
            {paymentMethod.paymentMethod.methods.map((item, index) => (
              <div key={index} className="d-flex align-items-center gap-2 mb-3">
                <figure style={{ margin: "0" }}>
                  <img
                    // src="https://stage.footo.ai/assets/images/payment-methods/chapapay.svg"
                    src = {`${item.icon}`}
                    alt={`${item} logo`}
                    style={{ width: 80 }}
                  />
                </figure>
                <Form.Check // prettier-ignore
                  type="radio"
                  id={`default-${index}`}
                  name="paymentMethod"
                  label={item.name}
                  className="mb-0"
                  onChange={() =>
                    handlePaymentMethodChange(item.name.toLowerCase())
                  }
                />
              </div>
            ))}
            <Button
              className="w-100 btn-warning"
              onClick={paymentIntilaziationHandling}
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm me-2" />
              ) : (
                "Pay Now"
              )}
            </Button>
          </>
        ) : (
          <p>No Payment Method is Available.</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default SubcriptionModal;
