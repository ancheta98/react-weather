import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import ReactWeatherTest from './components/ReactWeatherTest/ReactWeatherTest'

import Weather from "./components/Weather/Weather";

class App extends Component {
  render() {
    return (
      <div className="App">
          <ReactWeatherTest />
      </div>
    );
  }
}

export default App;
