import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayTemperature(response) {
    let city = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    alert(`The temperature in ${city} is ${temperature}ºC`);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=88d9871371b1db4131f1d79918fff4e1&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  return (
    <div>
      <h5>The weather in {props.city} is 18ºC</h5>
    </div>
  );
}
