import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RegistrationPage from './pages/registrationPage/registrationPage';
import './assets/fonts/arial/arial-regular.ttf';
import './assets/fonts/inter/Inter-Regular.ttf';
import './assets/fonts/inter/Inter-Bold.ttf';
import './assets/fonts/inter/Inter-Medium.ttf';
import './assets/fonts/roboto/Roboto-Regular.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RegistrationPage/>
  </React.StrictMode>
);
