import React, { Component } from "react";

export default class FeelsLikeTemp extends Component {
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
          if (data.cod === 200) {
            const tempInfo = data.main.feels_like;
            this.props.callBackFromParent(tempInfo);
          }
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
        return (
          <div>
            {this.state.dataFromApi.message}. Selected city: {this.state.city}
          </div>
        );
      } else if (this.state.dataFromApi === undefined) {
        return <div>Loading {this.state.city}...</div>;
      } else {
        return (
          <div className="wrap">
            <h2 className="localWeatherTitle">Feels like temperature in {this.state.city}:</h2>
            <div className="info">
              <div className="temp">
                feels like: {this.state.dataFromApi.main.feels_like}
              </div>
            </div>
          </div>
        );
      }
    }
  }
  