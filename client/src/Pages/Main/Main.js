import React, { Component } from 'react';
import Hero from '../../Components/Hero';
import WoW from '../../Components/Project-WoW';
import Education from '../../Components/Education';
import Skills from '../../Components/Skills'
import Footer from '../../Components/Footer'
import './Main.scss'

export class Main extends Component {
  render() {
    return (
      <>
        <Hero />
        <section className="projects">
          <h2 className="projects__header">Projects</h2>
          <WoW />
        </section>
        <Education />
        <Skills />
        <Footer />
      </>
    )
  }
}

export default Main;
