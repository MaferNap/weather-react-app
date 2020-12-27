import React from "react";

export default function Search() {
  return (
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
  );
}
