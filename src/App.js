import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BodyComponent from "./view/bodyComponent.js";
import "./view/bodyComponent.css";
import BodyComponent_Bottom from "./view/bodyComponent-bottom.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BodyComponent />
        <BodyComponent_Bottom />
      </div>
    );
  }
}

export default App;
