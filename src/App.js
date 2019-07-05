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

  handleClick = id => {
    const characterClicked = this.state.characters.filter(card => card.id === id);
    if (!characterClicked[0].isClicked) {
      characterClicked[0].isClicked = true;
      this.handleScore();
      if (this.state.currentScore >= this.state.topScore) {
        this.handleTopScore();
        this.handleShuffle(characters);
      }
      this.setState({
        characters,
        message: "Can Cofirm"
      });
    } else {
        this.handleReset();
        this.setState({
          characters,
          message: "Hard No",
          currentScore: 0
        });
    }
  }

  handleScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  handleTopScore = () => {
    this.setState({ topScore: this.state.topScore + 1 });
  };

  handleShuffle = characters => {
    characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  handleReset = () => {
    for (let i = 0; i < characters.length; i++) {
      this.state.characters[i].isClicked = false;
    }
    this.handleShuffle(characters);
  }

  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
              name={character.name}
              isClicked={character.isClicked}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
