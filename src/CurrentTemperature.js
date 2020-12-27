import React from "react";
import Details from "./Details";
import MainTemperature from "./MainTemperature";

export default function CurrentTemperature() {
  return (
    <div className="col temperature-displayed">
      <MainTemperature temperature={19} />
      <small>
        <a href="null" id="celsius-degrees" className="active">
          ºC{" "}
        </a>
        |
        <a href="null" id="fahrenheit-degrees">
          ºF{" "}
        </a>
      </small>
      <Details />
    </div>
  );
}
