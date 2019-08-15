import React, { Component } from "react";
import "./Footer.scss";
import resume from "../../Assets/Resume/Joshua_Taguicana_Resume.pdf";

export class Footer extends Component {
  render() {
    return (
      <footer className="footerContainer">
        <div id="starsF" />
        <div id="starsF2" />
        <div id="starsF3" />
        {/* <h2 className="footerContainer__header">Contact Me</h2>
        <form className="footerContainer__form">
          <input className="footerContainer__form--name" placeholder="Name" />
          <textarea
            className="footerContainer__form--message"
            placeholder="Message me!"
          />
          <button className="footerContainer__form--button" onClick="">Submit</button>
        </form> */}
        <ul>
          <li>
            <a href="https://github.com/JoshTag">GitHub</a>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/joshua-taguicana/">LinkedIn</a>
          </li>
          <li>
            <a
              className="contact-info__email"
              href="mailto:joshtaguicana@gmail.com"
            >
              joshtaguicana@gmail.com
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
