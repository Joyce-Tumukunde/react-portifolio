import React from "react";
import "../css/experience.css"; // Make sure this path is correct

function Experience() {
  return (
    <section id="project" className="project">
      <h1 className="section-title" id="black-bg">
        My <span>Experience</span>
      </h1>
      <div className="project-list">
        <div className="project-card">
          <div className="project-left_header">
            {/* <span className="project-icon">
              <img src="/assets/icons/google.png" alt="Google" />
            </span> */}
            <span className="project-title">Software Developer</span>
            <span className="project-date">Feb 2025 - Present</span>
          </div>
          <p>
            As a Senior Software Engineer at Google, I played a pivotal role in developing innovative
            solutions for Google's core search algorithms. Collaborating with a dynamic team of
            engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing
            user experiences for millions of users worldwide.
          </p>
        </div>

        <div className="project-card">
          <div className="project-left_header">
            {/* <span className="project-icon">
              <img src="/assets/icons/apple.png" alt="Apple" />
            </span> */}
            <span className="project-title">UI/UX Designer at Techinica</span>
            <span className="project-date"> July 2024 - Jan 2025</span>
          </div>
          <p>
          At Technica, I worked as a UI/UX Designer, where I was responsible for 
          creating user-centered designs for two major internal platforms using Figma. 
          The first project, a Kids Management Platform, focused on helping educators and 
          caregivers monitor children's talents, interests, and health data. The goal was 
          to provide a holistic overview of each child’s development and potential.
          The second project was an HR Management System designed to streamline employee data 
          management and improve operational efficiency for HR teams. I was involved in end-to-end 
          design, from user research and wireframing to high-fidelity prototyping, while collaborating 
          with developers and stakeholders to ensure seamless implementation.

.
          </p>
        </div>
        <div className="project-card">
          <div className="project-left_header">
            {/* <span className="project-icon">
              <img src="/assets/icons/youtube.png" alt="YouTube" />
            </span> */}
            <span className="project-title">A train </span>
            <span className="project-date">Jan 2023 - Oct 2024</span>
          </div>
          <p>
          As a trainee at SheCanCode, I had the opportunity to work on various projects, 
          both in Figma for UI/UX design and in React for front-end development. During 
          this period, I actively contributed as a Front-End Developer and UI/UX Designer, 
          gaining hands-on experience in building user interfaces, designing user-centered 
          experiences, and developing responsive, interactive web applications.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;
