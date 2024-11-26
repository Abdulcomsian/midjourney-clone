"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { registerUser } from "../../../utils/api"; // Import your registerUser function
import { useDispatch, useSelector } from "react-redux";
import { closeRegisterModal } from "../../../features/modalSlice";

import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { registerGoogleUser } from "../../../utils/api";
import { socialLogin } from "../../../features/auth/authSlice";
import toast from "react-hot-toast";

function RegisterModal({ showRegisterModal, handleCloseRegisterModal }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const showModalState = useSelector((state) => state.modal.showRegisterModal);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    language: "",
    country: "",
  });
  const [loading, setLoading] = useState(false); // To show a loading state
  const [error, setError] = useState(""); // To display any error
  const [countryMap, setCountryMap] = useState({}); // Country mapping
  const [details, setDetails] = useState(null); // User location details
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const handleCloseAuthModalState = () => dispatch(closeRegisterModal());
  // Fetch all country names and codes
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const map = {};
        data.forEach((country) => {
          const { cca2, name } = country; // cca2 is the country code
          map[cca2] = name.common; // Store the common name
        });
        setCountryMap(map); // Save the country map in state
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  // Fetch user's country based on IP
  useEffect(() => {
    fetch("https://ipinfo.io/json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        setDetails(data);

        if (data && data.country) {
          const countryName = countryMap[data.country] || data.country; // Get the full country name
          setFormData((prev) => ({
            ...prev,
            country: countryName, // Set the country name as default
          }));
        }
      })
      .catch((err) => console.error("Error fetching IP info:", err));
  }, [countryMap]);

  // Handle form changes
  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset any previous error

    try {
      const result = await registerUser(formData); // Call the register API
      console.log("register api resp", result);
      if (result && !result.error) {
        if (result.email) {
          // I have make this block that there is no way alterate wahy to handle that error if there is already have account registerd with the same email
          setError(result.email);
          return;
        }
        // If registration is successful, redirect or show success message
        console.log("here");
        if (result.password) {
          toast.error(result.password);
          return;
        }
        if (result.message) {
          toast.success(result.message);
          router.push("/"); // Redirect to a protected route
          dispatch(closeRegisterModal());
        }
      } else {
        console.log("here1");
        setError(result.error || "Registration failed");
        console.log("Error", result);
      }
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("Code response", codeResponse);

      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json()) // Parse the JSON response
        .then(async (data) => {
          console.log("Data", data);
          try {
            const result = await registerGoogleUser(
              data,
              codeResponse.access_token
            ); // Call the register API

            if (result && !result.error) {
              console.log("Result Data", result);
              dispatch(
                socialLogin({
                  user: result.user,
                  token: result.access_token,
                })
              );
              handleCloseAuthModalState(); // Close modal on successful login

              router.push("/");
              router.reload();
              // If registration is successful, redirect or show success message
            } else {
              setError(result.error || "Registration failed");
              console.log("Error", result);
            }
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
          setProfile(data); // Update state with profile data
        })
        .catch((err) => console.log(err));
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <Modal show={showModalState} onHide={handleCloseAuthModalState} centered>
      <Modal.Header closeButton className="custom-input">
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-input">
        {error && <p className="text-danger">{error}</p>}{" "}
        {/* Display any error */}
        <Form onSubmit={handleSubmit}>
          {/* Username */}
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              className="custom-input"
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="custom-input"
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="custom-input"
            />
          </Form.Group>

          {/* Language */}
          <Form.Group className="mb-3" controlId="formBasicLanguage">
            <Form.Label>Preferred Language</Form.Label>
            <Form.Control
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="Enter language"
              required
              className="custom-input"
            />
          </Form.Group>

          {/* Country */}
          <Form.Group className="mb-3" controlId="formBasicCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={formData.country}
              readOnly // Make the country field readonly
              className="custom-input"
            />
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center py-4">
            <div
              className="flex-grow-1 border-top"
              style={{ borderColor: "gray" }}
            ></div>
            <span className="px-3">Or continue with</span>
            <div
              className="flex-grow-1 border-top"
              style={{ borderColor: "gray" }}
            ></div>
          </div>

          <div className="d-flex gap-3 justify-content-center py-3">
            {/* <Button className="border btn mb-3 p-2 w-100 bg-transparent text-dark d-flex justify-content-center gap-2 align-items-center fs-14">
                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" fill='white'>
                                <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                            </svg></span>
                        </Button>
                        <Button className="border btn mb-3 p-2 w-100 bg-transparent text-dark d-flex justify-content-center gap-2 align-items-center fs-14">
                            <span><svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" stroke="none" stroke-width="1" class="inline-block undefined" xmlns="http://www.w3.org/2000/svg"><g id="GoogleLogo"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></g></svg></span>
                        </Button> */}

            <Button
              onClick={googleLogin}
              className="border btn mb-3 p-2 w-100 bg-transparent text-dark d-flex justify-content-center gap-2 align-items-center fs-14"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  stroke="none"
                  stroke-width="1"
                  class="inline-block undefined"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="GoogleLogo">
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </g>
                </svg>
              </span>
            </Button>
          </div>
          <Button
            variant="warning"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterModal;
