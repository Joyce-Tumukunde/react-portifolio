import React from "react";
import "../css/project.css"; // Make sure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Project1 from "../assets/Project1.png"; // Make sure this path is correct
import Kids from "../assets/Kids.png"; // Make sure this path is correct
import Promote from "../assets/Promote.png"; // Make sure this path is correct
import "../css/project.css"; // Make sure this path is correct


function Project() {
    return (
        <section id="work" className="work">
      <h1 className="section-title" id="black-bg">
        My <span>Projects</span>
      </h1>

      <div className="work-list">
        <div className="work-card">
          <div className="work-left_side">
            <img src={Project1} alt="Work 1" className="work-image" />
          </div>
          <div className="work-right_side">
            <h1 className="work-title">01</h1>
            <h2 className="work-subtitle">Hr Management system</h2>
            <p className="work-description">
            The HR Management System is a comprehensive web application designed to streamline and 
            automate all core Human Resources functions within an organization. Its primary focus is on 
            efficient employee management and the digital handling of HR-related activities
            </p>
            <a href="#" className="work-link">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>

        <div className="work-card reverse">
          <div className="work-left_side">
            <h1 className="work-title">02</h1>
            <h2 className="work-subtitle">
              Kids management system
              
            </h2>
            <p className="work-description">
            The Kids Management System is a digital platform designed to help 
            organizations, schools, or caretakers efficiently manage and monitor 
            children's development, talents, and daily activities. The system aims 
            to provide a structured way to track each child’s growth, nurture their 
            unique abilities, and ensure their well-being.
            </p>
            <a href="#" className="work-link">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div className="work-right_side">
            <img src={Kids} alt="Work 2" className="work-image" />
          </div>
        </div>

        <div className="work-card">
          <div className="work-left_side">
            <img src={Promote} alt="Work 3" className="work-image" />
          </div>
          <div className="work-right_side">
            <h1 className="work-title">03</h1>
            <h2 className="work-subtitle">Promote Her</h2>
            <p className="work-description">
            Promote Her is a platform dedicated to showcasing and supporting women-led businesses. 
            The primary goal of the project is to amplify the visibility of female entrepreneurs, 
            providing them with a space to present their ventures, products, and services to a wider 
            audience and that can help them to get investors and partners through that platform.
            </p>
            <a href="#" className="work-link">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </div>
    </section>
    );
    }
export default Project;