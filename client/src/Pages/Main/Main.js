import React, { Component } from 'react';
import Hero from '../../Components/Hero';
import WoW from '../../Components/Project-WoW';
import Education from '../../Components/Education';
import Skills from '../../Components/Skills';
import Footer from '../../Components/Footer';
import Fade from "react-reveal/Fade";
import './Main.scss'

export class Main extends Component {
  render() {
    return (
      <>
        <Hero />
        <section className="projects">
          <Fade bottom>
            <h2 className="projects__header" id="projects">Projects</h2>
          </Fade>
          <WoW />
        </section>
        <Skills id="skills"/>
        <Education id="education"/>
        <Footer />
      </>
    )
  }
}

export default Main;
