'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/themeslice';
import Sidebar from './component/sidebar/sidebar';
import AuthModal from './component/auth-modal/page';
import dynamic from 'next/dynamic';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
    const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);

    React.useEffect(() => {
        BootstrapJS();
    }, []);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const [show, setShow] = React.useState(false);
    const [auth, setAuth] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => (auth ? setShow(false) : setShow(true));

    return (
        <html lang="en">
            <body className={darkMode ? 'dark-mode' : 'light-mode'}>
                <div className="main-wrapper d-flex">
                    <Sidebar showModal={handleShow} darkModeHandle={handleToggleTheme} />
                    {children}
                    <AuthModal showModal={show} handleCloseAuthModal={handleClose} />
                </div>
            </body>
        </html>
    );
}
