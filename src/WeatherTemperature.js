import React, {useState} from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props){
    const [unit, setUnit] =useState("celsius");

    function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
    };

    function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
    };

    function fahrenheit(){
        return Math.round((props.celsius * 9 /5)+32);
    }

    if(unit === "celsius"){
    return(
        <div className="WeatherTemperature">
        <span className="currentTemperature">{props.celsius}</span>

        <span className="units">
        °C{" "}|{" "}
        <a href="/" title="Switch temperature to Fahrenheit" onClick={showFahrenheit}>°F</a>
        </span>
        </div>
    )
    } else {
        return (
        <div className="WeatherTemperature">
        <span className="currentTemperature">{fahrenheit()}</span>

        <span className="units">
        <a href="/" title="Switch temperature to Celsius" onClick={showCelsius}>°C</a>{" "}|{" "}°F
        </span>
        </div>
        );
    }


    
}