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

  console.log("errorPaymentMethod", errorPaymentMethod);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();
  const handlePaymentMethodChange = (item) => {
    setSelectedPaymentMethod(item); // Update the state with the selected payment method
  };
  const paymentIntilaziationHandling = () => {
    dispatch(
      paymentInitialization({
        paymentIntilizationEndPoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/payments/initialize`,
        token,
        selectedPaymentMethod,
      })
    );
  };
  useEffect(() => {
    if (paymentInitializationURL) {
      const Url = paymentInitializationURL;
      router.push(Url); // Redirect to the protected route after login
      router.refresh();
    }
  }, [paymentInitializationURL]);
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
            {paymentMethod.paymentMethod.methods.map((item, index) => {
              return (
                <div className="d-flex align-items-center gap-2">
                  <figure>
                    <img src="assets/images/payment-methods/chapapay.svg" />
                  </figure>
                  <Form.Check // prettier-ignore
                    type="radio"
                    id={`default-${index}`}
                    label={item.name}
                    className="mb-3"
                    onChange={() =>
                      handlePaymentMethodChange(item.name.toLowerCase())
                    }
                  />
                </div>
              );
            })}
            <Button
              className="w-100 btn-warning"
              onClick={paymentIntilaziationHandling}
            >
              Pay Now
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
