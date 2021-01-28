import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

import '../styles/NavBar.css';
const pdfFile = require('../assets/pdfs/Cruz_Rodriguez_Software_Eng.pdf').default;

interface NavBarState {
  responsiveClass: string;
  stickyClass: string;
  navbarOffset: number;
}

class NavBar extends React.Component<{}, NavBarState> {

  state: NavBarState = {
    responsiveClass: '',
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

  addResponsiveClass = () => {
    if(this.state.responsiveClass !== 'responsive'){
      this.setState({
        responsiveClass: 'responsive',
      })
    } else {
      this.setState({
        responsiveClass: '',
      })
    }
  }

  render(){
    return(
      <div id="navbar" className={`navbar-container ${this.state.stickyClass} ${this.state.responsiveClass}`}>
        <button onClick={this.addResponsiveClass}><FontAwesomeIcon icon={faBars} /></button>
        <ul className="navbar-menu">
          <li><a href="#home" onClick={this.addResponsiveClass}>Home</a></li>
          <li><a href="#about" onClick={this.addResponsiveClass}>About</a></li>
          <li><a href="#projects" onClick={this.addResponsiveClass}>Projects</a></li>
          <li><a href="#contact" onClick={this.addResponsiveClass}>Contact</a></li>
          <li><a href={pdfFile} className="resume" onClick={this.addResponsiveClass}>Resume</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
