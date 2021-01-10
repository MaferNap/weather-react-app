import React from "react";
import FormattedLastUpdate from "./FormattedLastUpdate";
import FormattedCurrentDate from "./FormattedCurrentDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformation(props) {
  return (
    <div className="card temperature-frame">
      <div className="card-body">
        <div className="row">
          <div className="col temperature-displayed">
            <WeatherTemperature celsius={props.data.temperature} />
            <p>
              <span className="currentCity" id="current-city">
                <strong>{props.data.city}</strong>
              </span>
              <br />
              <FormattedCurrentDate date={props.data.currentdate} />
              <FormattedLastUpdate date={props.data.update} />
            </p>
          </div>
          <div className="col">
            <h4 className="currentWeather" id="current-weather">
              {props.data.description}
            </h4>
            <p>
              Humidity: <span id="humidity">{props.data.humidity}</span>
              %
              <br />
              Wind: <span id="wind"> {props.data.wind} </span> km/h
            </p>
            <img
              src={props.data.iconUrl}
              alt="sunny"
              id="icon"
              className="weatherIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
