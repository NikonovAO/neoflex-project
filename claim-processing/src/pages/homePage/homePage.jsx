import React from "react";
import { Link } from "react-router-dom";
import './homePage.scss'

export default function HomePage() {
  return (
    <div className='link-list'>
      <Link to="/">Home</Link>
      <Link to="/auth">Authorization</Link>
      <Link to="/registry">Registration</Link>
    </div>
  );
}