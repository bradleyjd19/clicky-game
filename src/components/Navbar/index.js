import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {

  state = {
    currentScore: 0,
    topScore: 0
  };

  handleScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  handleTopScore = () => {
    this.setState({ topScore: this.state.topScore + 1 });
  };

  render() {
    return (
      <div>
        <div id="navbar">
          <span id="gameTitle">The Letterkenny Click Game</span>
          <span id="topScore">Top Score: {this.state.topScore}</span>
          <span id="divider">|</span>
          <span id="currentScore">Current Score: {this.state.currentScore}</span>
          <span id="guessStatus"></span>
        </div>
      </div>
    );
  }
}

export default Navbar;