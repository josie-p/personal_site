import React from "react";
import { useInView } from "react-intersection-observer";
import cookieClicker from "./images/cookie-clicker.png";
import ticTacToe from "./images/tic-tac-toe.png";
import puppyBowl from "./images/puppy-bowl.png";

const Portfolio = () => {

  const { ref: slideIn, inView: slideVisible } = useInView();
  const { ref: bounce, inView: bounceVisible } = useInView();

    return(
      <div id="folio-holder">
        <h2 ref={bounce} className={bounceVisible ? "bounceIt" : null}>check out some of my work!</h2>
<div id="portfolio-section" ref={slideIn} className={slideVisible ? "enterLeft" : null}>
            <div className="folio-card">
            <h3>Reach for the Stars</h3>
            <img className= "folio-pics" src={cookieClicker} alt="cookie clicker project"></img>
          <p>
            This is a clicker game!
            It was a beginner project built using HTML, CSS, and JavaScript!
          </p>
          <a href="https://boisterous-travesseiro-636639.netlify.app" target='_blank'>view site</a>
            </div>
            <div className="folio-card">
            <h3>Tic-Tac-Toe</h3>
            <img className= "folio-pics" src={ticTacToe} alt="tic-tac-toe project"></img>
          <p>
            This is a Tic-Tac-Toe Game!
            I built this project using HTML, CSS, and JavaScript!
          </p>
          <a href="https://meek-beijinho-e76832.netlify.app" target='_blank'>view site</a>
            </div>
            <div className="folio-card">
            <h3>Puppy Bowl</h3>
            <img className= "folio-pics" src={puppyBowl} alt="puppy bowl project"></img>
          <p>
            This a site displaying the "opponents" in a fake puppy bowl!
            I built this project using HTML, CSS, React, and JavaScript; I also fetched all data about the puppies from an API.
          </p>
          <a href="https://elegant-kashata-207cc6.netlify.app" target='_blank'>view site</a>
            </div>
        </div>
      </div>
    )
}

export default Portfolio;