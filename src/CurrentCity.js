import React from "react";

export default function CurrentCity(props) {
  return (
    <span className="currentCity" id="current-city">
      <strong>{props.nameCurrentCity}</strong>
    </span>
  );
}
