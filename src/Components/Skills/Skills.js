import React, { Component } from "react";
import "./Skills.scss";
import css from "../../Assets/Dev Icons/css3/css3-plain-wordmark.svg";
import express from "../../Assets/Dev Icons/express/express-original-wordmark.svg";
import git from "../../Assets/Dev Icons/git/git-original.svg";
import heroku from "../../Assets/Dev Icons/heroku/heroku-original.svg";
import html from "../../Assets/Dev Icons/html5/html5-plain-wordmark.svg";
import js from "../../Assets/Dev Icons/javascript/javascript-plain.svg";
import mongo from "../../Assets/Dev Icons/mongodb/mongodb-plain-wordmark.svg";
import mysql from "../../Assets/Dev Icons/mysql/mysql-plain-wordmark.svg";
import nodejs from "../../Assets/Dev Icons/nodejs/nodejs-plain-wordmark.svg";
import npm from "../../Assets/Dev Icons/npm/npm-original-wordmark.svg";
import react from "../../Assets/Dev Icons/react/react-original.svg";
import sass from "../../Assets/Dev Icons/sass/sass-original.svg";
import vue from "../../Assets/Dev Icons/vuejs/vuejs-original-wordmark.svg";

export class Skills extends Component {
  render() {
    return (
      <div className="skillsContainer">
        <h2 className="skillsContainer__header">Skills</h2>
        <div className="skillsContainer__icons">
          <img className="skillsContainer__icons--img" src={css} alt="" />
          <img className="skillsContainer__icons--img" src={express} alt="" />
          <img className="skillsContainer__icons--img" src={git} alt="" />
          <img className="skillsContainer__icons--img" src={heroku} alt="" />
          <img className="skillsContainer__icons--img" src={html} alt="" />
          <img className="skillsContainer__icons--img" src={js} alt="" />
          <img className="skillsContainer__icons--img" src={mongo} alt="" />
          <img className="skillsContainer__icons--img" src={mysql} alt="" />
          <img className="skillsContainer__icons--img" src={nodejs} alt="" />
          <img className="skillsContainer__icons--img" src={npm} alt="" />
          <img className="skillsContainer__icons--img" src={react} alt="" />
          <img className="skillsContainer__icons--img" src={sass} alt="" />
          <img className="skillsContainer__icons--img" src={vue} alt="" />
        </div>
      </div>
    );
  }
}

export default Skills;
