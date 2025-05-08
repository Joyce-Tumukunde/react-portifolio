import React from "react";
import Joyce from '../assets/Joyce.JPG'; // Make sure this path is correct
import "../css/about.css"; // Make sure this path is correct

function About() {
    return (
        <section id="about" className="profile-section">
      <div className="profile__image">
        <img src={Joyce} alt="Profile Illustration" />
      </div>

      <div className="profile__text">
        <h1 className="section-title">
          About <span>Me</span>
        </h1>
        <p>
          I'm a passionate, self-proclaimed designer who specializes in front-end developer 
          and UI/UX designer . I am very enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel-perfect design, and writing clear, readable,
          highly performant code matters to me.
        </p>
        <p>
          I began my journey as a web developer in 2022, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          thirties, I'm
          building cutting-edge web applications using modern technologies such
          as Next.js, React.js, TailwindCSS, Supabase and much more.
        </p>
        <p>
          When I'm not in full-on developer mode, you can find me hovering
          around on Twitter or on Indie Hacker, witnessing the journey of early
          startups or enjoying some free time. You can follow me on GitHub
          where I share tech-related bites and build in public.
        </p>
      </div>
    </section>
    );
    }
export default About;