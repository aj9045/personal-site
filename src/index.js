import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="appContent">
        <div className="appContent-nav">Navigation</div>
        <div className="appContent-welcome">
          Welcome!
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));