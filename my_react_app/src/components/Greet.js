import React from "react";
import Hello from "./Hello";
import World from "./World";

class Greet extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    );
  }
}

export default Greet;
