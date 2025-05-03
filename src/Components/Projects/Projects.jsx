import React from "react";
import "./Projects.css";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/project5.webp";
import project2 from "../../assets/project6.webp";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/youtubeApp_screenshot.webp";




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
                  <img id="newsetimg"
                    src={project3}
                    alt="Sephora"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Sephora clone</h2>
                <p>

                Sephora is a French multinational retailer of famous beauty brand that has captured the hearts of millions of beauty shoppers worldwide.  
               <br />
               <br />
              A collaborative project, built in 5 days by a team of 4 developers.
                              </p>
                <div>
               
                <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                     <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <  SiReact />

                </div>
                <div>
                  <a
                    href="https://shephoraindia.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/khushi89012/SephoraClone"
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
                  <img id="newsetimg"
                   src={project2}
                    alt="Pluralsight"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>ZoomCar clone</h2>
                <p>
                 Zoomcar, is an Indian self-drive car rental company, 
                headquartered in Bangalore, India.The company was founded in 2013   <br />
                     <br />       
              A collaborative project built by a team of 4, executed in 5 days. </p>
              
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
                    href="http://zoomcar-letsgo-boom.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/TanyaIndian/zoomcar-backend"
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
                  <img id="newsetimg"
                    src={project1}
                    alt="Bangood"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Nordstrom clone</h2>
                <p>

                E-commerce website Nordstrom, Inc. is an American luxury department store chain.  
               <br />
               <br />
              A collaborative project, built in 6 days by a team of 5 developers.
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
                  <img id="newsetimg"
                    src={project4}
                    alt="myshopoffood"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Youtube App</h2>
                <p>

                A YouTube Clone built using React and the YouTube API,serach functionality and related videos 
               

              
               <br />
               <br />
              A Youtube App video app project, built by me  in 3 hours.
                              </p>
                <div>
               
                  <SiReact />
                  <DiCss3 />
                  <IoLogoJavascript />

                </div>
                <div>
                  <a
                    href='https://myyoutubleclone.netlify.app/'
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