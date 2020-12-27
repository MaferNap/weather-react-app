import React from "react";
import CurrentTemperature from "./CurrentTemperature";
import CurrentWeather from "./CurrentWeather";

export default function TemperatureDisplay() {
  return (
    <div className="card temperature-frame">
      <div className="card-body">
        <div className="row">
          <CurrentTemperature />
          <CurrentWeather />
        </div>
      </div>
    </div>
  );
}
