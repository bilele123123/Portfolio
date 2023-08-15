import React from 'react';
import Header from './components/header/Header';
import HeaderWelcome from './components/header/HeaderWelcome';
import About from './components/About';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="main-body">
      <div className='header-container'>
        <div className='header-nav'><Header/></div>
        <div className='header-welcome'><HeaderWelcome></HeaderWelcome></div>
      </div>
      <div className='about-container'><About></About></div>
      <div className='experience-container'><Experience/></div>
    </div>
  );
}

export default App;
