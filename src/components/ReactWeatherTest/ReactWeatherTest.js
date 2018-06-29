import React, { Component } from "react";
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";
//found really simple import to show 5 day forecast lmao

class ReactWeatherTest extends Component {
  render() {
    return (
      <ReactWeather
        forecast="5days"
        apikey="feba28cb6b334ec2843192540182906"
        type="city"
        city="Los Angeles"
        unit="imperial"
      />
    );
  }
}

export default ReactWeatherTest;