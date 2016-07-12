import React, { Component } from "react";


export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-about">About</div>
        <div className="nav-projects">Projects</div>
        <div className="nav-contact">Contact</div>
      </div>
    );
  }
}