import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import DescriptionIcon from "@mui/icons-material/Description";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import Viraj_Resume from "../../assets/resume/TanyaShrivastava_resume.pdf"
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Tanya Shrivastava</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">

       
        Passionate and creative Full Stack Developer having problem-solving ability and proficiency in MERN Stack. A good learner & always excited to learn new technologies.






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