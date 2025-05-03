import React from 'react';
import './Introduction.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ThemeContext } from '../../Context/theme';
import profilePic from '../../assets/profile.jpeg';

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={'introduction ' + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                I'm a Frontend Developer with over{' '}
                <span className="different"> 4 years </span> of experience,{' '}
                specializing in the <span className="different">MERN </span>
                stack. Originally from <span className="different">India</span>,
                I am currently living in{' '}
                <span className="different">Hamburg, Germany</span>. I have
                worked on diverse projects, creating{' '}
                <span className="different">dynamic </span> and
                <span className="different"> user-friendly </span>
                web applications. I've also collaborated with international
                clients, delivering high-quality solutions.
              </h4>
              <h4>Terms That can describe me apart form coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning about Cosmos{' '}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Creative Thinking{' '}
              </h4>
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4> */}
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Exploring New Places{' '}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
