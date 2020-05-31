import React from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

function App() {
  return (
    <div className="appWrap">
      <h1 className="heading">Compare weather in your city and anywhere else!</h1>
      <WeatherInfo
        city="Vanløse"
        description="Cloudy"
        minTemp="18C"
        maxTemp="22C"
        avgTemp="20C"
        feelsLike="20C"
      />
      <WeatherInfo
        city="Barcelona"
        description="Clear sky"
        minTemp="22C"
        maxTemp="25C"
        avgTemp="23C"
        feelsLike="24C"
      />
    </div>
  );
}

export default App;
