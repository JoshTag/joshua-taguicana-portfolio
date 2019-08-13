import React, { Component } from "react";
import "./Hero.scss";
import headshot from "../../Assets/Images/joshua-headshot.jpg";

export class Hero extends Component {
  render() {
    return (
      <section name="about" className="hero">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="hero__content">
          <img className="hero__content__img" src={headshot} alt="Headshot" />
          <div className="hero__content__text">
            <h1 className="hero__content__text--name">Joshua Taguicana</h1>
            <p className="hero__content__text--bio">
              I am new web developer dedicated to building creative websites and
              continueing to learn new skills in web development.
              Check out some of my projects below! 
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
