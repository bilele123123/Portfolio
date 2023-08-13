import React from "react";

function Header() {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-end font-black pb-5">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:border-b-2 hover:border-black px-2">Home</a></li>
          <li><a href="/about" className="hover:border-b-2 hover:border-black px-2">About</a></li>
          <li><a href="/experience" className="hover:border-b-2 hover:border-black px-2">Experience</a></li>
          <li><a href="/projects" className="hover:border-b-2 hover:border-black px-2">Projects</a></li>
          <li><a href="/contact" className="hover:border-b-2 hover:border-black px-2">Contact</a></li>
        </ul>
      </nav>
      <div className="border-t border-gray-300"></div>
      <div className="flex items-center justify-between p-4">
        <div>
        <img src="assets/my_picture.png" alt="Profile"/>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">Welcome! I am Thai, a Software Developer.</p>
          <ul className="flex space-x-4">
            <li><a target="blank" href="https://drive.google.com/file/d/1g4ibbHi95aUbZGc_kKdBUJ3IH-yjdIdz/view?usp=sharing">Resume</a></li>
            <li><a target="blank" href="https://www.linkedin.com/in/2770341b7/">LinkedIn</a></li>
            <li><a target="blank" href="https://github.com/bilele123123/">GitHub</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
