import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 250,
        clear: "both",
        paddingTop: 80,
        paddingBottom: 50,
        textAlign: "center"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
