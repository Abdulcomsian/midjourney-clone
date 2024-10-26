'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from './component/sidebar/sidebar'
import AuthModal from './component/auth-modal/page'
import $ from 'jquery';
import Popper from 'popper.js';
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import dynamic from 'next/dynamic'

export default function RootLayout({ children }) {
  const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });

  // State to manage dark theme mode and loading state
  const [darkThemeMode, setDarkThemeMode] = useState(true);
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(false);
  const [isThemeReady, setIsThemeReady] = useState(false); // To prevent initial flicker

  // Set dark or light mode based on user preference or system setting
  useEffect(() => {
    BootstrapJS();

    // Check user's saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkThemeMode(savedTheme === 'dark');
    } else {
      // Fallback to system preference if no theme is saved
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkThemeMode(systemPrefersDark || true); // Default to dark mode
    }

    // Mark theme as ready to prevent initial flicker
    setIsThemeReady(true);
  }, []);

  // Function to toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = !darkThemeMode ? 'dark' : 'light';
    setDarkThemeMode(!darkThemeMode);
    // Save user preference in localStorage
    localStorage.setItem('theme', newTheme);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => auth ? setShow(false) : setShow(true);

  // Avoid rendering until the theme is ready
  if (!isThemeReady) {
    return null; // Or you can return a loader here
  }

  return (
    <html lang="en">
      <body className={darkThemeMode ? 'dark-mode' : 'light-mode'}>
        <div className="main-wrapper d-flex">
          {/* Pass toggleTheme function to Sidebar to handle theme change */}
          <Sidebar showModal={handleShow} darkModeHandle={toggleTheme} />
          {children}
          <AuthModal showModal={show} handleCloseAuthModal={handleClose} />
        </div>
      </body>
    </html>
  );
}