import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card grow" onClick={() => props.handleClick(props.id)}>
      <img src={props.image} alt={props.name} />
    </div>
  )
}

export default CharacterCard;