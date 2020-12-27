import React from "react";
import "./World.css";

export default function World() {
  return (
    <div className="world">
      <img alt="globe" src={require("./globetransparent.png")} />
    </div>
  );
}
