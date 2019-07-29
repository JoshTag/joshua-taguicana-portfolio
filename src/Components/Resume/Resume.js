import React, { Component } from "react";
import ResumeWork from '../Resume-Work/Resume-Work'
import ResumeEducation from '../Resume-Education/ResumeEducation'
import "./Resume.scss";

export class Resume extends Component {
  render() {
    return (
      <section className="resume">
        <h2 className="resume__header">Resume</h2>
        <ResumeWork />
        <ResumeEducation />
        {/* <div className="resume__block">
          <h3 className="resume__block__header">Education</h3>
        </div>
        <div className="resume__block">
          <h3 className="resume__block__header">Skills</h3>
        </div> */}
      </section>
    );
  }
}

export default Resume;
