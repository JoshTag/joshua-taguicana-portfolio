import React, { Component } from "react";
import { Link } from 'react-scroll'
import "./Nav.scss";

export class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <ul className="navBar__list">
          <li className="navBar__list__items">
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={800}>About</Link>
          </li>
          <li className="navBar__list__items">
            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={800}>Projects</Link>
          </li>
          <li className="navBar__list__items">
            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={800}>Skills</Link>
          </li>
          <li className="navBar__list__items">
            <Link activeClass="active" to="education" spy={true} smooth={true} duration={800}>Education</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
