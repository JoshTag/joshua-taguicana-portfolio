import React, { Component } from 'react';
import Main from '../Pages/Main/Main';
import Nav from '../Components/Nav/Nav'
import './App.scss';

export class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Main />
      </>
    )
  }
}

export default App
