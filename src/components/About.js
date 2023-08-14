import React from "react";

function About() {
    return (
        <div className="about">
            <h1 className="text-center text-3xl text-custom-ffffff mt-5 font-bold">About Me</h1>
            <div className="about-content">
                <div className="about-picture">
                    <img className="luffy" src="https://github.com/bilele123123/Portfolio/blob/website-revamp/assets/luffy.png?raw=true"></img>
                    <img className="group-picture" src="https://github.com/bilele123123/Portfolio/blob/website-revamp/assets/group.png?raw=true"></img>
                    <img className="my-picture" src="https://github.com/bilele123123/Portfolio/blob/website-revamp/assets/me.jpg?raw=true"></img>
                </div>
                <div className="about-description"></div>
            </div>
        </div>
    );
}

export default About;