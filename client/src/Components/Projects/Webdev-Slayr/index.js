import React, { Component } from "react";
import "../Projects.scss";
import webSlayrMockup from "../../../Assets/Images/webslayr-mockup.png";
import linklogo from "../../../Assets/Images/icons8-external-link-24.png";
import gitImg from "../../../Assets/Dev Icons/github/github-original.svg"

export class ProjectSlayr extends Component {
  render() {
    return (
      <div className="projectContainer">
        <h3 className="project__header show_mobile">Webdev-Slayr</h3>
        <div className="project__info project-reverse">
            <div className="project__info__imageBox">
              <a
                className="project__info__imageBox--link"
                href="https://webdev-slayr.netlify.com/"
              >
                <img
                  className="project__info__imageBox--image"
                  src={webSlayrMockup}
                  alt="Warcraft Auctions Logo"
                />
              </a>
            </div>
            <div className="project__info__content">
              <h3 className="project__info__content__header hide_mobile">
                Webdev-Slayr
              </h3>
              <p className="project__info__content__description">
                Webdev-Slayr is a turn based game fighting game with a web developer theme.  
                You start as a junior dev and go through the caves of code to fight your way through
                until you face the final super developer boss.  All assets were created by myself using sketch.
                This project was created to teach myself Vue.js as well as sketch.
              </p>
              <div className="project__info__content__links">
                <a
                  className="project__info__content__links--live"
                  href="https://webdev-slayr.netlify.com/"
                >
                  <img
                    className="project__info__content__links--live--img"
                    src={linklogo}
                    alt="Live"
                  />
                </a>
                <a
                  className="project__info__content__links--git"
                  href="https://github.com/JoshTag/web-slayr"
                >
                  <img className="project__info__content__links--live--img" src={gitImg} alt="Git Hub OctoCat" />
                </a>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ProjectSlayr;
