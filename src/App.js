import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import characters from "./letterkenny.json"

class App extends Component {

  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    message: ""
  };

  // shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  // }

  handleScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  handleTopScore = () => {
    this.setState({ topScore: this.state.topScore + 1 });
  };

  render() {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              image={character.image}
              name={character.name}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
