import React from 'react';
import './Timeline.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarRateIcon from '@mui/icons-material/StarRate';
import { ThemeContext } from '../../Context/theme';

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === 'light' ? '#23283e' : '#fcfcfc'
  );

  React.useEffect(() => {
    if (themename === 'dark') {
      setlinecolor('#fcfcfc');
    } else {
      setlinecolor('#23283e');
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          {/* <VerticalTimelineElement
            date={"Dec 2021 - Feb 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student Guide Cordinator
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School
            </h4>
            <p data-aos="fade-right">
              Managing Team of 15 Student Guides directly and 100-150 students
              indirectly with help of student guides.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Nov 2021 - Dec 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student Guide
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School
            </h4>
            <p data-aos="fade-right">
              Mentoring and clearing student's doubts via one to one and one to
              all video calls, Motivating students to do hard work, provides
              emotional support to them & Helping students to start their career
              in Tech.
            </p>
          </VerticalTimelineElement> */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={'May 2018 - June 2021'}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: '3px solid var(--clr-primary)',
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: '16px solid  var(--clr-primary)',
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [Bacheclor of Technology]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              AKU University, Patna(Bihar)
            </h4>
            <p data-aos="fade-right">Graduated with 8.5 cgpa</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={'Feb 2021 - Oct 2021'}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: '3px solid var(--clr-primary)',
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: '16px solid  var(--clr-primary)',
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Developer [Part-Time]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              eDigiTech Technologies,Pune(Remote){' '}
            </h4>
            <p data-aos="fade-right">
              {/* Studied 12th in Mathematics, Physics and Chemistry. */}
              Brief Into this project is the Admin portal for management of the
              company. Implemented custom Chat like whatsapp , ClickUp , Calling
              Feature, Customer , Cleaner , Admin
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={'Nov 2021 - June 2022'}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: '3px solid var(--clr-primary)',
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: '16px solid  var(--clr-primary)',
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Full Stack Engineer Fellow
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School,Bangalore (Remote)
            </h4>
            <p data-aos="fade-right">
              ● Worked and developed multiple MERN stack apps with different
              teams. ● Deployed full-stack apps on various cloud services such
              as Heroku, Netlify, and Vercel.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={'May 2022 - Apr 2024'}
            // May 2022 - Present
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: '3px solid var(--clr-primary)',
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: '16px solid  var(--clr-primary)',
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Developer and Instructor at Masai School
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School,Bangalore (Remote)
            </h4>
            <p data-aos="fade-right">
              I worked on Hukumu, an online interview platform for Masai
              School.The platform enabled students to practice interviews, with
              500+ registered users. I also mentored students, assisted in
              project debugging, and conducted live DSA classes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={'Apr 2024 - Nov 2024'}
            // May 2022 - Present
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: '3px solid var(--clr-primary)',
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: '16px solid  var(--clr-primary)',
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Frontend Developer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Uvation, Texas(Remote)
            </h4>
            <p data-aos="fade-right">
              I worked on the Uvation service platform, developing it from
              scratch. I designed and built the UI, ensured a responsive design,
              and integrated APIs and a chatbot for enhanced functionality.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
