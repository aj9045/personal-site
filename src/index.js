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
      selected: "home",
      showModal: false,
    };
  }

  _openModal() {
    this.setState({showModal: true});
  }

  _closeModal() {
    this.setState({showModal: false});
  }

  _changeTab(e) {
    var selected = e.target.getAttribute("value");

    this.setState({selected: selected});
  }

  render() {
    switch(this.state.selected) {
      case "about":
        var content = <About openModal={this._openModal.bind(this)} closeModal={this._closeModal.bind(this)} modalOpen={this.state.showModal} />;
        break;
      case "projects":
        var content = <Projects />;
        break;
      case "contact":
        var content = <Contact />;
        break;
      default:
        var content = <Home />;
    }
    return (
      <div className="appContent">
        <Nav changeTab={this._changeTab.bind(this)} />
        {content}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));