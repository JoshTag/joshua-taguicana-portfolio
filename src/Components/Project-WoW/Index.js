import React, { Component } from "react";
import "./ProjectWoW.scss";
import WoWLogo from "../../Assets/Images/Logo.png";

export class ProjectWoW extends Component {
  render() {
    return (
      <div className="projectContainer">
        <h3 className="project__header">Warcraft Auctions</h3>
        <div className="project__info">
          <a href="https://warcraftauctions.netlify.com/">
            <div className="project__info__imageBox">
              <img
                className="project__info__imageBox--image"
                src={WoWLogo}
                alt="Warcraft Auctions Logo"
              />
            </div>
          </a>
          <p className="project__description">
            Warcraft Auctions is a site that helps players in World of Warcraft
            make decisions on which items to buy on the auction house through
            graphs which display price and quantity infomation.
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectWoW;
