import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
