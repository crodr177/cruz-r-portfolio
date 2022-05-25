import React from 'react';

import '../styles/About.css';

import profileImage from '../assets/profile-pic.jpeg';
import AboutSkills from './AboutSkills';

interface AboutState {
  header: string;
  index: number;
  headerOffset: number;
}

class About extends React.Component<{}, AboutState> {

  state: AboutState = {
    header: '',
    index: 0,
    headerOffset: 0,
  }

  componentDidMount() {
    this.setState({
      headerOffset: document.getElementById('about-header').offsetTop - 300,
    });
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    if(window.pageYOffset >= this.state.headerOffset){
      this.typeWriter();
      window.removeEventListener('scroll', this.listenToScroll);
    }
  }

  typeWriter = () => {
    const txt = "About";
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
      <div id="about" className="container">
        <h1 id="about-header" className="header">{this.state.header}</h1>
        <div className="about-me">
          <img alt="profile" src={profileImage}/>
          <div>
          <p>Hello, I'm <span>Cruz Rodriguez</span>, a software engineer in test based in Las Vegas, NV. </p>
          <p>The technical skills I have worked with focus on the front end as well as the back end of web development testing. I have worked with modern day technologies like: React and TypeScript, as well as older technologies like: jQuery. Some of the back end technologies I have worked with include: MySQL, DynamoDB and Node.js. I have also implemented unit, end-to-end, and automation tests to both back end and front end. I enjoy improving user experiences and love to break everything handed to me for testing.</p>
          </div>
        </div>
        <AboutSkills />
      </div>
    );
  }
}

export default About;
