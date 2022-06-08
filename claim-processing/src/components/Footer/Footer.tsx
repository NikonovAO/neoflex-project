import React from "react";
import logoSmall from "../../assets/svg/logo/logo-small.svg";
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src = { logoSmall } className="logo-small" alt="logo" />
    </footer>
  );
}