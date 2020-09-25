import React from 'react';

import '../styles/NavBar.css';
const pdfFile = require('../assets/pdfs/cruz-r-resume.pdf');

interface NavBarState {
  stickyClass: string;
  navbarOffset: number;
}

class NavBar extends React.Component<{}, NavBarState> {

  state: NavBarState = {
    stickyClass: '',
    navbarOffset: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
    this.setState({navbarOffset: document.getElementById('navbar').offsetTop + 60})
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    this.addStickyClass();
  }

  addStickyClass() {
    if(window.pageYOffset > this.state.navbarOffset){
      this.setState({stickyClass: 'sticky'});
    }
    else if (window.pageYOffset < this.state.navbarOffset - 120)  {
      this.setState({stickyClass: ''});
    }
  }

  render(){
    return(
      <div id="navbar" className={`navbar-container ${this.state.stickyClass}`}>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href={pdfFile} className="resume">Resume</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
