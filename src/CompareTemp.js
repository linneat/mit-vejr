import WeatherInfo from "./WeatherInfo";
import React, { Component } from "react";

export default class CompareTemp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputCity1: "",
      inputCity2: "",
      showWeather: false,
      fromChildTemp1: "no data yet",
      fromChildTemp2: "no data yet",
    };

    this.handleChangeCity1 = this.handleChangeCity1.bind(this);
    this.handleChangeCity2 = this.handleChangeCity2.bind(this);
    this.findWeather = this.findWeather.bind(this);
  }

  findWeather(event) {
    this.setState({ showWeather: true });
  }

  handleChangeCity1(event) {
    this.setState({ inputCity1: event.target.value, showWeather: false });
  }

  handleChangeCity2(event) {
    this.setState({ inputCity2: event.target.value, showWeather: false });
  }

  callBackTempChild1 = (tempFromChild) => {
    //use data from the child here
    console.log(tempFromChild);
    this.setState({ fromChildTemp1: tempFromChild });
  };

  callBackTempChild2 = (tempFromChild) => {
    this.setState({ fromChildTemp2: tempFromChild });
  };

  tempDifference() {
    if (this.state.fromChildTemp1 > this.state.fromChildTemp2) {
      return Math.round(this.state.fromChildTemp1 - this.state.fromChildTemp2);
    } else {
      return Math.round(this.state.fromChildTemp2 - this.state.fromChildTemp1);
    }
  }

  highestTempCity() {
    if (this.state.fromChildTemp1 > this.state.fromChildTemp2) {
      return this.state.inputCity1;
    } else {
      return this.state.inputCity2;
    }
  }

  render() {
    return (
      <div className="appWrap">
      
        <div className="inputWrap">
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
        <label className="inputLabel">
          Enter second city name:
          <input
            type="text"
            name="nameCity2"
            placeholder="Enter a city"
            value={this.state.inputCity2}
            onChange={this.handleChangeCity2}
          />
        </label>
        <button className="button" onClick={this.findWeather}>Find weather for both cities</button>
        </div>
        {this.state.inputCity1 !== "" &&
        this.state.inputCity2 !== "" &&
        this.state.showWeather ? (
          <div>
            <div className="compareTemp">It is {this.tempDifference()} degrees higher in {this.highestTempCity()}</div>
            <WeatherInfo
              city={this.state.inputCity1}
              callBackFromParent={this.callBackTempChild1}
            />

            <WeatherInfo
              city={this.state.inputCity2}
              callBackFromParent={this.callBackTempChild2}
            />
          </div>
        ) : (
          <div></div>
        )}
        {(this.state.inputCity1 === "" || this.state.inputCity2 === "") &&
        this.state.showWeather ? (
          <div>Please enter both cities</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
