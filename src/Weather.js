import React from "react";
import sunrise from "./images/sunrise.png";
import sunset from "./images/sunset.png";
import Quote from "./Quote";
import "./Weather.css";

export default function Weather(){
    return(
    <div className="Weather">
<header>
    <div className="row justify-content-center">
    <div className ="col-md-8 p-0 m-0"> 
    <form>
    <div className="row">
    <div className ="col-md-8 p-0 m-0"> 
      <input type="search" placeholder="Enter a city" autoFocus="on" autoComplete="off" className="form-control"/>
    </div>
    <div className="col-md-4 p-0 m-0">
      <input type="submit" value="Search" title="Search for city" className="button submit" />
     </div>
    </div>
    </form>
    </div>
    <div className="col-md-3 p-0 m-0">
    <button className="button" title="Update my location">My location</button>
    </div>
    </div>
</header>

<main>
  <div className="row main">
  <div className="col-md-4 currentCity">
  <ul className="data">
  <li className="city"><h1>New York York</h1></li>
  <li><h2 className="text-capitalize">Thunder Stroms</h2></li>
  <li><small>Last updated:</small></li>
  <li className="day">Thursday</li>
  <li className="time">16:02</li>
  </ul>
  </div>

  <div className="col-md-3 m-0 p-0 temperature">
  <span className="currentTemperature">16</span>
  <span className="units">
  <a href="/" className="celsius active" title="Switch temperature to Celsius">°C{" "}</a>{" "}
    |
  <a href="/" className="fahrenheit" title="Switch temperature to Fahrenheit">°F</a>
  </span>

  </div>
  <div className="col-md-2 currentPicture m-0 p-0 text-center">

  </div>

  <div className="col-md-3">
  <ul className="details">
  <li><span>Feels like: °C</span></li>
  <li><span>Wind: km/h</span></li>
  <li><span>Humidity: %</span></li>
  <li><img src={sunrise} alt="Sunrise symbol" width="45"/>
  </li>
  <li><img src={sunset} alt="Sunset symbol" width="45"/>
  </li>
  </ul>
  </div>
  </div>
  
<section className="weather-forecast mt-4">
    Forecast
</section>

<section className="Quote">
    <div className="Quote"><Quote /></div>
</section>

  </main>

    </div>
    )
    }