import React, { Component } from "react";


export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-about" onClick={this.props.changeTab} value="about">About</div>
        <div className="nav-projects" onClick={this.props.changeTab} value="projects">Projects</div>
        <div className="nav-contact"onClick={this.props.changeTab} value="contact">Contact</div>
      </div>
    );
  }
}