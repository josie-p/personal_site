import React from "react";
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
                <p>made with &#128151; by josie</p>
            </div>
        </div>
    )
}

export default Home;