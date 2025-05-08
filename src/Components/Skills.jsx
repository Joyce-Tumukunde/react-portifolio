import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faJs,
  faSass,
  faReact,
  faHtml5,
  faCss3Alt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import "../css/skills.css"; // Adjust the path as necessary

const skills = [
  { icon: faGitAlt, label: "Git" },
  { icon: faJs, label: "JavaScript" },
  { icon: faSass, label: "Sass/Scss" },
  { icon: faReact, label: "React" },
  { icon: faHtml5, label: "HTML5" },
  { icon: faCss3Alt, label: "CSS3" },
  { icon: faBolt, label: "Tailwind" },
  { icon: faFigma, label: "Figma" },
];

function About() {
  return (
    <section id="about" className="about">
      <h1 className="section-title">
        My <span>Skills</span>
      </h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon icon={skill.icon} />
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
