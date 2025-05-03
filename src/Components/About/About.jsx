import React from 'react';
import './About.css';
import { Type } from './Type';
import { Introduction } from './Introduction';
import { Timeline } from './Timeline';
import { Techstacks } from './Techstacks';
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Tanya Shrivastava</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having problem-solving
          ability and proficiency in MERN Stack. A good learner & always excited
          to learn new technologies.
        </p>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
