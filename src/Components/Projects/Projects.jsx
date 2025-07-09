import React from 'react';
import './Projects.css';
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import project1 from '../../assets/project5.webp';
import project2 from '../../assets/ChatVere_Img.webp';
import project3 from '../../assets/Calendar_img.webp';
import project4 from '../../assets/youtubeApp_screenshot.webp';

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects (demo)</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div id="newset">
                  <img id="newsetimg" src={project3} alt="Sephora" />
                </div>
              </div>
              <div className="project_information">
                <h2>Google_Calendar clone</h2>
                <p>
                  
                  Google Calendar Clone is a modern calendar web app . A clean, responsive UI powered by Radix UI, and 
                  Tailwind CSS. 
                  <br />
                  <br />Google Calender UI, built by me in 5 days.
                </p>
                <div>
                 
                  <DiCss3 />
                  <IoLogoJavascript />
                  
                  <SiReact />
                </div>
                <div>
                  <a
                    href="https://calendar.shrivastava.de/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/TanyaIndian/Google_Calender_clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div id="newset">
                  <img id="newsetimg" src={project2} alt="Pluralsight" />
                </div>
              </div>
              <div className="project_information">
                <h2>ChatVerse</h2>
                <p>
                  ChatVerse is a full-stack real-time chat web app featuring modern UI, JWT-based authentication, 
                  and real-time communication using Socket.IO <br />
                  <br />A Chat App project, built by me in 5 days.{' '}
                </p>

                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://chatverse.shrivastava.de/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/TanyaIndian/ChatVerse"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div id="newset">
                  <img id="newsetimg" src={project1} alt="Bangood" />
                </div>
              </div>
              <div className="project_information">
                <h2>Nordstrom clone</h2>
                <p>
                  E-commerce website Nordstrom, Inc. is an American luxury
                  department store chain. Men/Women section.
                  <br />
                  <br />A collaborative project, built in 6 days by a team of 5
                  developers.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://nordstromclone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deekshant57/Nordstrom-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div id="newset">
                  <img id="newsetimg" src={project4} alt="myshopoffood" />
                </div>
              </div>
              <div className="project_information">
                <h2>Youtube App</h2>
                <p>
                  A YouTube Clone built using React and the YouTube API,serach
                  functionality and related videos
                  <br />
                  <br />A Youtube App video app project, built by me in 3 hours.
                </p>
                <div>
                  <SiReact />
                  <DiCss3 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://myyoutubleclone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/TanyaIndian/Youtube_Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
