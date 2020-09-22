import React from 'react';
import './App.css';

import NavBar from "./components/NavBar";
import About from './components/About';
import Projects from "./components/Projects";
import Resume from './components/Resume';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <NavBar/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
