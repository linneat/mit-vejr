import React, { Component } from "react";
import CompareTemp from "./CompareTemp";

export default class Home extends Component {
  
  render() {
    return (
      <div className="appWrap">
        <h1 className="heading">
          Compare weather in your city and anywhere else!
        </h1>
        
        <CompareTemp></CompareTemp>
      </div>
    );
  }
}
