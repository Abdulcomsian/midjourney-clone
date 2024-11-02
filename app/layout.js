'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import AuthModal from './component/auth-modal/page';
import Sidebar from './component/sidebar/sidebar';
import './global.css';
import RegisterModal from './component/register-modal/page';
import { Provider } from 'react-redux';
import store from '../store/store';
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
  const [showRegister, setShowRegister] = useState(false);
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

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => (auth ? setShowRegister(false) : setShowRegister(true));

  if (!isThemeReady) {
    return null; // Or a loader
  }

  return (
    <html lang="en">
      <body className={darkThemeMode ? 'dark-mode' : 'light-mode'} style={{ overflowY: 'auto', height: '100vh' }}>
        <Provider store={store}>
          <div className="main-wrapper d-flex" style={{ overflowY: 'auto', height: '100vh', width: '100%' }}>
            <Sidebar showModal={handleShow} showRegisterModal={handleRegisterShow} darkModeHandle={toggleTheme} />
            {children}
            <AuthModal showModal={show} handleCloseAuthModal={handleClose} />
            <RegisterModal showRegisterModal={showRegister} handleCloseRegisterModal={handleRegisterClose} />
          </div>
        </Provider>
      </body>
    </html>
  );
}
