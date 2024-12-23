"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../features/languageSlice";
import translations from "../../../i18";
import eventEmitter from "../../../utils/eventEmitter";
import PromptBox from "../promptbox";
import {
  getImageCreatedImages,
  getImageCreatingId,
  getServiceType,
} from "../../../utils/api";
import Button from "../Button";
import { error } from "jquery";
import {
  fetchPricingAndPaymentData,
  resetState,
} from "../../../features/apiSlice";
import Notification from "../Notification";
import { Alert } from "react-bootstrap";
import Pusher from "pusher-js";
import Link from "next/link";

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

  const promptRef = useRef(null);
  // Function to handle theme change detection

  // Read theme from localStorage on component mount and add a listener for changes

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
      authEndpoint: 'https://stage.footo.ai/api/pusher/auth',
      auth: {
        headers: {
          Authorization : `Bearer ${token}`,
        }
      }
    });

    const channelName = `private-footo.user.${user_id}`;
    channelRef.current = pusherRef.current.subscribe(channelName);
    Pusher.logToConsole = true;
    console.log("Channel subscribed:", channelRef.current);

    channelRef.current.bind("image-event", (data) => {
      console.log("Received image event:", data);
      setGeneratedImageUrl(data.url)
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
  }, [])

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

  const handleImageGeneration = async () => {
    try {
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
          onClose={() => setShowImageLoadingNotification(false)} dismissible
        >
          <div>
            
            {generatedImageUrl ?
            <><p>Image generated successfully!</p><Link href="/account/my-images">
                <img
                  src={generatedImageUrl}
                  alt="img"
                  style={{
                    width: "50px",
                    height: "auto",
                    cursor: "pointer",
                    borderRadius: "8px",
                  }} />
              </Link></>
              :<p>Image generation queued successfully</p>}
              
          
          </div>
        </Alert>
      )}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex gap-2 align-items-center">
              <div
                className="search-bar py-3 px-4 w-100 position-relative"
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
                        placeholder={t?.searchPlaceholder || "Search..."}
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
                      <textarea
                        className=" border-0 no-focus mb-4"
                        rows={10}
                        style={{ resize: "none", width: "80%" }}
                        placeholder="Describe what you want to see..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                      ></textarea>
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
