"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import AuthModal from "./component/auth-modal/page";
import Sidebar from "./component/sidebar/sidebar";
import { useRouter } from "next/navigation";
import "./global.css";
import RegisterModal from "./component/register-modal/page";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import LandingPage from "./landing-page/page";
import { GoogleOAuthProvider } from "@react-oauth/google";
import eventEmitter from "../utils/eventEmitter";

function LayoutContent({ children, toggleTheme }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  console.log("IS Authenticated", isAuthenticated);
  useEffect(() => {
    if (isAuthenticated && router.pathname === "/") {
      router.push("/"); // Redirect only if already on the landing page
    }
  }, [isAuthenticated, router]);
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => {
    console.log("Clicked", "modal shuld be open");

    setShow(false);
  };
  const handleShow = () => {
    console.log("Clicked", "modal shuld be open");
    setShow(true);
  };

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  return (
    <>
      {isAuthenticated ? (
        <div
          className="main-wrapper d-flex"
          style={{ overflowY: "auto", height: "100vh", width: "100%" }}
        >
          <Sidebar
            showModal={handleShow}
            showRegisterModal={handleRegisterShow}
            darkModeHandle={toggleTheme}
          />
          {children}
          <AuthModal showModal={show} handleCloseAuthModal={handleClose} />
          <RegisterModal
            showRegisterModal={showRegister}
            handleCloseRegisterModal={handleRegisterClose}
          />
        </div>
      ) : (
        <>
          <LandingPage
            showModal={handleShow}
            showRegisterModal={handleRegisterShow}
          />
          <AuthModal showModal={show} handleCloseAuthModal={handleClose} />
          <RegisterModal showModal={show} handleCloseAuthModal={handleClose} />
        </>
      )}
    </>
  );
}

export default function RootLayout({ children }) {
  const BootstrapJS = dynamic(
    () => import("bootstrap/dist/js/bootstrap.bundle.min.js"),
    { ssr: false }
  );

  const [darkThemeMode, setDarkThemeMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return true;
  });
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    BootstrapJS();

    const updateTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setDarkThemeMode(savedTheme === "dark");
      }
    };

    if (typeof window !== "undefined") {
      updateTheme();
      window.addEventListener("storage", updateTheme);
    }

    setIsThemeReady(true);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", updateTheme);
      }
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = darkThemeMode ? "light" : "dark";
    setDarkThemeMode(!darkThemeMode);
    localStorage.setItem("theme", newTheme);
    eventEmitter.emit("themeChange", newTheme);
  };

  if (!isThemeReady) {
    return null; // Or a loading spinner
  }

  return (
    <html lang="en">
      <body
        className={darkThemeMode ? "dark-mode" : "light-mode"}
        style={{ overflowY: "auto", height: "100vh" }}
      >
        <GoogleOAuthProvider clientId="404893580446-h7n8c6nqhh4psq4dqa9ab50ad8hvjrlk.apps.googleusercontent.com">
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <LayoutContent children={children} toggleTheme={toggleTheme} />
            </PersistGate>
          </Provider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
