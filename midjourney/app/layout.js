// /app/layout.js
"use client";
import React, {useEffect , useState} from 'react'
import Sidebar from './component/sidebar/sidebar'
import AuthModal from './component/auth-modal/page'
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import dynamic from 'next/dynamic'




export default function RootLayout({ children }) {
	const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });
	useEffect(() => {
		BootstrapJS();
	  }, []);
	const [show, setShow] = useState(false);
	const [auth,setAuth] = useState(false);

	const handleClose = () => {
		setShow(false);
	};
	const handleShow = () => {
		auth ? setShow(false) : setShow(true);
	};
	return (
		<html lang="en">
			<body>
				<div className="main-wrapper d-flex">
					<Sidebar showModal={handleShow}/>
					{children}
					<AuthModal showModal={show} handleCloseAuthModal={handleClose}/>
				</div>
			</body>
		</html>
	)
}