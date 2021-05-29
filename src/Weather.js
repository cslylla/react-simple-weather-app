import React from "react";
import sunrise from "./images/sunrise.png";
import sunset from "./images/sunset.png";
import Quote from "./Quote";
import "./Weather.css";

export default function Weather(){
    return(
    <div className="Weather">
<header>
    <div className="row main mb-5">
    <div className="col-md-6">
    <form>
      <input type="search" placeholder="Enter a city"/>
      <input type="submit" value="Search" />
    </form>
    </div>
    <div className="col-md-6">
    <button>My location</button>
    </div>
    </div>
</header>

<main>
  <div className="row main">
  <div className="col-md-4 currentCity">
  <ul className="data">
  <li className="city"><h1></h1></li>
  <li><h2 className="text-capitalize"></h2></li>
  <li><small>Last updated:</small></li>
  <li className="day"></li>
  <li className="time"></li>
  </ul>
  </div>

  <div className="col-md-3 m-0 p-0">
  <span className="currentTemperature"></span>
  <span className="units">
  <a href="/" className="celsius active" title="Switch temperature to Celsius">°C{" "}</a>{" "}
    |
  <a href="/" className="fahrenheit" title="Switch temperature to Fahrenheit">°F</a>
  </span>

  </div>
  <div className="col-md-2 currentPicture m-0 p-0">
  
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