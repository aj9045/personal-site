import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav.js";

class App extends Component {
  render() {
    return (
      <div className="appContent">
        <Nav />
        <div className="appContent-welcome">
          Welcome!
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));