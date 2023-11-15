import React, { Component } from "react";
import Header from "./componentes/Header";
import Body from "./componentes/Body";
import Footer from "./componentes/Footer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;