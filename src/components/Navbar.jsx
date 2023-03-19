import React from "react";

const Navbar = () => {

  function displayNav(){
    console.log("I'm in the function, now!")
    const nav = document.getElementById("nav-links");

    // if(nav.style.display !== "flex"){
    //   nav.style.displ
    // }

    // nav.style.display !== "flex" ? nav.style.display = "flex" : nav.style.display = "none";

    if(nav.style.display === "flex"){
        nav.style.display = "none";
    }else{
      nav.style.display = "flex";
    }

    // nav.style.display = "flex";
  }

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
        <li><a href="mailto:parker.josie.eden@gmail.com" title="Contact Josie!">contact me</a></li>
      </ul>
      <p className="seeAll" onClick={() => {displayNav()}}>menu</p>
      </div>
    </div>
  );
};

export default Navbar;