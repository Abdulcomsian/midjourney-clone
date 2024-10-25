'use client'
// app/layout.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './rootlayout';

export default function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <RootLayout>{children}</RootLayout>
    </Provider>
  );
}
