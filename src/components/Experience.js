import React from "react";

function Experience() {
    return (
        <div className="main-body" id="experience">
            <div className="experience-container">
                <div className="experience mt-5 mb-10">
                    <div className="experience-content">
                        <h1 className="text-center text-4xl mb-8 font-bold">Experience</h1>
                        <div className="timeline">
                            <div className="timeline-container">

                                <div className="timeline-left-container">
                                    <img src='https://github.com/bilele123123/Portfolio/blob/main/public/assets/images/Secompany.png?raw=true' alt='SportsExcitement'></img>
                                    <div className="timeline-text-box">
                                        <p className="experience-description font-bold text-2xl mb-2">Software Engineer - Sports Excitement</p>
                                        <p className="experience-description text-xl mb-2">Jul 2023 - Present</p>
                                        <ol className="experience-list text-xl">
                                            <li className="mb-1">
                                                <div className="custom-bullet"></div>
                                                Developed a social network application to facilitate connections between students and experienced developers.
                                            </li>
                                            <li className="mb-1">
                                                <div className="custom-bullet"></div>
                                                Implemented features using TailwindCSS and React resulting in a 10% increase in user engagement, fostering meaningful interactions between users and mentors.
                                            </li>
                                            <li className="mb-1">
                                                <div className="custom-bullet"></div>
                                                Maintained and optimized server API, leading to an 8% improvement in website loading speed, enhancing user experience and satisfaction.
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="timeline-right-container">
                                    <img src='https://github.com/bilele123123/Portfolio/blob/main/public/assets/images/CSU.png?raw=true' alt='CSULB'></img>
                                    <div className="timeline-text-box">
                                        <p className="experience-description font-bold text-2xl mb-2">Student Technology Help Desk - CSU Long Beach</p>
                                        <p className="experience-description text-xl mb-2">Sept 2023 - Present</p>
                                        <ol className="experience-list text-xl">
                                            <li className="mb-1">
                                                <div className="custom-bullet"></div>
                                                Provide technical assistance to CSULB faculty, staff, and students.
                                            </li>
                                            <li className="mb-1">
                                                <div className="custom-bullet"></div>
                                                Offered hands-on support for computer applications and device troubleshooting.
                                            </li>
                                            <li className="mb-1">
                                                <div className="custom-bullet"></div>
                                                Demonstrate customer care and service by managing phone inquiries, email communications and walk in requests.
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="timeline-left-container">
                                    <img src='https://github.com/bilele123123/Portfolio/blob/main/public/assets/images/TOP.png?raw=true' alt="TOP"></img>
                                    <div className="timeline-text-box">
                                        <p className="experience-description font-bold text-2xl mb-2">Self Study - The Odin Project</p>
                                        <p className="experience-description text-xl mb-2">Nov 2022 - Present</p>
                                        <ol className="experience-list text-xl">
                                            <li className="mb-1">
                                                <div className="custom-bullet"></div>
                                                Completed foundations of Frontend development. Gaining proficiency in Git, HTML, CSS, flexbox, and JavaScript.
                                            </li>
                                            <li className="mb-1">
                                                <div className="custom-bullet"></div>
                                                Progressing through the Full Stack JavaScript course, exposed to intermediate HTML, CSS, responsive design, React, React testing and Node.js.
                                            </li>
                                            <li className="mb-1">
                                                <div className="custom-bullet"></div>
                                                Developed a strong foundation in software development, and built several full-stack applications.</li>
                                        </ol>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Experience;