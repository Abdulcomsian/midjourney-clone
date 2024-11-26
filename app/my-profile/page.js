"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import translations from "../../i18";
import BottomNav from "../component/bottom-nav/bottom-nav";
function MyProfile() {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const t = translations[selectedLanguage];
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      fetchProfileData();
    }
  }, [token]);

  const fetchProfileData = async () => {
    try {
      const response = await fetch("https://stage-admin.footo.ai/api/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch profile data");
      }

      const data = await response.json();
      console.log("profile data", data);
      setProfileData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Conditionally render content based on subscription status

  // Show loading indicator when data is being fetched
  if (loading) {
    return (
      <div className="content-wrapper">
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>{" "}
            {/* This text is for screen readers */}
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="content-wrapper">
        <div className="text-center my-5 text-danger">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="subscription-wrapper pt-5 overflow-auto common-section">
          <div className="text-center mb-4">
            <h2 className="text-secondary">Manage Profile</h2>
            <div className="text-secondary mt-2">
              Edit your profile and concerned Accounts
            </div>
          </div>
          <div className="packages my-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 ">
                  <h5 className="text-secondary text-uppercase">
                    Account Details
                  </h5>
                  {/* {renderSubscriptionContent()} */}
                  <div className="d-flex flex-column gap-3 py-4">
                    <div className="d-flex justify-content-between border-bottom border-dark py-2">
                      <p className="text-secondary">User name</p>
                      <p className="text-secondary">
                        {profileData.username || "--"}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between border-bottom border-dark py-2">
                      <p className="text-secondary">Name</p>
                      <p className="text-secondary">
                        {profileData.name || "--"}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between border-bottom border-dark py-2">
                      <p className="text-secondary">Email</p>
                      <p className="text-secondary">{profileData.email}</p>
                    </div>
                    <div className="d-flex justify-content-between  border-bottom border-dark py-2">
                      <p className="text-secondary">Registered Date</p>
                      <p className="text-secondary">{profileData.registered}</p>
                    </div>
                  </div>
                </div>

                <pre></pre>
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
