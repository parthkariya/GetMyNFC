import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_main_wrapp">
        <div className="logo">
          <h4>GET MY NFC</h4>
        </div>
        <div className="nav-links">
          {/* <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li> */}
        </div>
        <button class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
