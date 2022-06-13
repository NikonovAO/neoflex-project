import React from "react";
import { Link } from "react-router-dom";
import './authorizationPage.scss'
import Icons from "../../components/icons/icons";
import Footer from "../../components/footer/footer";

function AuthorizationPage() {
  return (
    <>
      <main className='registration-page'>
        <div className='block-img'>
          <img src = {require("../../assets/image/claims-analysis.png")} className="claims-analysis" alt="claims-analysis" />
        </div>
        <div className='block-registration'>
          <Icons iconName="logo-big"/>
          <div className="test-block">Форма авторизации</div>
          <Link to="/auth">Authorization</Link>
          <Link to="/registry">Registration</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AuthorizationPage;
