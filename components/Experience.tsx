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
      <div className="h-full w-full bg-black-100 relative flex flex-col items-center antialiased">
        <h2 className="text-white text-4xl mt-10 font-medium">Experience</h2>
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
              - Developed and executed Java unit test scripts using Selenium,
              successfully identifying and resolving over 150 accessibility
              issues on the CSULB main page.
            </p>
            <p>
              - Corrected over 50 inconsistent styling issues, enhancing user
              experience by ensuring a consistent and accessible interface.
            </p>
            <p>
              - Managed the CSULB content management system with Drupal,
              providing support to over 30 faculty members and content creators
              in generating and managing content.
            </p>
            <p>
              - Technologies Used: Drupal, SCSS, PHP, Lando, Docker, JavaScript,
              CSS, Sass, MySQL, Selenium
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
              - Developed a mobile social networking app enabling over 80
              businesses and communities to create events and fundraisers with
              incentivized rewards.
            </p>
            <p>
              - Resolved over 30 high-priority Android styling issues, improving
              user access and experience of the mobile application.
            </p>
            <p>
              - Reduced technical debt by 25% through code refactoring, CSS
              debloating, and component modularization, significantly enhancing
              in-app responsiveness and component rendering speed.
            </p>
            <p>
              - Deployed a secure user authentication API using Django and
              PostgreSQL, enabling over 250 users to register, log in, and
              manage profiles securely.
            </p>
            <p>
              - Technologies Used: React Native, JavaScript, Python, PostgreSQL,
              AWS, Postman, Swagger API
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
              - Designed and developed a full-stack application using MongoDB,
              React.js, and Node.js, connecting over 50 students with mentors.
            </p>
            <p>
              - Enhanced user authentication security by implementing salted
              hashing, JWT, and code hashing, reducing security incidents by
              15%.
            </p>
            <p>
              - Implemented comprehensive unit tests for component rendering and
              API data validation using Jest, reducing bug tickets by 12% and
              accelerating code deployment.
            </p>
            <p>
              - Collaborated in an Agile environment with weekly sprints and
              meetings, ensuring on-time delivery of the project and meeting all
              project milestones.
            </p>
            <p>
              - Technologies Used: JavaScript, MongoDB, React.js, TailwindCSS,
              JWT, Node.js, Express
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
