import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(){
    return(
        <div className="WeatherForecast">
        <div className="row">
        <div className ="col">
            <div className ="WeatherForecast-day">Thu</div>
            <WeatherIcon code="01d" />
            <div className ="WeatherForecast-temeratures">
            <span className ="WeatherForecast-temerature-max">20</span>{" "}|{" "}
            <span className ="WeatherForecast-temerature-min">5</span>
            </div>
        </div>
        </div>
        </div>
    )
}