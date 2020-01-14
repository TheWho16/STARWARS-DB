import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

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

const PersonLists = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMetodsToProps
);
const PlanetLists = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMetodsToProps
);
const StarshipLists = withSwapiService(
  withData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipMetodsToProps
);

export { PersonLists, PlanetLists, StarshipLists };
