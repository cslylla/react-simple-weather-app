import React from "react";

export default function FormatDayLong(props){
let date = new Date(props.timeStamp);
  let daysFull = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  ];
  let today = daysFull[date.getDay()];
  return(
      <span className="FormatDateLong">{today}</span>
  )
}