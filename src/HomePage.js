import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="appWrap">
        <div className="homePageWrap">
          <h1 className="heading">Compare weather cities around the world</h1>
          <div className="buttonWrapper">
            <Link to={"/comparetemp"} className="buttonHomePage">
              <button className="buttonClass">Compare weather from <span className="inLineBold">two</span> cities</button>
            </Link>
            <Link to={"/comparetempmultiple"} className="buttonHomePage">
              <button className="buttonClass">Compare weather from <span className="inLineBold">multiple</span> cities</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
