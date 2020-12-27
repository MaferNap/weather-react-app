import React from "react";
import DescriptionWeather from "./DescriptionWeather";
import WeatherDetails from "./WeatherDetails";

export default function CurrentWeather() {
  return (
    <div className="col">
      <DescriptionWeather weatherNow="Sunny" />
      <WeatherDetails humidity={60} wind={2} />
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="sunny"
        id="icon"
        className="weatherIcon"
      />
    </div>
  );
}
