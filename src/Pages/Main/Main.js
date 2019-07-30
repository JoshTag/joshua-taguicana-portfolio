import React, { Component } from 'react';
import Hero from '../../Components/Hero/Index';
import WoW from '../../Components/Project-WoW/Index';
import Resume from '../../Components/Resume/Index';
import Footer from '../../Components/Footer/Index'
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
        <Footer />
      </>
    )
  }
}

export default Main;
