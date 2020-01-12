import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const PersonLists = withData(ItemList, getAllPeople);
const PlanetLists = withData(ItemList, getAllPlanets);
const StarshipLists = withData(ItemList, getAllStarships);

export { PersonLists, PlanetLists, StarshipLists };
