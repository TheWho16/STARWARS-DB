import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

import "./random-planet.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error:false
  };

componentDidMount(){
  this.updatePlanet();
  this.interval = setInterval(this.updatePlanet, 3500);
}
componentWillUnmount(){
  clearInterval(this.interval);

}
  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError=(err)=>{
    this.setState({
      error:true,
      loading:false
    })
  }

  updatePlanet=()=> {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService
    .getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError)
  };

  render() {
    const { planet, loading,error } = this.state;
    const hasData = !(loading || error)
    const spiner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    const errorMessage = error ? <ErrorIndicator/>: null;
    return (
      <div className="random-planet jumbotron rounded">
        {spiner}
        {content}
        {errorMessage}
      </div>
    );
  }
}
const PlanetView = ({ planet }) => {
  const { population, rotationPeriod, diameter, name } = planet;
  return (
    <>
      <img
        className="planet-image"
        alt="imagePlanet"
        src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};