import React from "react";

export default function CurrentDate(props) {
  return (
    <span className="currentDate" id="current-date">
      {props.Day} {props.DateMonth}, {props.Time}
    </span>
  );
}
