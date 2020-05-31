import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="wrap">
      <h1 className="heading">The weather for today in your city!</h1>
      <div className="info">
        <div className="temp">avg: 20C</div>
        <div className="temp">min: 18C</div>
        <div className="temp">max: 22C</div>
        <div className="temp">feels like: 20C</div>
      </div>
      <div className="info">
        <div className="city">Vanløse</div>
        <div className="description">Clear sky</div>
      </div>
    </div>
  );
}

export default App;
