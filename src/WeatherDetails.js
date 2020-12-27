import React from "react";

export default function WeatherDetails({ humidity, wind }) {
  return (
    <p>
      Humidity: <span id="humidity">{humidity}</span>%
      <br />
      Wind: <span id="wind"> {wind} </span> km/h
    </p>
  );
}
