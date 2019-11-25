import React, { Component } from 'react';
import Hero from '../../Components/Hero';
import About from '../../Components/About'
import Education from '../../Components/Education';
import Skills from '../../Components/Skills';
import Footer from '../../Components/Footer';
import WoW from '../../Components/Projects/WoW';
import ProjectSlayr from '../../Components/Projects/Webdev-Slayr'
import ProjectStarwars from '../../Components/Projects/Star-wars'
import './Main.scss'


export class Main extends Component {
  render() {
    return (
      <>
        <Hero />
        <About />
        <section className="projects">
            <h2 className="projects__header" name="projects">Projects</h2>
          <ProjectSlayr />
          <WoW />
          <ProjectStarwars />
        </section>
        <Skills id="skills"/>
        <Education id="education"/>
        <Footer />
      </>
    )
  }
}

export default Main;
