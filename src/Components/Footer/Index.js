import React, { Component } from "react";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <section className="footerContainer">
        <h2 className="footerContainer__header">Contact Me</h2>
        <form className="footerContainer__form">
          <input className="footerContainer__form--name" placeholder="Name" />
          <textarea
            className="footerContainer__form--message"
            placeholder="Message me!"
          />
          <button className="footerContainer__form--button" onClick="">Submit</button>
        </form>
      </section>
    );
  }
}

export default Footer;
