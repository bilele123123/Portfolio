import React, { useState } from "react";
import TypewriterComponent from './Typewriter';
import MobileMenu from './MobileMenu';

function HeaderWelcome() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="flex justify-center flex-col">

            <div className="flex flex-wrap items-center justify-center">
                <div class="relative order-2">
                    <div className="image-container">
                        <img src='/assets/images/My_picture.png' alt="Profile" className="profile-picture" />
                        <div className="image-border"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-left p-20">
                    <p className="text-4xl font-bold mb-3">Hello!</p>
                    <p className="text-2xl mb-8">I'm {" "}<span className="inline-block hover:rotate-45 transition duration-300 text-4xl text-custom-785447 font-bold">Thai Le</span>, I am a
                        <span className="typewriterEffect"><TypewriterComponent /></span></p>
                    <ul className="flex">
                        <li><a className="link-background-content" href="/contact">Contact</a></li>
                        <li><a className="link-background-content-portfolio" href="/projects">PORTFOLIO</a></li>
                    </ul>
                </div>
            </div>

            <MobileMenu isOpen={showMenu} toggleMenu={toggleMenu}></MobileMenu>
        </div>
    );
}

export default HeaderWelcome;
