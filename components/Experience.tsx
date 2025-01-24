"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import csuIcon from "../public/images/CSU.png";
import engageIcon from "../public/images/Engageathon.png";
import seIcon from "../public/images/Secompany.png";
import Image from "next/image";
import "../app/targetted-styles/vertical-timeline.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="h-full w-full bg-black-100 relative flex flex-col items-center antialiased pb-8">
        <h2 className="text-white text-4xl mt-10 font-medium mb-12">Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#d4d4d4 ", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #d4d4d4" }}
            date="Jul 2024 - Present"
            dateClassName="vertical-timeline-element-date"
            icon={
              <Image
                src={csuIcon}
                alt="CSULB Icon"
                fill
                className="rounded-3xl"
              />
            }
            iconClassName="vertical-timeline-element-icon"
            visible={true}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer - CSU Long Beach
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Long Beach, California
            </h4>
            <p>
              - Maintain and optimize the CSULB and Carpenter Performing Arts Center websites, ensuring performance, accessibility, and compliance with WCAG 2.1 standards.
            </p>
            <p>
              - Propose and implement a module to query over 31,000 pages and 880 Drupal Groups to identify and periodically compile accessibility issues via Editoria11y API, optimizing site-wide accessibility compliance checks.
            </p>
            <p>
              - Develop Selenium-based Java programs to automate unit testing processes, streamlining the detection of accessibility issues and eliminating manual testing. Improving QA efficiency across releases.
            </p>
            <p>
             - Create a custom Drupal module enabling secure, token-based access to unpublished content, adopted 50+ times in the first month, improving content management workflows.
            </p>
            <p>
              - Technologies Used: Drupal, SCSS, PHP, Lando, Java, Docker, JavaScript, Acquia, MySQL, Selenium, jQuery
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#d4d4d4 ", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #d4d4d4" }}
            date="Nov 2023 - Mar 2024"
            dateClassName="vertical-timeline-element-date"
            icon={
              <Image
                src={engageIcon}
                alt="ENGAEGathon Icon"
                fill                
                className="rounded-3xl"
              />
            }
            iconClassName="vertical-timeline-element-icon"
            visible={true}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern - ENGAGEathon
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Philadelphia, New York
            </h4>
            <p>
              - Lead a team of seven interns in planning, developing, and deploying the first version of a mobile social networking app.
            </p>
            <p>
              - Deploy the application for testing, successfully attracting 500 test users and being featured during Super Bowl LVIII as a key product showcase.
            </p>
            <p>
              - Engineer scalable backend infrastructure using AWS Lambda, supporting real-time updates and efficient event management, processing over 30 event updates weekly.
            </p>
            <p>
              - Automate API testing and documentation with Postman and Swagger, improving API reliability and reducing manual testing time by 23%.
            </p>
            <p>
              - Technologies Used: React Native, JavaScript, Python, PostgreSQL, AWS, Postman, Swagger API, Docker
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#d4d4d4 ", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #d4d4d4" }}
            date="Jul 2023 - Nov 2023"
            dateClassName="vertical-timeline-element-date"
            icon={
              <Image
                src={seIcon}
                alt="Sports Excitement Icon"
                fill
                className="rounded-3xl"
              />
            }
            iconClassName="vertical-timeline-element-icon"
            visible={true}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern - Sports.Excitement
            </h3>
            <h4 className="vertical-timeline-element-subtitle">New York</h4>
            <p>
              - Design and develop a full-stack application connecting 50+ students with mentors, using MongoDB, Express, React.js, and Node.js.
            </p>
            <p>
              - Optimize database performance with indexed queries and caching strategies, improving data retrieval speeds by 25%.
            </p>
            <p>
              - Integrate CI/CD pipelines for automated testing and deployment, increasing deployment frequency by 10%.
            </p>
            <p>
              - Develop and refine frontend components in collaboration with QA engineers, ensuring compliance with WCAG accessibility standards for inclusive user experiences.
            </p>
            <p>
              - Technologies Used: JavaScript, MongoDB, React.js, TailwindCSS, JWT, Node.js, Express, AWS, Docker
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
