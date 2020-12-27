import React from "react";
import Search from "./Search";
import TemperatureDisplay from "./TemperatureDisplay";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="col-9">
      <Search />
      <TemperatureDisplay />
      <Forecast />
    </div>
  );
}
