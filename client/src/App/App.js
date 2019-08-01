import React, { Component } from "react";
import Main from "../Pages/Main/Main";
import Nav from "../Components/Nav";
import Headroom from "react-headroom";
import "./App.scss";

export class App extends Component {
  render() {
    return (
      <>
        <Headroom style={{ transition: "all .5s ease-in-out" }}>
          <Nav />
        </Headroom>
        <Main />
      </>
    );
  }
}

export default App;
