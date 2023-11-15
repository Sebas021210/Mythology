import React, { Component } from "react";
import Header from "./componentes/Header";
import Slide from "./componentes/Slide.js";
import Movies from "./componentes/Movies.js";
import Footer from "./componentes/Footer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Slide />
        <Movies />
        <Footer />
      </div>
    );
  }
}

export default App;