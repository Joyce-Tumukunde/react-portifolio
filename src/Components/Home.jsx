import React from "react";
import Banner from "../assets/banner.png"; // Adjust if your path differs
import "../css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faRedditAlien, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1>
          Hello I’m <span className="bold-text">Joyce Tumukunde.</span>
          <br />
          <span className="bold-text">Frontend </span>
          <span className="outlined-text">Developer &</span>
          <br />
          <span className="outlined-text">UI/UX designer</span>
          Based In <span className="bold-text">Rwanda.</span>
        </h1>
        <p className="home__description">
        Creative and detail-oriented UI/UX designer and front-end developer
        specializing in visual communication and design Proficient in Figma and
        react.js. Passionate about building scalable and high-performance application.
        Strong in problem-solving skills and experience in working in team.
        </p>
        <div className="home-icons">
          <span>
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            <FontAwesomeIcon icon={faRedditAlien} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faDiscord} className="social-icon" />
          </span>
        </div>
      </div>
      <div className="home__image">
        <img src={Banner} alt="Home Banner" className="home-banner" />
      </div>
    </section>
  );
}

export default Home;
