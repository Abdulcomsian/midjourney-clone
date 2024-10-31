// /app/layout.js
'use client'
import React, {useEffect , useState} from 'react'
import Sidebar from './component/sidebar/sidebar' 
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import dynamic from 'next/dynamic'
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import {thunk} from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";



const persistConfig = {
	key: "auth_data",
	storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
  const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export default function RootLayout({ children }) {
	const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });
	const jQuery = dynamic(() => import('jquery'), { ssr: false });
	const popOver = dynamic(() => import('popper.js'), { ssr: false });
	const AuthModal = dynamic(() => import('./component/auth-modal/page'), { ssr: false });
	useEffect(() => {
		BootstrapJS();
		jQuery();
		popOver();
	  }, []);
	const [show, setShow] = useState(false);
	const [darkThemeMode, setDarkThemeMode] = useState(false);
	const [isAuthModalFlag, setIsAuthModalFlag] = useState ('');
	const [isLogged, setIsLogged] = useState(true);
	const handleClose = () => {
		setShow(false);
	};
	
	const handleShow = (e) => {
		if(e=='login'){
			setIsAuthModalFlag('login')
		} else{
			setIsAuthModalFlag('register')
		}
		setShow(true);
	};
	const darkMode = () =>{
		setDarkThemeMode(true);
	}
	return (
		<html lang="en">
			<body className={darkThemeMode ? 'dark-mode' : 'light-mode'}>
				<div className="main-wrapper d-flex">
					<Provider store={store}>
						<PersistGate persistor={persistor}>
							<Sidebar showModal={handleShow} darkModeHandle={darkMode} userLogin={isLogged}/>
							{children}
							<AuthModal showModal={show} handleCloseAuthModal={handleClose} authFlag={isAuthModalFlag}/>
						</PersistGate>
					</Provider>
				</div>
			</body>
		</html>
	)
}
