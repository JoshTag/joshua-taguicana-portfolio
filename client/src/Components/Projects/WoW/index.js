import React, { Component } from "react";
import "../Projects.scss";
import wowMockup from "../../../Assets/Images/wow-mockup.png";
import linklogo from "../../../Assets/Images/icons8-external-link-24.png";
import gitImg from "../../../Assets/Dev Icons/github/github-original.svg"

export class ProjectWoW extends Component {
  render() {
    return (
      <div className="projectContainer">
        <h3 className="project__header show_mobile">Warcraft Auctions</h3>
        <div className="project__info">
            <div className="project__info__imageBox">
              <a
                className="project__info__imageBox--link"
                href="https://warcraftauctions.netlify.com/"
              >
                <img
                  className="project__info__imageBox--image"
                  src={wowMockup}
                  alt="Warcraft Auctions Logo"
                />
              </a>
            </div>
            <div className="project__info__content">
              <h3 className="project__info__content__header hide_mobile">
                Warcraft Auctions
              </h3>
              <p className="project__info__content__description">
                Warcraft Auctions is a site that helps players in World of
                Warcraft make decisions on which items to buy on the auction
                house through graphs which display price and quantity
                infomation.  Created for my BrainStation capstone.  Tech involved with
                this project are React.js, Node.js, Express.js, Heroku, mySQL, and phpMyAdmin.
              </p>
              <div className="project__info__content__links">
                <a
                  className="project__info__content__links--live"
                  href="https://warcraftauctions.netlify.com/"
                >
                  <img
                    className="project__info__content__links--live--img"
                    src={linklogo}
                    alt="Live"
                  />
                </a>
                <a
                  className="project__info__content__links--git"
                  href="https://github.com/JoshTag/warcraft-auctions"
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

export default ProjectWoW;
