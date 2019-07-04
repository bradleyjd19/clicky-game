import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div id="wrapperContainer">
      <div className="wrapper">{props.children}</div>
    </div>
  );
}

export default Wrapper;