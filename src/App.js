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
      this.messageColor("white");
      this.handleRightClick();
    } else {
      this.handleReset();
      this.messageColor("red");
      this.setState({
        characters,
        message: "Hard No! Figure It Out.",
        currentScore: 0
      });
    }
  }

  handleRightClick = () => {
    if (this.state.currentScore === 11) {
      this.handleWin();
    } else {
      this.handleShuffle(characters);
      if (this.state.currentScore >= this.state.topScore) {
        this.handleTopScore();
      }
      this.setState({
        characters,
        message: "That's A Texas-Sized 10-4"
      })
    }
  }

  handleScore = () => {
    this.setState({
      currentScore: this.state.currentScore + 1
    });
  };

  handleTopScore = () => {
    this.setState({
      topScore: this.state.topScore + 1
    });
  };

  handleShuffle = characters => {
    characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  handleWin = () => {
    this.handleReset();
    this.setState({
      characters,
      currentScore: 0,
      topScore: 12,
      message: "WHEEL SNIPE CELLY BOYS!"
    })
  }

  messageColor = (fontColor) => {
    document.getElementById("message").style.color = fontColor;
  }

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
