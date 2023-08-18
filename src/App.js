import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import ScrollTop from './components/ScrollTop';

import './App.css';

function App() {
  return (
    <div>
        <Header></Header>
        <About ></About>
        <Experience ></Experience>
        <Project ></Project>
        <Contact ></Contact>
        <ScrollTop></ScrollTop>
    </div>

  );
}

export default App;
