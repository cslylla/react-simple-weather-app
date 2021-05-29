import React, {useState} from "react";
import axios from "axios";
import FormatDayLong from "./FormatDayLong";
import FormatTime from "./FormatTime";
import sunrise from "./images/sunrise.png";
import sunset from "./images/sunset.png";
import Quote from "./Quote";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData]= useState({ready:false});
    
    function handleResponse(response){ 
    setWeatherData({
        ready: true,
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        feelsLike: Math.round(response.data.main.feels_like),
        currentTime:(response.data.dt*1000),
        sunrise:(response.data.sys.sunrise*1000),
        sunset:(response.data.sys.sunset*1000),
        icon: response.data.weather[0].icon,
    });  
    }

    if (weatherData.ready){
    return(
    <div className="Weather">
<header>
    <div className="row justify-content-center">
    <div className ="col-md-8 p-0 m-0"> 
    <form>
    <div className="row">
    <div className ="col-md-6 p-0 m-0"> 
      <input type="search" placeholder="Enter a city" autoFocus="on" autoComplete="off" className="form-control"/>
    </div>
    <div className="col-md-6 p-0 m-0">
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
    <li className="city"><h1>{weatherData.city}</h1></li>
    <li><h2 className="text-capitalize">{weatherData.description}</h2></li>
    <li><small>Last updated:</small></li>
    <li className="day"><FormatDayLong timeStamp={weatherData.currentTime} /></li>
    <li className="time"><FormatTime timeStamp={weatherData.currentTime} /></li>
  </ul>
  </div>

  <div className="col-md-3 m-0 p-0 temperature">
    <span className="currentTemperature">{weatherData.temperature}</span>
  <span className="units">
  <a href="/" className="celsius active" title="Switch temperature to Celsius">°C{" "}</a>{" "}
    |
  <a href="/" className="fahrenheit" title="Switch temperature to Fahrenheit">°F</a>
  </span>

  </div>
  <div className="col-md-2 currentPicture m-0 p-0 text-center">
   {weatherData.icon} 
    </div>

  <div className="col-md-3">
  <ul className="details">
    <li><span>Feels like: {weatherData.feelsLike}°C</span></li>
    <li><span>Wind: {weatherData.wind}km/h</span></li>
    <li><span>Humidity: {weatherData.humidity}%</span></li>
    <li><img src={sunrise} alt="Sunrise symbol" width="45"/> <FormatTime timeStamp={weatherData.sunrise} /></li>
  <li><img src={sunset} alt="Sunset symbol" width="45"/><FormatTime timeStamp={weatherData.sunset} /></li>
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
    } else {
    let apiKey = "dae43417d2ff1d99a68e276b41145b89";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return(
    <div className="Weather">
        Loading
    </div>
    )
    }    
    }