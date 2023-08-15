import React from "react";

function About() {
    return (
        <div className="about m-5 mb-10">
            <h1 className="text-center text-5xl text-custom-ffffff m-5 mb-8 font-bold">About Me</h1>
            <div className="about-content">
                <div className="about-picture">
                    <img className="rounded-3xl" src='/assets/images/Collage.png' alt="collage"></img>
                </div>
                <div className="about-description">
                    <p className="about-text text-2xl">I am a student at CSU Long Beach studying Computer Science. I enjoy picking up new hobbies and push myself to learn everyday. On my spare 
                        time I like to bike to the park and spend my time reading manga and web comics. I also love to learn new songs on the guitar and the piano. 
                    </p>
                    <p className="about-text text-2xl mt-8">My goal in the future is to pursue a career in Software Development, and spend my time building things I love and enjoy.</p>
                    <div className="about-text flex flex-row mt-12 text-2xl">
                        <div className="mr-6">
                            <p>NAME</p>
                            <p>Thai Le</p>
                        </div>
                        <div className="mr-6">
                            <p>EDUCATION</p>
                            <p>BS - Computer Science</p>
                        </div>
                    </div>
                    <div className="about-href-container text-6xl mt-12">
                        <a className="about-href" target='blank' href='https://www.linkedin.com/in/2770341b7/'><i class='bx bxl-linkedin-square'></i></a>
                        <a className="about-href" target='blank' href='https://github.com/bilele123123/'><i class='bx bxl-github'></i></a>
                        <a className="about-href" target='blank' href='mailto:tple06203@gmail.com'><i class='bx bx-envelope'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;