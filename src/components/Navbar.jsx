import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="nav-name">
      <h2> josie parker</h2>
      </div>
      <div className="nav-stuff">
      <ul id="nav-links">
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="mailto:parker.josie.eden@gmail.com?subject=Connect With Josie" title="Contact Josie!">contact me</a></li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;