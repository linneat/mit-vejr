import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CompareTemp from "./CompareTemp";
import HomePage from "./HomePage";
import CompareTempMultiple from "./CompareTempMultiple";


export default class HomeRouting extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/comparetemp" exact component={CompareTemp} />
            <Route path="/comparetempmultiple" exact component={CompareTempMultiple}/>
          </Switch>
        </Router>
      </div>
    );
  }
}