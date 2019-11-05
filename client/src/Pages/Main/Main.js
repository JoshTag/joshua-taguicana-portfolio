import React, { Component } from 'react';
import Hero from '../../Components/Hero';
import About from '../../Components/About'
import Education from '../../Components/Education';
import Skills from '../../Components/Skills';
import Footer from '../../Components/Footer';
import WoW from '../../Components/Projects/WoW';
import ProjectSlayr from '../../Components/Projects/Webdev-Slayr'
import ProjectStarwars from '../../Components/Projects/Star-wars'
import Fade from "react-reveal/Fade";
import './Main.scss'


export class Main extends Component {

  componentDidMount(){
    console.log("Josh Was Here")
  }

  render() {
    return (
      <>
        <Hero />
        <About />
        <section className="projects">
          <Fade bottom>
            <h2 className="projects__header" name="projects">Projects</h2>
          </Fade>
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
