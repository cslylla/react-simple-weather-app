import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDay from "./FormatDay";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        return Math.round(props.data.temp.max)
    }

    function minTemperature(){
        return Math.round(props.data.temp.min)
    }

    function day(){
        return <FormatDay timeStamp={props.data.dt*1000} />
    }

    return(
        <div className="WeahterForecastDay">
            <div className ="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={60}/>
            <div className ="WeatherForecast-temeratures">
            <span className ="WeatherForecast-temerature-max">{maxTemperature()}</span>{" "}|{" "}
            <span className ="WeatherForecast-temerature-min">{minTemperature()}</span>
            </div>
        </div>
    );
}