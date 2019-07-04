import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import characters from "./letterkenny.json"

class App extends Component {

  state = {
    characters
  };

  render() {
    return (
      <div>
        <Navbar />
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
