import React from "react";
import Cityline from "./Cityline";
import World from "./World";
import City from "./City";

export default function Cities() {
  return (
    <div className="col-3">
      <Cityline />
      <ul className="listCities">
        <City name="London" />
        <City name="Tokyo" />
        <City name="New York" />
        <City name="Mexico City" />
        <City name="Rio de Janeiro" />
      </ul>
      <World />
    </div>
  );
}
