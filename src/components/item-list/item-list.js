import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {
  swapiServise = new SwapiService();
  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiServise.getAllPeople().then(peopleList => {
      this.setState({
        peopleList
      });
    });
  }

  renderItems(arr) {
    return arr.map(({id,name}) => {
      return (
        <li className="list-group-item" onClick={()=> this.props.onItemSelected(id)} key={id}>
          {name}
          
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }
    const items = this.renderItems(peopleList);
    return (
      <ul className="item-list list-group">
       {items}
      </ul>
    );
  }
}