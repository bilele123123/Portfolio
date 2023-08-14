import React from 'react';

function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-2/5 bg-gray-800 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{zIndex:999}}>
      <button onClick={toggleMenu} className="absolute top-5 right-5 text-white">
        <i className="bx bx-x text-3xl"></i>
      </button>
      <ul className="h-full flex flex-col justify-center items-center">
        <li><a href="/" className="text-white text-2xl mb-4">Home</a></li>
        <li><a href="/about" className="text-white text-2xl mb-4">About</a></li>
        <li><a href="/experience" className="text-white text-2xl mb-4">Experience</a></li>
        <li><a href="/projects" className="text-white text-2xl mb-4">Projects</a></li>
        <li><a href="/contact" className="text-white text-2xl mb-4">Contact</a></li>
      </ul>
    </div>
  );
}

export default MobileMenu;
