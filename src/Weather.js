import React, { useState } from "react";
import axios from "axios";

import WeatherInformation from "./WeatherInformation";

import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherDetails, setWeatherDetails] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherDetails({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      update: new Date(response.data.dt * 1000),
      currentdate: new Date(),
    });
  }

  function searchCity() {
    const apiKey = "88d9871371b1db4131f1d79918fff4e1";

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityName(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findLocation);
  }

  function findLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "88d9871371b1db4131f1d79918fff4e1";
    let units = "metric";
    let apiEndingPoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${apiEndingPoint}&lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherDetails.ready) {
    return (
      <div className="col-12">
        <form
          onSubmit={handleSubmit}
          className="weatherSearch"
          id="city-search"
        >
          <input
            className="cityBox"
            type="text"
            placeholder="Enter City..."
            autoComplete="off"
            autoFocus="on"
            id="city-quest"
            onChange={handleCityName}
          />

          <input
            className="searchbutton"
            type="submit"
            value="Search"
            id="city-search-button"
          />

          <button
            className="locationButton"
            id="current-location-button"
            onClick={getCurrentLocation}
          >
            Current Location{" "}
            <span role="img" aria-label="pin">
              {" "}
              📍{" "}
            </span>
          </button>
        </form>
        <WeatherInformation data={weatherDetails} />
        <Forecast city={weatherDetails.city} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
