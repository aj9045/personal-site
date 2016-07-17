import React, { Component } from "react";
import { Modal, Header, Body } from "react-bootstrap";

export default class About extends Component {
  render() {
    if (this.props.modalOpen) {
      var modal = (
        <div className=
        "static-modal modal">
          <Modal show={this.props.modalOpen} >
            <Modal.Header>
              <button type="button" onClick={this.props.closeModal} className="closeModal close">x</button>
            </Modal.Header>
            <Modal.Body>
              <div className="resume">
                <object data="../../resources/resume.pdf" type="application/pdf" className="resume-object"></object>
              </div>
            </Modal.Body>
          </Modal>
        </div>);
    }
    else {
      var modal = <div />;
    }

    return (
      <div className="about">
        <p className="about-me">
        Hey all! My name is AJ Stuhrenberg. I recently graduated from Dev Bootcamp, an 18 week web development intensive learning experience, in December of 2014, where I learned a good amount of Ruby, Rails, JavaScript, HTML5, and CSS3. And most recently, I worked at Texts.com, a small startup in NYC. I developed the first versions of their iOS and Android apps using React Native. And I am always looking to learn more! Right now, I’m brushing up on JavaScript, ReactJS, and learning Redux. Please feel free to contact me with questions, comments, or anything else.
        </p>
        <button type="button" onClick={this.props.openModal} className="showResume btn">Resume</button>
        {modal}
      </div>
    );
  }
}