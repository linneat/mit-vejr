import React, { Component } from "react";
import "./WeatherInfo.css";

export default class WeatherInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: this.props.city,
      dataFromApi: undefined,
    };
  }

  componentDidMount() {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    var url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      this.state.city +
      "&appid=" +
      key +
      "&units=metric";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataFromApi: data,
        });
      });
  }

  render() {
    if (
      this.state.dataFromApi !== undefined &&
      this.state.dataFromApi.cod !== 200
    ) {
      return <div>{this.state.dataFromApi.message}. Selected city: {this.state.city}</div>;
    } else if (this.state.dataFromApi === undefined) {
      return <div>Loading {this.state.city}...</div>;
    } else {
      return (
        <div className="wrap">
          <h2 className="localWeatherTitle">Weather in {this.state.city}:</h2>
          <div className="info">
            <div className="temp">
              min: {this.state.dataFromApi.main.temp_min}
            </div>
            <div className="temp">
              max: {this.state.dataFromApi.main.temp_max}
            </div>
            <div className="temp">
              feels like: {this.state.dataFromApi.main.feels_like}
            </div>
          </div>
          <div className="info">
            <div className="cityClass">
              {this.state.dataFromApi.weather[0].description} in{" "}
              {this.state.city} today.
            </div>
            <div className="description">{this.props.description}</div>
          </div>
        </div>
      );
    }
  }
}
