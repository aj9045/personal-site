import React, { Component } from "react";


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-greeting">Hi, I'm AJ</div>

        <div className="home-tag">
          <span className="home-tag-dev tag-title">Developer</span>
          <span className="home-tag-separator">|</span>
          <span className="home-tag-artist tag-title">Artist</span>
          <span className="home-tag-separator">|</span>
          <span className="home-tag-artist tag-title">Hufflepuff</span>
        </div>
      </div>
    );
  }
}