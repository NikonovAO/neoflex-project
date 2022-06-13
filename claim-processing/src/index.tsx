import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/homePage';
import RegistrationPage from './pages/registrationPage/registrationPage';
import AuthorizationPage from './pages/authorizationPage/authorizationPage';
import '../src/styles/normalize.scss';
import '../src/styles/fonts.scss';
import './index.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
      <Route path = "/" element = {<HomePage /> } />
        <Route path = "registry" element = {<RegistrationPage /> } />
        <Route path = "auth" element = { <AuthorizationPage /> } />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>

);
