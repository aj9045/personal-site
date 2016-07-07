import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div class="appContent">
        <div class="appContent-welcome">
          Welcome!
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));