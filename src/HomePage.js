import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="appWrap">
        <h1 className="heading">
          Compare weather in your city and anywhere else!
        </h1>
        <div className="buttonWrapper">
        <Link to={"/comparetemp"} className="buttonHomePage">
          <button>
            Compare weather from two cities
          </button>
        </Link>
        <Link to={"/comparetempmultiple"} className="buttonHomePage">
          <button>
            Compare feels-like temperatures from multiple cities
          </button>
        </Link>
        </div>
      </div>
    );
  }
}
