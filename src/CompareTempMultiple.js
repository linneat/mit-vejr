import WeatherInfo from "./WeatherInfo";
import React, { Component } from "react";
import FeelsLikeTemp from "./FeelsLikeTemp";

export default class CompareTempMultiple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputCities: [],
      showCompare: false,
      inputCitiesString: "",
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
    /*    
    this.state.inputCities.map(city =>(
        //go through string and seperate eact city
        //go get the feels like temp from API: 
        //const feels_like_temp = this.state.dataFromApi.main.feels_like_temp;
    )) */
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
              name="nameCity1"
              placeholder="Enter a city"
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
                    <FeelsLikeTemp city={city} callBackFromParent={this.callBackTemp}></FeelsLikeTemp>
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
