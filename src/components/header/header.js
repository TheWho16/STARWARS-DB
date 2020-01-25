import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#/">StarDB</a>
      </h3>
      <ul className="d-flex">
        <NavLink to="/people">
          <li>People</li>
        </NavLink>
 
        <NavLink to="/planets">
          <li>Planets</li>
        </NavLink>

        <NavLink to="/starships">
          <li>Starships</li>
        </NavLink>
      </ul>
      <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
        Change API
      </button>
    </div>
  );
};

export default Header;
