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
          <img src={profileImage}/>
          <div>
          <p>Hello, I'm <span>Cruz Rodriguez</span>, a software engineer based in Las Vegas, NV. </p>
          <p>The techincal skills I have learned foucs on the front-end as well as the back-end of web development. I have worked with modern day technologies like: React and TypeScript. As well as older technologies like jQuery. Some of the back-end technologies I have worked with include: MySQL, DynamoDB and Node. While my learning and experience have focused on all aspects of web developement, my emphasis is on the front-end side. I enjoy creating great user experiences with every project I work on. I believe if you can think it, you can develop it.</p>
          </div>
        </div>
        <AboutSkills />
      </div>
    );
  }
}

export default About;
