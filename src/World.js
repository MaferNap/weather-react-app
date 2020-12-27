import React from "react";
import "./World.css";
import Globe from "./globetransparent.png";

export default function World() {
  return (
    <div className="world">
      <img alt="globe" src={Globe} />
    </div>
  );
}
