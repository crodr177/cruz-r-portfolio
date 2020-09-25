import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faCss3Alt, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faLaptop, faMobileAlt, faVial } from "@fortawesome/free-solid-svg-icons";

interface AboutSkillsState {
  headerOffset: number;
  header: string;
  animationClass: string;
  index: number;
}

class AboutSkills extends React.Component<{}, AboutSkillsState> {

  state: AboutSkillsState = {
    index: 0,
    headerOffset: 0,
    header: '',
    animationClass: '',
  }

  componentDidMount() {
    this.setState({
      headerOffset: document.getElementById('subheader').offsetTop - 400,
    });
    window.addEventListener('scroll', this.listenToScroll2);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll2);
  }

  listenToScroll2 = () => {
    if(window.pageYOffset >= this.state.headerOffset && window.pageYOffset <= this.state.headerOffset + 600){
      this.typeWriter();
      this.setState({animationClass: 'animation'});
      window.removeEventListener('scroll', this.listenToScroll2);
    }
  }

  typeWriter = () => {
    const txt = "Skills:"
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
    return(
      <div className="skills-container">
        <h2 id="subheader" className="sub-header">{this.state.header}</h2>
        <div className="about-skills">
          <div className={`skill ${this.state.animationClass}`}>
            <h1 className="bottom-buffer">Front-End</h1>
            <div className={`icons ${this.state.animationClass}`}>
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faReact} />
            </div>
          </div>
          <div className={`skill ${this.state.animationClass}`}>
            <h1 className="bottom-buffer">Back-End</h1>
            <div className={`icons ${this.state.animationClass}`}>
              <FontAwesomeIcon icon={faDatabase} />
              <FontAwesomeIcon icon={faAws} />
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
          </div>
          <div className={`skill ${this.state.animationClass}`}>
            <h1>Testing</h1>
            <h3>Unit and E2E</h3>
            <div className={`icons ${this.state.animationClass}`}>
              <FontAwesomeIcon icon={faVial} />
            </div>
          </div>
          <div className={`skill ${this.state.animationClass}`}>
            <h1>Responsive Apps</h1>
            <div className={`icons ${this.state.animationClass}`}>
              <FontAwesomeIcon icon={faLaptop} />
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSkills;
