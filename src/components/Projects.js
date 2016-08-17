import React, { Component } from "react";


export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projectBox">
          <div className="projectBox-info">
            <h3><a href="http://wordcount.getforge.io/" className="projectBox-link">Word Counter</a></h3>
            <a href="https://github.com/aj9045/WordCounter" className="projectBox-source">Source</a>
          </div>
          <img src="../../images/wordcount.png" className="projectBox-image" />
          <div className="projectBox-build">
            <p className="projectBox-desc">
              A quick and simple word counting tool
            </p>
            <h5 className="projectBox-builtHeader bold">Built With</h5>
            <p className="projectBox-builtList italic">ReactJS</p>
          </div>
        </div>

        <div className="projectBox">
          <div className="projectBox-info">
            <h3><a href="http://friday13.getforge.io/" className="projectBox-link">Friday 13</a></h3>
            <a href="https://github.com/aj9045/friday13" className="projectBox-source">Source</a>
          </div>
          <img src="../../images/friday13.png" className="projectBox-image" />
          <div className="projectBox-build">
            <p className="projectBox-desc">
              Shows you the next Friday the 13th from the current date.
            </p>
            <h5 className="projectBox-builtHeader bold">Built With</h5>
            <p className="projectBox-builtList italic">ReactJS</p>
          </div>
        </div>

        <div className="projectBox">
          <div className="projectBox-info">
            <h3><a href="http://simple-name-generator.s3-website-us-east-1.amazonaws.com/" className="projectBox-link">Simple Name Generator</a></h3>
            <a href="https://github.com/aj9045/Simple-Name-Generator" className="projectBox-source">Source</a>
          </div>
          <img src="../../images/namegen.png" className="projectBox-image" />
          <div className="projectBox-build">
            <p className="projectBox-desc">
              This is simple name generator using preselected names, both first and last, from two CSV files.  I made it because I like names, I like writing and I thought this might help me get inspiration for character names, and why not?
            </p>
            <h5 className="projectBox-builtHeader bold">Built With</h5>
            <p className="projectBox-builtList italic">ReactJS</p>
          </div>
        </div>

        <div className="projectBox">
          <div className="projectBox-info">
            <h3><a href="http://packsnap.herokuapp.com" className="projectBox-link"> PackSnap</a></h3>
            <a href="https://github.com/Edchen001/PackSnap" className="projectBox-source">Source</a>
          </div>
          <img src="../../images/packsnapfinal.png" className="projectBox-image" />
          <div className="projectBox-build">
            <p className="projectBox-desc">
              PackSnap is a visual travel app that makes packing for a new trip easier. We leverage a combination of API's (ForecastIO, Google Maps, Amazon), and a network of shared recommendations from fellow travelers to help provide the user with the right tools to prepare for any destination. You worry less about figuring out what to bring and more time discovering essential items needed on your next adventure.
            </p>
            <h5 className="projectBox-builtHeader bold">Built With</h5>
            <p className="projectBox-builtList italic">Ruby, Rails, JavaScript (jQuery, AJAX), and Google Maps, Forecast.io, and Amazon APIs</p>
          </div>
        </div>

        <div className="projectBox">
          <div className="projectBox-info">
            <h3><a href="http://yamikamisama.github.io/fat_princess/" className="projectBox-link">Fat Princess</a></h3>
            <a href="https://github.com/Yamikamisama/Fat-Princess" className="projectBox-source">Source</a>
          </div>
          <img src="../../images/fatprincess.png" className="projectBox-image" />
          <div className="projectBox-build">
            <p className="projectBox-desc">
              This is a basic JavaScript game, where you play the role of a princess who wants to be fat! The more cake you eat the bigger and more points you get!
            </p>
            <h5 className="projectBox-builtHeader bold">Built With</h5>
            <p className="projectBox-builtList italic">JavaScript (jQuery)</p>
          </div>
        </div>
      </div>
    );
  }
}