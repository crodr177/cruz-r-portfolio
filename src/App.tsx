import React from 'react';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div id="test" className="App">
      <Home/>
      <NavBar/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
