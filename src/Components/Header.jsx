import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import "../css/header.css"; // Adjust the path as necessary

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
      <img src={logo} alt="Logo" className="header__logo-img" />
        <span className="header__logo-text">Personal</span>
      </div>

      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav className="header__nav">
        <div className="header__nav-list">
          <a href="#about">About Me</a>
          <a href="#work">Skills</a>
          <a href="#project">Project</a>
          <a href="#Contact">Contact Me</a>
        </div>
      </nav>

      <div className="header__buttons">
  <a href="/Tumukunde Joyce cv.pdf" download target="_blank" rel="noopener noreferrer">
    <button className="resume-btn">
      Resume <i className="fa-solid fa-download"></i>
    </button>
  </a>
</div>

    </header>
  );
}

export default Header;
