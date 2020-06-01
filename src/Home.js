import WeatherInfo from "./WeatherInfo";
import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputCity1: "",
      inputCity2: "",
      showWeather: false,
    };

    this.handleChangeCity1 = this.handleChangeCity1.bind(this);
    this.handleChangeCity2 = this.handleChangeCity2.bind(this);
    this.findWeather = this.findWeather.bind(this);
  }

  findWeather(event) {
    this.setState({ showWeather: true });
  }

  handleChangeCity1(event) {
    this.setState({ inputCity1: event.target.value });
  }

  handleChangeCity2(event) {
    this.setState({ inputCity2: event.target.value });
  }

  render() {
    if (this.state.showWeather) {
      return (
        <div className="appWrap">
          <h1 className="heading">
            Compare weather in your city and anywhere else!
          </h1>
          <label className="inputLabel">
            Enter first city name:
            <input
              type="text"
              name="nameCity1"
              placeholder="Enter a city"
              value={this.state.inputCity1}
              onChange={this.handleChangeCity1}
            />
          </label>
          <label>
            Enter second city name:
            <input
              type="text"
              name="nameCity2"
              placeholder="Enter a city"
              value={this.state.inputCity2}
              onChange={this.handleChangeCity2}
            />
          </label>
          <button onClick={this.findWeather}>
            Find weather for both cities
          </button>
          <WeatherInfo city={this.state.inputCity1} />
          <WeatherInfo city={this.state.inputCity2} />
        </div>
      );
    } else if (
      this.state.inputCity1 === "" ||
      this.state.inputCity2 === "" ||
      !this.state.showWeather
    ) {
      return (
        <div className="appWrap">
          <h1 className="heading">
            Compare weather in your city and anywhere else!
          </h1>

          <label className="inputLabel">
            Enter first city name:
            <input
              type="text"
              name="nameCity1"
              placeholder="Enter a city"
              value={this.state.inputCity1}
              onChange={this.handleChangeCity1}
            />
          </label>
          <label>
            Enter second city name:
            <input
              type="text"
              name="nameCity2"
              placeholder="Enter a city"
              value={this.state.inputCity2}
              onChange={this.handleChangeCity2}
            />
          </label>
          <button onClick={this.findWeather}>
            Find weather for both cities
          </button>
        </div>
      );
    }
  }
}
