import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

class App extends Component {
  changeTab(e) {
    var selected = e.target.getAttribute("value");

    this.setState({selected: selected});
  }

  render() {
    return (
      <div className="appContent">
        <Nav changeTab={this.changeTab.bind(this)} />
        <div className="appContent-welcome">
          Welcome!
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));