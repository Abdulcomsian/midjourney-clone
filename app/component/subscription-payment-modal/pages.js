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

  const [phoneNumber, setPhoneNumber] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const [loading, setLoading] = useState(false); // Track loading state
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [phoneError, setPhoneError] = useState(false); // Error state for phone number
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  const handlePaymentMethodChange = (item) => {
    setSelectedPaymentMethod(item); // Update the state with the selected payment method
  };

  const paymentIntilaziationHandling = async () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod.paymentMethod.has_phone_number === 0 && !phoneNumber) {
      setPhoneError(true); // Set error if phone number is required but not filled
      return;
    }

    setPhoneError(false); // Clear error if validation passes
    setLoading(true); // Set loading to true

    try {
      await dispatch(
        paymentInitialization({
          paymentIntilizationEndPoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/payments/initialize`,
          token,
          selectedPaymentMethod,
          phoneNumber,
          promoCode,
        })
      );
    } catch (error) {
      console.error("Payment initialization error:", error);
    } finally {
      setLoading(false); // Set loading to false after API response
    }
  };

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
                    src={`/assets${item.icon}`}
                    alt={`${item.display_name}`}
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

            {paymentMethod.paymentMethod.has_phone_number === 0 && (
              <div className="mb-3">
                <Form.Group>
                  <Form.Label style={{ fontWeight: "bold", fontSize: "18px" }}>
                    Phone Number
                  </Form.Label>
                  <div className="d-flex gap-1 justify-content-center">
                    <span className="input-group-text">
                      {paymentMethod.paymentMethod.phone_prefix}
                    </span>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      isInvalid={phoneError} // Highlight invalid state
                      className="w-50"
                    />
                  </div>
                  {/* Error message displayed below the input field */}
                  {phoneError && (
                    <div className="text-danger mt-1">
                      Phone number is required.
                    </div>
                  )}
                </Form.Group>
              </div>
            )}

            <div className="mb-3">
              <Form.Group>
                <Form.Label
                  className="text-bold"
                  style={{ fontWeight: "bold", fontSize: "18px" }}
                >
                  Promo Code
                </Form.Label>
                <div className="d-flex justify-content-center">
                  <Form.Control
                    type="text"
                    placeholder="Enter Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-50"
                  />
                </div>
              </Form.Group>
            </div>

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
