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
              - Assisted in maintaining and optimizing the CSULB and Carpenter Performing Arts Center websites using Drupal and PHP, contributing to performance and accessibility improvements.
            </p>
            <p>
              - Developed scripts to automate MySQL database migrations in Acquia Cloud, reducing manual intervention and improving deployment efficiency during monthly sprint pushes.
            </p>
            <p>
              - Automated over 150 Java unit test scripts with Selenium and Maven, identifying and fixing accessibility issues, improving compliance with WCAG 2.1 standards.
            </p>
            <p>
             - Developed a custom Drupal module enabling secure, token-based access to unpublished content, which was used over 50 times in its first month, significantly improving content management workflows.
            </p>
            <p>
              - Technologies Used: Drupal, SCSS, PHP, Lando, Docker, JavaScript, Acquia, MySQL, Selenium, jQuery
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
              - Contributed to the development of a mobile social networking app enabling over 80 businesses and communities to create events and fundraisers with incentivized rewards.
            </p>
            <p>
              - Assisted in scaling cloud infrastructure using AWS services, supporting over 500 new users while maintaining availability and performance under heavy loads.
            </p>
            <p>
              - Automated API testing and documentation with Postman and Swagger, reducing manual testing time by 23% and boosting API reliability.
            </p>
            <p>
              - Collaborated on engineering a feature for companies to create fundraising events, updating mobile and web platforms in real-time. This feature processed over 30 event updates weekly, leveraging AWS Lambda for efficient, scalable backend operations.
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
              - Contributed to the design and development of a full-stack application using MongoDB, React.js, and Node.js, connecting over 50 students with mentors.
            </p>
            <p>
              - Optimized database performance by implementing indexed queries and data caching strategies in MongoDB, improving data retrieval speeds by 25%.
            </p>
            <p>
              - Helped integrate CI/CD pipelines for automated testing and deployment, which increased deployment frequency by 10% and reduced rollback instances.
            </p>
            <p>
              - Developed and refined frontend components in close collaboration with QA engineers, adhering to WCAG accessibility standards and ensuring a seamless, inclusive user experience across all devices.
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
