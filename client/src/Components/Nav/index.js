import React, { Component } from "react";
import "./Nav.scss";

export class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <ul className="navBar__list">
          <li className="navBar__list__items">
            <a href="#about">About</a>
          </li>
          <li className="navBar__list__items">
            <a href="#projects">Projects</a>
          </li>
          <li className="navBar__list__items">
            <a href="#skills">Skills</a>
          </li>
          <li className="navBar__list__items">
            <a href="#education">Education</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
