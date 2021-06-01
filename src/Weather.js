import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import ShowLoader from "./ShowLoader";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData]= useState({ ready:false });
    const [city, setCity]= useState(props.defaultCity);
    
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
        coordinates: response.data.coord
    });  
    }

    function search(){
        let apiKey = "dae43417d2ff1d99a68e276b41145b89";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    } 

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    function getLocation(location) {
        let latitude =location.coords.latitude;
        let longitude = location.coords.longitude;
        let apiKey = `dae43417d2ff1d99a68e276b41145b89`;
        let apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?`;
        let unit=`metric`;
        let apiUrl = `${apiEndPoint}lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function useMyLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(getLocation);
    }

    if (weatherData.ready){
    return(
    <div className="Weather">
        
<header>
    <div className="row justify-content-center">
    <div className ="col-md-8 p-0 m-0"> 
    <form onSubmit={handleSubmit}>
    <div className="row">
    <div className ="col-md-6 p-0 m-0"> 
      <input type="search" placeholder="Enter a city" autoFocus="on" autoComplete="off" className="form-control" onChange={handleCityChange}/>
    </div>
    <div className="col-md-6 p-0 m-0">
      <input type="submit" value="Search" title="Search for city" className="button submit" />
     </div>
    </div>
    </form>
    </div>
    <div className="col-md-3 p-0 m-0">
    <button className="button" title="Update my location" onClick={useMyLocation}>My location</button>
    </div>
    </div>
</header>

<main>
    <WeatherInfo data={weatherData}/>

<section className="weather-forecast mt-4">
    <WeatherForecast coordinates={weatherData.coordinates} />
</section>

</main>
    

    </div>
    )
    } else {
    search();

    return(
    <div className="Weather">
        <ShowLoader />
    </div>
    )
    }    
    }