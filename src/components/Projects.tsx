import React from 'react';

import comicsImg from '../assets/comics.png';
import guardianImg from '../assets/guardian.png';
import loginImg from '../assets/login.png';
import portfolioImg from '../assets/portfolio.png';

import '../styles/Projects.css';

interface ProjectsState {
  animationClass: string;
  header: string;
  headerOffset: number;
  index: number;
}

class Projects extends React.Component<{}, ProjectsState> {
  state: ProjectsState = {
    animationClass: '',
    header: '',
    headerOffset: 0,
    index: 0,
  }

  componentDidMount() {
    this.setState({
      headerOffset: document.getElementById('projects-header').offsetTop - 450,
    });
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    if(window.pageYOffset >= this.state.headerOffset){
      this.typeWriter();
      this.setState({animationClass: 'animation'});
      window.removeEventListener('scroll', this.listenToScroll);
    }
  }
  
  typeWriter = () => {
    const txt = "Projects";
    const speed = 200;
    if (this.state.index < txt.length) {
      this.setState({
        header: this.state.header + txt.charAt(this.state.index),
        index: this.state.index + 1,
      })
      setTimeout(this.typeWriter, speed);
    }
  }

  render(){
    return (
      <div id="projects" className="projects-container">
        <h1 id="projects-header" className="header">{this.state.header}</h1>
        <div className={`project-container ${this.state.animationClass}`}>
          <div className="column-container">
            <div className="project">
              <a href="https://github.com/crodr177/cruz-r-portfolio" target="_blank" rel="noopener noreferrer"><img src={portfolioImg}/></a>
              <p>Portfolio<br/>
                <span className="sub-par">Built using React and Responsive development</span>
              </p>
            </div>
            <div className="project">
              <a href="https://github.com/crodr177/comic" target="_blank" rel="noopener noreferrer"><img src={comicsImg}/></a>
              <p>Comic Weekly Releases<br/>
                <span className="sub-par">Built using Angular 10 and Ngrx</span>
              </p>
            </div>
          </div>
          <div className="column-container">
            <div className="project">
            <a href="https://github.com/crodr177/Login-Form" target="_blank" rel="noopener noreferrer"><img src={loginImg}/></a>
              <p>Login<br/>
                <span className="sub-par">Built using PHP and MySQL</span>
              </p>
            </div>
            <div className="project">
            <a href="https://github.com/TylerBrow/GuardianApp-CapstoneProject" target="_blank" rel="noopener noreferrer"><img src={guardianImg}/></a>
              <p>Guardian<br/>
                <span className="sub-par">Built using React, Redux, MySQL, Express (Node Framework) and React Native for mobile app part</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
