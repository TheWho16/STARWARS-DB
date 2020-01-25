import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import { Route, BrowserRouter } from "react-router-dom";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import "./app.css";

import { SwapiServiceProvider } from "../swapi-servise-context";
import { PeoplePage, StarshipsPage, PlanetsPage } from "../pages";

export default class App extends Component {
  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <BrowserRouter>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet  />
              <Route path="/people" render={() => <PeoplePage />} />
              <Route path="/starships" render={() => <StarshipsPage />} />
              <Route path="/planets" render={() => <PlanetsPage />} />
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
