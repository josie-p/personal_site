import React from "react";
import github from "./images/github-mark-white.png";
import { Hero, About, Portfolio } from "./"

const Home = () =>{

    return(
        <div>
            <div id="home">
            <Hero/>
            </div>
            <div id="about">
            <About/>
            </div>
            <div id="portfolio">
            <Portfolio/>
            </div>
            <div id="bottom">
                <a href="https://github.com/josie-p" target="_blank"><img src={github} alt="github logo" height="50" width="50"></img></a>
                <p id="contact"><a href="mailto:parker.josie.eden@gmail.com?subject=Connect With Josie" title="Contact Josie!">contact me</a></p>
                <p>made with &#128151; by josie</p>
            </div>
        </div>
    )
}

export default Home;