import React, { Component } from "react";
import "./WeatherInfo.css";

export default class WeatherInfo extends Component {
  render() {
    return (
      <div className="wrap">
          <h2 className="localWeatherTitle">Weather in {this.props.city}:</h2>
        <div className="info">
          <div className="temp">avg: {this.props.avgTemp}</div>
          <div className="temp">min: {this.props.minTemp}</div>
          <div className="temp">max: {this.props.maxTemp}</div>
          <div className="temp">feels like: {this.props.feelsLike}</div>
        </div>
        <div className="info">
          <div className="cityClass">{this.props.city}</div>
          <div className="description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}
