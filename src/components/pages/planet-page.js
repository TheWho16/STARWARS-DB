import React, { Component } from 'react';
import { PlanetDetails, PlanetLists } from '../sw-components';
import Row from '../row';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PlanetLists onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />} />
    );
  }
}
