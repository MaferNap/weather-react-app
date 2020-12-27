import React from "react";

export default function LastUpdate(props) {
  return (
    <span className="lastUpdate" id="last-update-time">
      Last update on {props.Day}, at {props.Time}{" "}
    </span>
  );
}
