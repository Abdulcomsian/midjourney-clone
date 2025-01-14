"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../features/languageSlice";
import translations from "../../../i18";
import eventEmitter from "../../../utils/eventEmitter";
import { LuEraser } from "react-icons/lu";
import Link from "next/link";
import Pusher from "pusher-js";
import { Alert } from "react-bootstrap";
import toast from "react-hot-toast";
import {
  getImageCreatedImages,
  getImageCreatingId,
  getServiceType,
} from "../../../utils/api";
import Button from "../Button";

function TopSearch({ showCreativeModal }) {
  const [serviceTypes, setServiceTypes] = useState([]);
  const [selectedService, setSeletectService] = useState(1);
  const [showDetailPrompt, setShowDetailPrompt] = useState(false);
  const [darkThemeMode, setDarkThemeMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [prompt, setPrompt] = useState("");
  const [iscreatingId, setIsCreatingId] = useState(false);
  const [paymentMethodsData, setPaymentMethodData] = useState(null);
  const [imageGenerationId, setImageGenerationId] = useState(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);

  const [showImageLoadingNotification, setShowImageLoadingNotification] =
    useState(null);

  const { token, user_id } = useSelector((state) => state.auth);

  useEffect(() => {
    try {
      const fetchSubscriptionStatus = async function () {
        const paymentResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscription/status`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("payment resp", paymentResponse);
        if (!paymentResponse.ok) {
          throw new Error("Failed to fetch payment methods data");
        }
        const paymentMethodsData = await paymentResponse.json();
        // console.log("payment status data:", paymentMethodsData);
        setPaymentMethodData(paymentMethodsData);
      };

      if (token) fetchSubscriptionStatus();
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const hasScubscription =
    paymentMethodsData?.data?.current_subscription !== null;
  console.log("Payment Data", paymentMethodsData);

  // console.log(hasScubscription, "hasScubscription")
  const promptRef = useRef(null);

  const handleClearTextArea = () => {
    setPrompt("");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClearTextArea();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();

  const languageOptions = [
    { label: "English", code: "en" },
    { label: "French", code: "fr" },
    { label: "Amharic", code: "am" },
    { label: "Afaan Oromo", code: "or" },
    { label: "Somali", code: "so" },
    { label: "Swahili", code: "sw" },
    { label: "Indonesian", code: "id" },
    { label: "Arabic", code: "ar" },
    { label: "Spanish", code: "es" },
  ];

  const [selected, setSelected] = useState(selectedLanguage);

  useEffect(() => {
    // Update Redux state when the selected language changes
    dispatch(setLanguage(selected));
  }, [selected, dispatch]);

  useEffect(() => {
    // Update the selected value if it changes in Redux
    setSelected(selectedLanguage);
  }, [selectedLanguage]);

  const t = translations[selectedLanguage];

  // Determine text color based on theme mode
  useEffect(() => {
    // Listen for theme changes
    const handleThemeChange = (newTheme) => {
      setDarkThemeMode(newTheme === "dark");
    };

    eventEmitter.subscribe("themeChange", handleThemeChange);

    // Cleanup listener on unmount
    return () => {
      eventEmitter.unsubscribe("themeChange", handleThemeChange);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (promptRef.current && !promptRef.current.contains(event.target)) {
      setShowDetailPrompt(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    async function fetchServiceType() {
      const resp = await getServiceType();
      console.log(resp, "serviceType");
      if (resp.status === "success") {
        setServiceTypes(resp.data);
      }
    }
    fetchServiceType();
  }, []);

  const [activeButton, setActiveButton] = useState("public");
  const buttons = [
    { label: "Public", value: "public" },
    { label: "Private", value: "private" },
  ];

  const handleClick = (index) => {
    setActiveButton(index); // Set the clicked button as active
  };

  const selectTextColor = darkThemeMode ? "text-white" : "text-black";

  const pusherRef = useRef(null);
  const channelRef = useRef(null);

  // Initialize Pusher connection once
  const initializePusher = () => {
    pusherRef.current = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: "ap2",
      forceTLS: true,
      authEndpoint: "https://stage.footo.ai/api/pusher/auth",
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });

    const channelName = `private-footo.user.${user_id}`;
    channelRef.current = pusherRef.current.subscribe(channelName);
    Pusher.logToConsole = true;
    console.log("Channel subscribed:", channelRef.current);

    channelRef.current.bind("image-event", (data) => {
      console.log("Received image event:", data);
      setGeneratedImageUrl(data.url);
    });

    pusherRef.current.connection.bind("connected", () =>
      console.log("Pusher connection established.")
    );

    pusherRef.current.connection.bind("error", (err) =>
      console.error("Pusher connection error:", err)
    );

    pusherRef.current.connection.bind("disconnected", () =>
      console.warn("Pusher connection disconnected.")
    );
  };
  useEffect(() => {
    initializePusher();

    return () => {
      if (channelRef.current) {
        channelRef.current.unbind_all();
        channelRef.current.unsubscribe();
      }
      if (pusherRef.current) {
        pusherRef.current.disconnect();
      }
    };
  }, []);

  const bindImageEvent = (jobId) => {
    if (!channelRef.current) return;

    channelRef.current.bind("image-event", async (data) => {
      console.log("event data:", data);
      if (data.job_id) {
        try {
          const response = await getImageCreatedImages(jobId);
          if (response.status === "success") {
            setGeneratedImageUrl(response.data.url);
            setShowImageLoadingNotification(false);
          }
        } catch (error) {
          console.error("Error fetching generated images:", error);
        }
      }
    });
  };

  // const handleImageGeneration = async () => {
  //   try {
  //     setIsCreatingId(true);
  //     const resp = await getImageCreatingId({
  //       prompt,
  //       service_type: `${selectedService}`,
  //       visibility: "public",
  //     });

  //     if (resp.job_id) {
  //       setImageGenerationId(resp.job_id);
  //       console.log("Job ID:", resp.job_id);
  //       setPrompt("");
  //       setShowImageLoadingNotification(true);
  //       setShowDetailPrompt(false);

  //       bindImageEvent(resp.job_id);
  //     }
  //   } catch (error) {
  //     console.error("Error generating image ID:", error);
  //   } finally {
  //     setIsCreatingId(false);
  //   }
  // };
  const handleImageGeneration = async () => {
    try {
      if (
        paymentMethodsData?.data?.credit_balance <
        serviceTypes.find((service) => service.id === selectedService)
          ?.credit_cost
      ) {
        // Show alert if balance is less than the credit cost
        setShowImageLoadingNotification(false);
        toast.error("You do not have enough credits to generate this image.");
        return;
      }

      setIsCreatingId(true);
      const resp = await getImageCreatingId({
        prompt,
        service_type: `${selectedService}`,
        visibility: "public",
      });

      if (resp.job_id) {
        setImageGenerationId(resp.job_id);
        console.log("Job ID:", resp.job_id);
        setPrompt("");
        setShowImageLoadingNotification(true);
        setShowDetailPrompt(false);

        bindImageEvent(resp.job_id);
      }
    } catch (error) {
      console.error("Error generating image ID:", error);
    } finally {
      setIsCreatingId(false);
    }
  };
  return (
    <header>
      {imageGenerationId && showImageLoadingNotification && (
        <Alert
          className="position-absolute"
          style={{ top: "10px", right: "-38px", zIndex: 10 }}
          key="info"
          variant="info"
          onClose={() => setShowImageLoadingNotification(false)}
          dismissible
        >
          <div>
            {generatedImageUrl ? (
              <>
                <p>Image generated successfully!</p>
                <Link href="/account/my-images">
                  <img
                    src={generatedImageUrl}
                    alt="img"
                    style={{
                      width: "50px",
                      height: "auto",
                      cursor: "pointer",
                      borderRadius: "8px",
                    }}
                  />
                </Link>
              </>
            ) : (
              <p>Image generation queued successfully</p>
            )}
          </div>
        </Alert>
      )}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex gap-2 align-items-center">
              <div
                className="search-bar z-10 py-3 px-4 w-100 position-relative"
                onClick={() =>
                  hasScubscription
                    ? setShowDetailPrompt(true)
                    : showCreativeModal()
                }
              >
                {!showDetailPrompt ? (
                  <form className="mb-0">
                    <div className="upload-file d-flex justify-content-between align-items-center position-relative gap-3">
                      <input type="file" />
                      <span className="icon opacity-25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </span>
                      <input
                        className="w-100 border-0 opacity-50"
                        placeholder={
                          hasScubscription
                            ? "Type your idea here to generate an image"
                            : t?.searchPlaceholder ||
                              "Subscribe to start creating …"
                        }
                        value={prompt}
                      />
                      <span className="icon opacity-25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="rotate-90"
                          height="24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </form>
                ) : (
                  <>
                    <div
                      ref={promptRef}
                      className="py-3 px-4 w-100 position-absolute top-0 start-0 bg-white search-bar"
                    >
                      <Button
                        disabled={!prompt}
                        onClick={handleImageGeneration}
                        className="c-btn-primary btn-generate-image"
                      >
                        {iscreatingId ? "Generating..." : "Generate"}
                      </Button>
                      <div className="credit_info">
                        {serviceTypes?.map((service) => (
                          <div>
                            {selectedService === service.id ? (
                              <span>
                                Uses <b>{service.credit_cost}</b> credits{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="currentColor"
                                  class="bi bi-info-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg>
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                      </div>
                      <textarea
                        className="position-relative border-0 no-focus mb-4"
                        rows={10}
                        style={{ resize: "none", width: "80%", zIndex: 2000 }}
                        placeholder="Describe what you want to see..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                      ></textarea>
                      {prompt.length > 0 && (
                        <span
                          className="position-absolute top-5 right-5 py-2"
                          onClick={handleClearTextArea}
                          style={{
                            cursor: "pointer",
                            marginLeft: "10px",
                          }}
                        >
                          <LuEraser color="black" />
                        </span>
                      )}
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          {serviceTypes?.map((service) => (
                            <button
                              key={service.id}
                              type="button"
                              class={`btn btn-sm ${
                                selectedService === service.id
                                  ? "btn-secondary border-secondary"
                                  : "btn-light"
                              }  border border-2`}
                              onClick={() => setSeletectService(service.id)}
                            >
                              {service.service_name}
                            </button>
                          ))}
                        </div>
                        <div className="btn-group">
                          {buttons.map((button, index) => (
                            <button
                              key={index}
                              type="button"
                              className={`btn btn-secondary ${
                                activeButton === button.value ? "active" : ""
                              }`}
                              onClick={() => handleClick(button.value)} // Set active on click
                            >
                              {button.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="multi-language-dropdown">
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className={`form-select bg-transparent p-2 border rounded shadow-sm ${selectTextColor}`}
                  style={{ minWidth: "150px", cursor: "pointer" }}
                >
                  {languageOptions.map((option) => (
                    <option
                      key={option.code}
                      value={option.code}
                      style={{
                        backgroundColor: darkThemeMode ? "black" : "white",
                        color: darkThemeMode ? "white" : "black",
                      }}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopSearch;
