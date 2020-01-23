import React from "react";
import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose
} from "../hoc-helpers";

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {name}({model})
  </span>
);

const mapPersonMetodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMetodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMetodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonLists = compose(
  withSwapiService(mapPersonMetodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetLists = compose(
  withSwapiService(mapPlanetMetodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipLists = compose(
  withSwapiService(mapStarshipMetodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);

export { PersonLists, PlanetLists, StarshipLists };
