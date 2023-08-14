import React from 'react';
import Header from './components/Header';
import HeaderWelcome from './components/HeaderWelcome';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="main-body">
      <div className='header-container'>
        <div className='header-nav'><Header/></div>
        <div className='header-welcome'><HeaderWelcome></HeaderWelcome></div>
      </div>
      <div className='about-container'>
        <About></About>
      </div>
    </div>
  );
}

export default App;
