import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <div id="navbar">
        <span id="gameTitle">The Letterkenny Click Game</span>
        <span id="message">{props.message}</span>
        <span id="scoreDiv">
          <span id="currentScore">Current Score: {props.currentScore}</span>
          <span id="divider">|</span>
          <span id="topScore">Top Score: {props.topScore}</span>
        </span>
      </div>
    </div>
  );
}

export default Navbar;