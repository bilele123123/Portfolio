import React from 'react';
import Header from './components/Header';
import HeaderWelcome from './components/HeaderWelcome';
import './App.css';

function App() {
  return (
    <div className="main-body">
      <div className='portfolio-container'>
        <div className='header-nav'><Header/></div>
        <div className='header-welcome'><HeaderWelcome></HeaderWelcome></div>
      </div>
    </div>
  );
}

export default App;
