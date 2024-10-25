'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from './component/sidebar/sidebar';
import AuthModal from './component/auth-modal/page';
import dynamic from 'next/dynamic';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });

  const [darkThemeMode, setDarkThemeMode] = useState(() => {
    // Check if in the browser environment
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      } else {
        // Set default to dark mode if no theme is found
        localStorage.setItem('theme', 'dark');
        return true; // Default to dark mode
      }
    }
    return true; // Fallback for server-side rendering
  });

  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(false);
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    BootstrapJS();

    const updateTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkThemeMode(savedTheme === 'dark');
      }
    };

    // Check if in the browser environment
    if (typeof window !== 'undefined') {
      // Initial theme setup
      updateTheme();

      // Add storage event listener for theme changes
      window.addEventListener('storage', updateTheme);
    }

    // Mark theme as ready
    setIsThemeReady(true);

    // Cleanup event listener on unmount
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', updateTheme);
      }
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = darkThemeMode ? 'light' : 'dark';
    setDarkThemeMode(!darkThemeMode);
    localStorage.setItem('theme', newTheme);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => (auth ? setShow(false) : setShow(true));

  if (!isThemeReady) {
    return null; // Or a loader
  }

  return (
    <html lang="en">
      <body className={darkThemeMode ? 'dark-mode' : 'light-mode'}>
        <div className="main-wrapper d-flex">
          <Sidebar showModal={handleShow} darkModeHandle={toggleTheme} />
          {children}
          <AuthModal showModal={show} handleCloseAuthModal={handleClose} />
        </div>
      </body>
    </html>
  );
}
