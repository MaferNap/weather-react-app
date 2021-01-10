import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);

  function convertToFahrenheit(event) {
    event.preventDefault();

    setUnit(`fahrenheit`);
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }

  function showFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div>
        <span className="maintemperature" id="current-degrees">
          {props.celsius}
        </span>
        <small>
          ºC |
          <a href="/" id="fahrenheit-degrees" onClick={convertToFahrenheit}>
            ºF{" "}
          </a>
        </small>
      </div>
    );
  } else {
    return (
      <div>
        <span className="maintemperature" id="current-degrees">
          {Math.round(showFahrenheit())}
        </span>
        <small>
          <a href="/" id="fahrenheit-degrees" onClick={convertToCelsius}>
            ºC{" "}
          </a>
          | ºF{" "}
        </small>
      </div>
    );
  }
}
