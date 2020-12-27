import React from "react";

export default function MainTemperature(props) {
  return (
    <span className="maintemperature" id="current-degrees">
      {props.temperature}
    </span>
  );
}
