import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
    </div>
  )
}

export default CharacterCard;