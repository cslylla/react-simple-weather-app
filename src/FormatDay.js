import React from "react";

export default function FormatDay(props){
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

  let daysShort = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  ];

  
  if(props.length === "full"){
    let day = daysFull[date.getDay()];
    return(
      <span className="FormatDate">{day}</span>
  )
  } else {
    let day = daysShort[date.getDay()];
    return(
      <span className="FormatDate">{day}</span>
  )
  }
}