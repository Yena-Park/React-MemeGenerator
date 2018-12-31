import React, { Component } from "react";
import Header from "../src/components/Header";
import MemeGenerator from "../src/components/MemeGenerator";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
