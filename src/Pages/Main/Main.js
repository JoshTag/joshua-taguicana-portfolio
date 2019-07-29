import React, { Component } from 'react';
import Hero from '../../Components/Hero/Hero';
import WoW from '../../Components/Project-WoW/ProjectWoW';
import Resume from '../../Components/Resume/Resume'
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
        <Resume />
      </>
    )
  }
}

export default Main;
