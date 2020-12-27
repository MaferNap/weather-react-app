import React from "react";
import CurrentCity from "./CurrentCity";
import CurrentDate from "./CurrentDate";
import LastUpdate from "./LastUpdate";

export default function Details() {
  return (
    <p>
      <CurrentCity nameCurrentCity="Brussels" />
      <br />
      <CurrentDate Day="Saturday" DateMonth="5" Time="17h00" />
      <br />
      <LastUpdate Day="Saturday" Time="16h58" />
    </p>
  );
}
