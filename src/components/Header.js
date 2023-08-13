import React from "react";
import TypewriterComponent from './Typewriter';

function Header() {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between font-black pb-5">
        <p className="font-black text-2xl transform hover:rotate-45 transition duration-300">Thai.</p>
        <ul className="flex space-x-4">
          <li><a href="/" className="nav-links">Home</a></li>
          <li><a href="/about" className="nav-links">About</a></li>
          <li><a href="/experience" className="nav-links">Experience</a></li>
          <li><a href="/projects" className="nav-links">Projects</a></li>
          <li><a href="/contact" className="nav-links">Contact</a></li>
        </ul>
        <div>
          <ul className="flex">
            <li><a target="blank" className="link-background" href="https://www.linkedin.com/in/2770341b7/"><i class='bx bxl-linkedin'></i></a></li>
            <li><a target="blank" className="link-background" href="https://github.com/bilele123123/"><i class='bx bxl-github' ></i></a></li>
            <li><a target="blank" className="link-background" href="mailto:tple06203@gmail.com"><i class='bx bx-envelope' ></i></a></li>
          </ul>
        </div>
      </nav>

      <div className="border-t border-gray-300 "></div>

      <div className="flex items-center justify-between p-10 mx-32">
        <div class="relative">
          <div class="animblob"></div>
          <img src="https://github.com/bilele123123/Portfolio/blob/website-revamp/assets/profile.png?raw=true" alt="Profile" class="w-300 h-300 rounded-full z-10 relative" />
        </div>
        <div>
          <p className="text-6xl font-bold mb-8">Welcome!</p>
          <p className="text-5xl mb-8">My name is Thai, I am a <span class="typewriterEffect"><TypewriterComponent/></span></p>
          <ul className="flex">
            <li><a target="blank" className="link-background-content" href="https://drive.google.com/file/d/1g4ibbHi95aUbZGc_kKdBUJ3IH-yjdIdz/view?usp=sharing">Resume</a></li>
            <li><a target="blank" className="link-background-content" href="https://www.linkedin.com/in/2770341b7/">LinkedIn</a></li>
            <li><a target="blank" className="link-background-content" href="https://github.com/bilele123123">GitHub</a></li>
          </ul>
        </div>
      </div>

    <script></script>
    </header>
  );
}

export default Header;
