import React from "react";
import { useInView } from "react-intersection-observer";
import vegas from "./images/vegas.jpeg";
import josiePic from "./images/about-josie.jpeg";
import recentFam from "./images/recent-fam.jpeg";

const About = () => {
  const { ref: myRef, inView: elemVisible } = useInView();
  const { ref: bounce, inView: bounceVisible } = useInView();

  return (
    <div id="about-holder">
      <div id="about-me-section">
        <div className="about-intro">
          <h2 ref={bounce} className={bounceVisible ? "bounceIt" : null}>
            about
          </h2>
          <div
            id="about-photos"
            ref={myRef}
            className={elemVisible ? "enterRight" : null}
          >
            <img
              className="pics one"
              src={vegas}
              alt="josie's family in vegas"
            ></img>
            <img className="pics two" src={josiePic} alt="josie"></img>
            <img
              className="pics three"
              src={recentFam}
              alt="josie's family in SF"
            ></img>
          </div>
        </div>
        <div id="hold-about-content">
          <article className="about-articles">
            <h3>about me</h3>
            <p>
              Hi! My name is Josie Parker and I&apos;m 19 years old. I live with
              my family - my parents, Ben and Christina, my brother, Cash, and
              our dog, Tilly. I&apos;ve lived in Oklahoma for (almost) my whole
              life and I&apos;m currently pursuing my Associates of Applied
              Sciences in Computer Science with an emphasis on Web Design and
              Development. I recently graduated from the Fullstack Academy
              coding boot camp through the University of Oklahoma. This is an
              experience I&apos;m so extremely grateful for, both because of the
              connections I made and because of all of the super valuable
              information I learned. I know that Fullstack made me a better
              coder and taught me so much about fullstack development. When I
              was younger, I never quite knew what I wanted to do. First, I
              thought I should be a doctor, but I lost that urge after I
              realized I hated being around blood; then I thought maybe I should
              be a teacher, but I didn&apos;t really feel passionate about it. I
              continued on like this: from librarian to biologist to lawyer, I
              carefully considered and subsequently dismissed these career
              paths. At last, after my dad urged me to pursue a degree in
              computer science - and I figured I didn&apos;t have anything to
              lose - I decided on web design and development, found I was
              passionate about it, and never looked back.
            </p>
          </article>
          <article className="about-articles">
            <h3>what I love</h3>
            <p>
              I love, first and foremost, spending time with my family and my
              best friend. They're my favorite people in the world and never
              fail to make my life more bright and full. Beyond that, I love
              reading; if I'm not with friends and family, you can probably find
              me reading or listening to an audio-book. I also love being
              outside and spending some time in the sun when I can. Lastly, I
              feel it's important to mention that I love learning about and
              working on web design and development. I love the combination of
              creativity and precision that comes with design and development
              and, most of all, I love the feeling of being satisfied with a
              project that works correctly and functions (mostly) as intended.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
