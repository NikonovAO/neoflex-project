import React from "react";
import './index.css'
import logoBig from "../../assets/svg/logo/logo-big.svg";
import Footer from "../../components/Footer/Footer";

function RegistrationPage() {
  return (
    <>
      <main className='registration-page'>
        <div className='block-img'>
          <img src = {require("../../assets/image/claims-analysis.png")} className="claims-analysis" alt="claims-analysis" />
        </div>
        <div className='block-registration'>
          <img src = { logoBig } className="logo-big" alt="logo" />
          <div className="test-block"></div>
          <span>Проверка шрифтов</span>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RegistrationPage;
