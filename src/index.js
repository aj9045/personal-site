import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "about",
    };
  }

  changeTab(e) {
    var selected = e.target.getAttribute("value");

    this.setState({selected: selected});
  }

  render() {
    switch(this.state.selected) {
      case "about":
        var content = <About/>
        break;
      case "projects":
        var content = <Projects />
        break;
      case "contact":
        var content = <Contact />
        break;
    }
    return (
      <div className="appContent">
        <Nav changeTab={this.changeTab.bind(this)} />
        {content}
        <div className="appContent-welcome">
          Welcome!
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));