import React, { Component } from "react";

class EclipseText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.fullText = props.fullText;
    this.animationSpeed = props.animationSpeed || 50; // Velocidad de animación de escritura
  }

  componentDidMount() {
    this.animateText();
  }

  animateText() {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= this.fullText.length) {
        this.setState({ text: this.fullText.slice(0, currentIndex) });
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, this.animationSpeed);
  }

  render() {
    return <div className="eclipse-text">{this.state.text}</div>;
  }
}

export default EclipseText;
