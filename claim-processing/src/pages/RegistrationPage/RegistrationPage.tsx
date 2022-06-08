import React from "react";
import './index.css'
import logoBig from "../../assets/svg/logo/logo-big.svg";

function RegistrationPage() {
  return (
    <main className = 'registration-page'>
      <div className = 'block-img'>
        <img src="../../assets/image/claims-analysis.png" alt="claims-analysis" />
      </div>
      <div className = 'block-registration'>
        <img src={logoBig} className="logo-big" alt="logo" />
        <div className="test-block"></div>
      </div>
    </main>
  );
}

export default RegistrationPage;
