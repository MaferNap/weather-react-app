import React from "react";

export default function CurrentTemperature() {
  return (
    <div className="col temperature-displayed">
      <span className="maintemperature" id="current-degrees">
        19
      </span>
      <small>
        <a href="null" id="celsius-degrees" className="active">
          ºC{" "}
        </a>
        |
        <a href="null" id="fahrenheit-degrees">
          ºF{" "}
        </a>
      </small>
      <p>
        <span className="currentCity" id="current-city">
          <strong>Brussels</strong>
        </span>
        <br />
        <span className="currentDate" id="current-date">
          Wednesday 6, 12h27
        </span>
        <br />
        <span className="lastUpdate" id="last-update-time">
          Last update on Tuesday 5, at 23h45{" "}
        </span>
      </p>
    </div>
  );
}
