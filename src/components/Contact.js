import React, { Component } from "react";


export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <p className="contact-info">
          Please feel free to contact me if you have any questions, comments, or anything else!  I'm most likely to check or respond to an email.
        </p>
        <ul className="contact-list">
          <li className="contact-list-item">
            <a href="mailto:stuhrenberg.aj@gmail.com" className="contact-link"><img src={"../../images/email.png"} alt="email icon" className="contact-email icon" />stuhrenberg.aj@gmail.com
            </a>
          </li>
          <li className="contact-list-item">
            <a href="http://linkedin.com/in/ajstuhrenberg" className="contact-link"><img src={"../../images/linkedin.png"} alt="linkedin icon" className="contact-linkedin icon" />/ajstuhrenberg
            </a>
          </li>
          <li className="contact-list-item">
            <a href="http://github.com/aj9045" className="contact-link"><img src={"../../images/github.png"} alt="github icon" className="contact-github icon" />aj9045
            </a>
          </li>
          <li className="contact-list-item">
            <a href="http://behance.net/aj9045" className="contact-link"><img src={"../../images/behance.png"} alt="behance icon" className="contact-behance icon" />aj9045
            </a>
          </li>
          <li className="contact-list-item">
            <a href="http://instagram.com/ajs9045" className="contact-link"><img src={"../../images/instagram.png"} alt="instagram icon" className="contact-instagram icon" />@ajs9045
            </a>
          </li>
        </ul>
      </div>
    );
  }
}