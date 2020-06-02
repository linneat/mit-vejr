import React, { Component } from "react";
import HomeRouting from "./HomeRouting";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="appWrap">
        <h1 className="heading">
          Compare weather in your city and anywhere else!
        </h1>
        <Link to={"/comparetemp"}>
          <button>
            Compare weather from two cities
          </button>
        </Link>
      </div>
    );
  }
}
