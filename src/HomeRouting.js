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
            <Route
              path="/comparetempmultiple/:city1/:city2"
              render={(props) => (
                <CompareTempMultiple inputCity1={props.match.params.city1} inputCity2={props.match.params.city2}/>
              )}
            ></Route>
            <Route path="/comparetempmultiple" exact component={CompareTempMultiple}/>
           
          </Switch>
        </Router>
      </div>
    );
  }
}
