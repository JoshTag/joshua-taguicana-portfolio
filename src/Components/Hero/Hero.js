import React, { Component } from "react";
import "./Hero.scss";
import headshot from "../../Assets/Images/headshot.jpg";

export class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__content">
          <img className="hero__content__img" src={headshot} alt="Headshot" />
          <div className="hero_content__text">
            <h1 className="hero__content__text--name">Joshua Taguicana</h1>
            <p className="hero__content__text--bio">
              I am new web developer dedicated to building creative websites and
              looking to continue to learn and apply new skills in a work environment. 
              Previously, I worked in accounting, and gained valuable organizational, time-management,
              and communication skills to creatively solve problems both
              individually and as a team. Check out some of my projects below! 
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
