import React from "react";
import "./Cityline.css";
import Skyline from "./skylinecity1.png";

export default function Cityline() {
  return (
    <div className="cityline">
      <img alt="skyline" src={Skyline} />
    </div>
  );
}
