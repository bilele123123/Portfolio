import React, { useState } from "react";
import TypewriterComponent from './Typewriter';
import MobileMenu from './MobileMenu';

function HeaderWelcome() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-center flex-col">
      
      <div className="flex flex-wrap items-center justify-center">
        <div class="relative order-2">
          <img src="https://github.com/bilele123123/Portfolio/blob/website-revamp/assets/my_picture.png?raw=true" alt="Profile" className="profile-picture" />
        </div>
        <div className="flex flex-col justify-center text-left p-10">
          <p className="text-5xl font-bold mb-8">Welcome!</p>
          <p className="text-4xl mb-8">I'm {" "}<span className="inline-block hover:rotate-45 transition duration-300 text-4xl text-custom-785447 font-bold">Thai</span>, I am a
            <span className="typewriterEffect"><TypewriterComponent /></span></p>
          <ul className="flex">
            <li><a className="link-background-content" href="/contact">Contact Me</a></li>
            <li><a className="link-background-content-portfolio" href="/projects">PORTFOLIO</a></li>
          </ul>
        </div>
      </div>

      <MobileMenu isOpen={showMenu} toggleMenu={toggleMenu}></MobileMenu>
    </header>
  );
}

export default HeaderWelcome;
