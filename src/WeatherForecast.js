import React, {useState, useEffect} from "react";
import axios from "axios";
import ShowLoader from "./ShowLoader";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setReady(false);
    },
    [props.coordinates]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setReady(true);
    }

    function load(){
        let latitude = props.coordinates.lon;
        let longitude = props.coordinates.lat;
        let apiKey = `dae43417d2ff1d99a68e276b41145b89`;
        let unit=`metric`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    
    
    if (ready){
        return(
        <div className="WeatherForecast">
        <div className="row">
        {forecast.map(function(dailyForecast, index){
            if (index >0 && index < 6){
            return(
                <div className ="col-md" key={index}>
                <WeatherForecastDay data={dailyForecast} />
                </div>
            );
        } else {
            return null
        }
        })}   
        </div>
        </div>
    )        
    } else {
        load();

        return(
        <ShowLoader />
        )
    }

}

