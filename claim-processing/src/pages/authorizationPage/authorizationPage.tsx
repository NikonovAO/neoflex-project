import React from "react";
import { Link } from "react-router-dom";
import './authorizationPage.scss'
import logoBig from "../../assets/svg/logo/logo-big.svg";
import Footer from "../../components/footer/footer";

function AuthorizationPage() {
  return (
    <>
      <main className='registration-page'>
        <div className='block-img'>
          <img src = {require("../../assets/image/claims-analysis.png")} className="claims-analysis" alt="claims-analysis" />
        </div>
        <div className='block-registration'>
          <img src = { logoBig } className="logo-big" alt="logo" />
          <div className="test-block"></div>
          <Link to="/auth">Authorization</Link>
          <Link to="/registry">Registration</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AuthorizationPage;
