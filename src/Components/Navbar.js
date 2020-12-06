import React, { useState } from "react";
import "./Stylesheet.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="header ">
        <ul
          className="navLinks"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>About</li>
          <li>Services</li>
          <li className="mainTab hidden ">Me.</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className="navIcon">
          <h2 className="mainTab">Me.</h2>
          <i onClick={() => setOpen(!open)} class="fas fa-bars "></i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
