import React, { useState } from "react";
import TypewriterComponent from './Typewriter';
import MobileMenu from './MobileMenu';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="main-body" id="home">
      <div className="header-container">
        <header className="flex justify-center flex-col">
          <nav className="container mx-auto items-center font-black p-5">
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                <i className="bx bx-menu text-3xl"></i>
              </button>
            </div>

            <div className={`md:flex items-center justify-between ${showMenu ? "hidden" : "hidden"} `}>
              <div className="nav-name">Thai.</div>
              <ul className="flex space-x-4">
                <li><a href="#home" className="nav-links text-[#1547a5]">Home</a></li>
                <li><a href="#about" className="nav-links">About</a></li>
                <li><a href="#experience" className="nav-links">Experience</a></li>
                <li><a href="#project" className="nav-links">Project</a></li>
                <li><a href="#contact" className="nav-links">Contact</a></li>
              </ul>
            </div>
          </nav>

          <div className="border-t border-gray-300 mb-5"></div>

          <MobileMenu isOpen={showMenu} toggleMenu={toggleMenu}></MobileMenu>
        </header>

        <div className="header-welcome">
          <div className="flex justify-center flex-col">
            <div className="flex flex-wrap items-center justify-center">
              <div class="relative order-2">
                <div className="image-container">
                  <img src='https://github.com/bilele123123/Portfolio/blob/main/public/assets/images/Me.png?raw=true' alt="Profile" className="profile-picture" />
                  <div className="image-border"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center text-left p-20">
                <p className="text-4xl font-bold mb-3">Hello!</p>
                <p className="text-2xl mb-8">I'm {" "}<span className="thai inline-block hover:rotate-45 transition duration-300 text-4xl font-bold">Thai Le</span>, I am a
                  <span className="typewriterEffect"><TypewriterComponent /></span></p>
                <ul className="flex">
                  <li><a className="link-background-content" href="https://drive.google.com/file/d/1v4V-Az_GJMNHIlS_DBS0XalYkdATOf-L/view?usp=sharing" rel="noreferrer noopener" target="_blank">Resume</a></li>
                  <li><a className="link-background-content-portfolio" href="#project">PORTFOLIO</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Header;
