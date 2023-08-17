import React, { useState } from "react";
import MobileMenu from './MobileMenu';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
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
            <li><a href="/" className="nav-links">Home</a></li>
            <li><a href="/about" className="nav-links">About</a></li>
            <li><a href="/experience" className="nav-links">Experience</a></li>
            <li><a href="/projects" className="nav-links">Project</a></li>
            <li><a href="/contact" className="nav-links">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="border-t border-gray-300 mb-5"></div>

      <MobileMenu isOpen={showMenu} toggleMenu={toggleMenu}></MobileMenu>
    </header>
  );
}

export default Header;
