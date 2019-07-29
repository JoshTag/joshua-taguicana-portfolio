import React, { Component } from "react";
import ResumeWork from '../Resume-Work/Resume-Work';
import ResumeEducation from '../Resume-Education/ResumeEducation';
import Skills from '../Skills/Skills'
import "./Resume.scss";

export class Resume extends Component {
  render() {
    return (
      <section className="resume">
        <h2 className="resume__header">Resume</h2>
        <ResumeWork />
        <ResumeEducation />
        <Skills />
      </section>
    );
  }
}

export default Resume;
