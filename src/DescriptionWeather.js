import React from "react";

export default function DescriptionWeather(props) {
  return (
    <h4 className="currentWeather" id="current-weather">
      {props.weatherNow}
    </h4>
  );
}
