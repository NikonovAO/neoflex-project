import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/normalize.scss'
import '../src/styles/fonts.scss'
import './index.scss';
import RegistrationPage from './pages/registrationPage/registrationPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RegistrationPage/>
  </React.StrictMode>
);
