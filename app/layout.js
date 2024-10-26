// /app/layout.js

'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from './component/sidebar/sidebar'
import AuthModal from './component/auth-modal/page'

import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import dynamic from 'next/dynamic'
const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });
export default function RootLayout({ children }) {

  useEffect(() => {
    BootstrapJS();
  }, []);
  const [show, setShow] = useState(false);
  const [darkThemeMode, setDarkThemeMode] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    auth ? setShow(false) : setShow(true);
  };
  const darkMode = () => {
    setDarkThemeMode(true);
  }
  return (
    <html lang="en">
      <body className={darkThemeMode ? 'dark-mode' : 'light-mode'}>
        <div className="main-wrapper d-flex">
          <Sidebar showModal={handleShow} darkModeHandle={darkMode} />
          {children}
          <AuthModal showModal={show} handleCloseAuthModal={handleClose} />
        </div>
      </body>
    </html>
  )
}