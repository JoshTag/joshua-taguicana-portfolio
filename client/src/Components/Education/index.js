import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./Education.scss";

export class ResumeEducation extends Component {
  render() {
    return (
      <div className="education" id="education">
        <Fade bottom>
          <h3 className="education__header">Education</h3>
        </Fade>
        <Fade Bottom>
          <div className="education__block">
            <h4 className="education__block__title">BrainStation</h4>
            <p className="education__block__date">June 2019</p>
            <p className="education__block__program">
              Full-Time Web Development Diploma
            </p>
          </div>
        </Fade>
        <Fade Bottom>
          <div className="education__block">
            <h4 className="education__block__title">Ryerson University</h4>
            <p className="education__block__date">August 2016</p>
            <p className="education__block__program">
              Bachelor of Commerce – Accounting
            </p>
          </div>
        </Fade>
        <Fade Bottom>
          <div className="education__block">
            <h4 className="education__block__title">Sheridan College</h4>
            <p className="education__block__date">April 2013</p>
            <p className="education__block__program">
              Business Administration – Accounting
            </p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ResumeEducation;
