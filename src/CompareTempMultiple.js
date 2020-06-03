import React, { Component } from "react";
import FeelsLikeTemp from "./FeelsLikeTemp";

export default class CompareTempMultiple extends Component {
  constructor(props) {
    super(props);

    let foo;
    debugger;
    if(props.inputCity1 === undefined || props.inputCity2 === undefined){
        foo = "";
    } else{
        foo = props.inputCity1 + "," + props.inputCity2;
    }
    this.state = {
      inputCities: [],
      showCompare: false,
      inputCitiesString: foo,
      inputCity1: props.inputCity1,
      inputCity2: props.inputCity2,

    };
    this.handleChangeCities = this.handleChangeCities.bind(this);
    this.compareTemperatures = this.compareTemperatures.bind(this);
  }

  callBackTemp = (tempFromChild) => {
    //use data from the child here
    console.log(tempFromChild);
  };

  compareTemperatures() {
    console.log(this.state.inputCitiesString);
    const cityArray = this.state.inputCitiesString.split(",");
    this.setState({ inputCities: cityArray, showCompare: true });
  }

  handleChangeCities(event) {
    this.setState({
      inputCitiesString: event.target.value,
      showCompare: false,
    });
  }

  render() {
    return (
      <div className="appWrap">
        <h2 className="heading">Compare temperatures in multiple cities</h2>
        <div className="inputCitiesWrap">
          <label className="inputLabel">
            Enter cities separeted by a comma:
            <input
              type="text"
              name="nameCities"
              value={this.state.inputCitiesString}
              onChange={this.handleChangeCities}
              placeholder="city1, city2"
            />
          </label>
          <button className="button" onClick={this.compareTemperatures}>
            compare temperatures
          </button>
        </div>
        <div className="showingAllCities">
          {this.state.showCompare ? (
            <div>
              <div>
                {this.state.inputCities.map((city, index) => (
                  <div>
                    <FeelsLikeTemp
                      city={city}
                      callBackFromParent={this.callBackTemp}
                    ></FeelsLikeTemp>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
