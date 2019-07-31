import React, { Component } from "react";
import "./Nav.scss";

export class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
          <ul className="navBar__list">
            <li className="navBar__list__items">About</li>
            <li className="navBar__list__items">Skills</li>
            <li className="navBar__list__items">Projects</li>
            <li className="navBar__list__items">Contact</li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
