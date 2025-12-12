
import React from "react";
import '../App.css'
function Header() {
  return (
    <header className="header">
      <div className="logo">MyPortfolio</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
