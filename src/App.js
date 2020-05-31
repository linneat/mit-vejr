import React from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

function App() {
  return (
    <div className="appWrap">
      <h1 className="heading">
        Compare weather in your city and anywhere else!
      </h1>
      <WeatherInfo city="Vanløse" />
      <WeatherInfo city="Barcelona" />
    </div>
  );
}

export default App;
