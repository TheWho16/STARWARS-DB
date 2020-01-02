import React, { Component } from "react";

import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error:false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) this.updatePerson();
  }

  onError=(err)=>{
    this.setState({
      error:true,
      loading:false
    })
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
this.setState({loading:true})
    this.swapiService.getPerson(personId).then(person => {
      console.log(this.state)
      this.setState({
        person,
        loading: false
      });
    });
  }

  render() {
    const { person, loading, error } = this.state;
    const hasData = !(loading || error);
    const spiner = loading ? <Spinner /> : null;
    const content = hasData ? <PersonView person={person} /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    if (!person) {
      return <span>Select a person</span>;
    }

    return (
      <div className="person-details card">
        {spiner}
       {content} 
        {errorMessage}
      </div>
    );
  }
}
const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <>
      <img
        alt="person"
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
