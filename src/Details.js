import React from "react";

export default function Details() {
  return (
    <p>
      <span className="currentCity" id="current-city">
        <strong>Brussels</strong>
      </span>
      <br />
      <span className="currentDate" id="current-date">
        Wednesday 6, 12h27
      </span>
      <br />
      <span className="lastUpdate" id="last-update-time">
        Last update on Tuesday 5, at 23h45{" "}
      </span>
    </p>
  );
}
