import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../styles/Contact.css';

interface ContactState {
  email: string;
  header: string;
  headerOffset: number;
  index: number;
}

class Contact extends React.Component<{}, ContactState> {
  state: ContactState = {
    email: 'rodriguezcruz1127@gmail.com',
    header: '',
    index: 0,
    headerOffset: 0,
  }

  componentDidMount() {
    this.setState({
      headerOffset: document.getElementById('contact-header').offsetTop - 400,
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
    const txt = "Contact";
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
      <div id="contact" className="contact-container">
        <h1 id="contact-header" className="header">{this.state.header}</h1>
        <p className="contact-details">Currently looking for an engineering home. If you would like to learn more about me or have any questions, you can reach me at:</p>
        <div className="icons-contact">
          <a href="https://www.linkedin.com/in/cruz-rodriguez-a9087a15a/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href={`mailto:${this.state.email}`}><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
      </div>
    );
  }
}

export default Contact;
