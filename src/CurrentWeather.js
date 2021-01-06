import React from "react";

export default function CurrentWeather() {
  return (
    <div className="col">
      <h4 className="currentWeather" id="current-weather">
        Sunny
      </h4>
      <p>
        Humidity: <span id="humidity">60</span>%
        <br />
        Wind: <span id="wind"> 2 </span> km/h
      </p>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="sunny"
        id="icon"
        className="weatherIcon"
      />
    </div>
  );
}
