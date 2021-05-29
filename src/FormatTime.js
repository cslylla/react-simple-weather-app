import React from "react";

export default function FormatTime(props){
  let date = new Date(props.timeStamp);
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (hour < 10){
    hour = `0${hour}`;
  }
  if (minute < 10){
    minute = `0${minute}`;
  }
    return(
        <span className="FormatTime">{hour}:{minute}</span>
    )
}