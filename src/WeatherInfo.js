import React from "react";
import FormatDayLong from "./FormatDayLong";
import FormatTime from "./FormatTime";
import WeatherIcon from "./WeatherIcon";
import sunrise from "./images/sunrise.png";
import sunset from "./images/sunset.png";

import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return(
    <div className="WeatherInfo">
    <div className="row main">
    <div className="col-md-4 currentCity">
    <ul className="data">
        <li className="city text-capitalize"><h1>{props.data.city}</h1></li>
        <li><h2 className="text-capitalize">{props.data.description}</h2></li>
        <li><small>Last updated:</small></li>
        <li className="day"><FormatDayLong timeStamp={props.data.currentTime} /></li>
        <li className="time"><FormatTime timeStamp={props.data.currentTime} /></li>
    </ul>
    </div>

    <div className="col-md-3 m-0 p-0 temperature">
        <span className="currentTemperature">{props.data.temperature}</span>
    <span className="units">
    <a href="/" className="celsius active" title="Switch temperature to Celsius">°C{" "}</a>{" "}
    |
    <a href="/" className="fahrenheit" title="Switch temperature to Fahrenheit">°F</a>
    </span>
    </div>

    <div className="col-md-2 currentPicture m-0 p-0 text-center"><WeatherIcon code={props.data.icon} /></div>

    <div className="col-md-3">
    <ul className="details">
        <li><span>Feels like: {props.data.feelsLike}°C</span></li>
        <li><span>Wind: {props.data.wind}km/h</span></li>
        <li><span>Humidity: {props.data.humidity}%</span></li>
        <li><img src={sunrise} alt="Sunrise symbol" width="45"/> <FormatTime timeStamp={props.data.sunrise} /></li>
        <li><img src={sunset} alt="Sunset symbol" width="45"/><FormatTime timeStamp={props.data.sunset} /></li>
    </ul>
    </div>
    </div>
    </div>
    );
}