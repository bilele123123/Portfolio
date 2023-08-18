import React from 'react';
import Header from './components/header/Header';
import HeaderWelcome from './components/header/HeaderWelcome';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className='portfolio-main-content-container'>
    <div className="main-body">
      <div className='header-container'>
        <div className='header-nav'><Header/></div>
        <div className='header-welcome'><HeaderWelcome></HeaderWelcome></div>
      </div>
      <div className='about-container'><About></About></div>
      <div className='experience-container'><Experience/></div>
      <div className='project-container'><Project/></div>
      <div className='contact-container'><Contact/></div>
    </div>

    </div>
  );
}

export default App;
