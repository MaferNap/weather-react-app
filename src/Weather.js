import React, { useState } from "react";
import axios from "axios";
import FormattedLastUpdate from "./FormattedLastUpdate";

import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherDetails, setWeatherDetails] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherDetails({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      update: new Date(response.data.dt * 1000),
    });
  }

  if (weatherDetails.ready) {
    return (
      <div className="col-9">
        <form className="weatherSearch" id="city-search">
          <input
            className="cityBox"
            type="text"
            placeholder="Enter City..."
            autoComplete="off"
            autoFocus="on"
            id="city-quest"
          />

          <input
            className="searchbutton"
            type="submit"
            value="Search"
            id="city-search-button"
          />

          <button className="locationButton" id="current-location-button">
            Current Location{" "}
            <span role="img" aria-label="pin">
              {" "}
              📍{" "}
            </span>
          </button>
        </form>
        <div className="card temperature-frame">
          <div className="card-body">
            <div className="row">
              <div className="col temperature-displayed">
                <span className="maintemperature" id="current-degrees">
                  {weatherDetails.temperature}
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
                    <strong>{weatherDetails.city}</strong>
                  </span>
                  <br />
                  <span className="currentDate" id="current-date">
                    Wednesday 6, 12h27
                  </span>
                  <br />
                  <FormattedLastUpdate date={weatherDetails.update} />
                </p>
              </div>
              <div className="col">
                <h4 className="currentWeather" id="current-weather">
                  {weatherDetails.description}
                </h4>
                <p>
                  Humidity: <span id="humidity">{weatherDetails.humidity}</span>
                  %
                  <br />
                  Wind: <span id="wind"> {weatherDetails.wind} </span> km/h
                </p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="sunny"
                  id="icon"
                  className="weatherIcon"
                />
              </div>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "88d9871371b1db4131f1d79918fff4e1";

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
