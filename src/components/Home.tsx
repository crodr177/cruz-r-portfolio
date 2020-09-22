import React from 'react';

import '../styles/Home.css';

interface HomeState {
  containerClass: string;
  buttonClass: string;
  intro: string;
  index: number;
}

class Home extends React.Component<{}, HomeState> {

  state: HomeState = {
    containerClass: '',
    buttonClass: '',
    intro: '',
    index: 0,
  }

  componentDidMount() {
    setTimeout(() =>
    this.setState({
      containerClass: 'brighten',
    }), 1000)

    setTimeout(() => 
    this.typeWriter()
    , 3000)

    setTimeout(() =>
    this.setState({
      buttonClass: 'glow',
    }), 7500)
  }

typeWriter = () => {
  const txt = "Hello, I'm Cruz Rodriguez. I'm a front-end web developer.";
  const speed = 70;
  if (this.state.index < txt.length) {
    this.setState({
      intro: this.state.intro + txt.charAt(this.state.index),
      index: this.state.index + 1,
    })
    setTimeout(this.typeWriter, speed);
  }
}

  render(){
    return(
      <div className={`home-container ${this.state.containerClass}`}>
      <h1>{this.state.intro}</h1>
      <a className={`see-more ${this.state.buttonClass}`} href="#navbar">See More!</a>
    </div>
    );
  }
}

export default Home;
